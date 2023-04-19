from bs4 import BeautifulSoup
import pyperclip
import lzstring
import time
import os
import re
import json
from publisher import Publisher
from rate_limiter_logger import RateLimiterLogger
import playwright
# from parser import JavaScriptParser

ATTRIBUTION_STRING = 'Brute Lee <https://github.com/rdancer/brute-lee>'
PLATFORM = 'darwin'
SAVE_FILE = 'solution.txt'
SOLUTIONS_DIR = 'solutions'
TEST_PASS_SELECTOR = '#qd-content > div.h-full.flex-col.ssg__qd-splitter-secondary-w > div > div:nth-child(3) > div > div > div.flex.flex-grow.overflow-y-auto > div > div.mx-5.my-4.space-y-4 > div.flex.w-full.flex-wrap.items-center > div.text-xs.text-label-3 > span'
SOLUTION_NOT_ACCEPTED_SELECTOR = TEST_PASS_SELECTOR
SOLUTION_ACCEPTED_SELECTOR = "#qd-content .justify-between  a > button" # "+ Solution" button -- XXX: this has changed before and will likely change again
NEW_LAYOUT_SELECTOR = '.css-ly0btt-NewDiv'
MINIMUM_SUBMISSION_INTERVAL = 10 # seconds

class Solver:
    def __init__(self, browser, **kwargs):
        self.browser = browser
        self.publish_to_github = kwargs.get('publish_to_github', False)
        # We could load this dynamically, but alas...
        self.compressToBase64 = lzstring.LZString().compressToBase64
        self.problem_class = None
        self.rate_limiter_logger = RateLimiterLogger()
        self.expected_result_is_unquoted_string = False
        self.test_suite_size = None

    def _click_over_element(self, selector, page=None):
            if not page:
                page = self.page
            page.wait_for_selector(selector)

            # Get the element's x and y coordinates
            boundingRectangle = page.evaluate("document.querySelector('" + selector + "').getBoundingClientRect()")
            x = boundingRectangle['x'] + boundingRectangle['width'] / 2
            y = boundingRectangle['y'] + boundingRectangle['height'] / 2

            # Perform the click
            time.sleep(1); page.mouse.click(x, y); time.sleep(1)

    def _select_all_text(self):
        """We're focused inside an editable element such as a textarea or an input field. We press Control-A or Command-A to select all text in the element."""
        self._focus_editor() # Fixes: sometimes we select the whole page instead of the editor's content
        # If we're on mac, the command key is used instead of control
        if PLATFORM == 'darwin':
            modifier = 'Meta'
        else:
            modifier = 'Control'
        self.page.keyboard.down(modifier)
        self.page.keyboard.press('KeyA')
        self.page.keyboard.up(modifier)

    def _type_text(self, text):
        """
        We're focused inside an editable element such as a textarea or an input field. We type the given text into the element.

        Our problem is that the editor has a (bad) autocompletion feature for matching parentheses, quotes, etc. This feature cannot be disabled, so we must work around it.
        """
        with saved_clipboard():
            # Copy the text to the clipboard
            pyperclip.copy(text)
            # Paste the text
            self._clipboardPaste()

    def _clipboardPaste(self):
        self.page.keyboard.down('Meta')
        self.page.keyboard.press('v')
        self.page.keyboard.up('Meta')

    def _clipboardCopy(self):
        self.page.keyboard.down('Meta')
        self.page.keyboard.press('c')
        self.page.keyboard.up('Meta')

    def _init_template(self, js_code=None):
        """
        Initializes the code editor with a template.

        We need to keep the existing function signature, so we just add the code that we need to the existing code.
        """
        if js_code:
            self._select_all_text()
            self._type_text(js_code)
            time.sleep(1)
            return
        # If save file exists, load it instead of the template
        try:
            with open(SAVE_FILE, 'r') as f:
                self._init_template(f.read())
                return
        except FileNotFoundError:
            try:
                problem_number = self.title.split('.')[0]
                with open(f"templates/{problem_number}/{self.language}.js", 'r') as f:
                    self._init_template(f.read())
                    return
            except FileNotFoundError:
                pass

        self._select_all_text()

        # Insert before everything else
        self.page.keyboard.press('ArrowLeft')
        comment_header = f"""/*
 * language: {self.language}
 * problem: {self.title}
 * link: {self.problem_url}
 * author: {ATTRIBUTION_STRING}
 */
"""
        # this doesn't work, because this gets evaluated once, not during every loop
        # * tests passed: {pass_count} / {test_suite_size}
        self._type_text(comment_header)
        self._type_text("testNumber = 0;")
        self.page.keyboard.press('Enter')

        # Handle various special problem classes
        self._determine_problem_class()
        print("Problem class:", self.problem_class)
        if self.problem_class == "object-oriented":
            self.maybe_change_source_code_for_oo()
        elif self.problem_class == "binary-tree":
            self.maybe_change_source_code_for_binary_tree()
        elif self.problem_class == "doubly-linked-list":
            # This will probably work for a singly-linked list too
            self._change_source_code("doubly_linked_list", """doublyLinkedListify(arr) {
    if (typeof arr === "undefined") return new Node("sentinel") /* fixes: number of tests passed is not increasing */
    if (!arr || arr.length === 0) return null
    arr.forEach((_, i) => arr[i] = new Node(arr[i]))
    arr.forEach((_, i) =>  {
      arr[i].prev = i === 0 ? null : arr[i-1]
      arr[i].next = i === arr.length - 1 ? null : arr[i+1]
    })
    return arr[0]
}""")
        elif self.problem_class == "singly-linked-list":
            self._change_source_code("singly_linked_list", """singlyLinkedListify(arr) {
    if (typeof arr === "undefined") return new ListNode("sentinel") /* fixes: number of tests passed is not increasing */
    if (!arr || arr.length === 0) return null
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] = new ListNode(arr[i], arr[i+1] || null)
    }
    return arr[0]
}""")

        else: # normal problem
            # Insert inside the existing function definition
            # Note: sometimes we have more than one function definition (because helper classes), so we just go to the very bottom and then arrow up, to get inside the last function definition.
            self._select_all_text()
            self.page.keyboard.press('ArrowDown')
            self.page.keyboard.press('ArrowUp')
            self._type_text("return [")
            self.page.keyboard.press('Enter')
            self._type_text("][testNumber++];")

    def maybe_change_source_code_for_oo(self):
        if "object will be instantiated and called as such" in self.solution_text:
            out = []
            virgin = True
            for line in self.solution_text.split('\n'):
                out.append(line)
                if " function(" in line:
                    out.append(f"  {'return ' if not virgin else ''}mySolution()")
                    virgin = False
                elif " * link: " in line:
                    out.append(" * note: object-oriented, flat")

            s = "\n".join(out)
            s += """

function mySolution() {
  return buffer[testNumber++];
}
var buffer = [
    ["sentinel"]].flat();
"""
            self.solution_text = s
            self._select_all_text()
            with saved_clipboard():
                pyperclip.copy(self.solution_text)
                self._clipboardPaste()

    def maybe_change_source_code_for_binary_tree(self):
        if "Definition for a binary tree node" in self.solution_text and not "* note: binary_tree" in self.solution_text:
            self._change_source_code("binary_tree", """binaryTreeify(arr) {
    if (!arr || arr.length === 0) return null
    for (let i = arr.length - 1; i >= 0; i--) {
    const val = arr[i]
    if (val === null) continue
    arr[i] = new TreeNode(val, arr[2*i+1], arr[2*i+2])
    }
    return arr[0]
    }""")

    def _change_source_code(self, tag, replacement):
        out = []
        for line in self.solution_text.split('\n'):
            out.append(line)
            if " * link: " in line:
                out.append(f" * note: {tag}")

        out = out[:-1] # remove the last line, which is the closing bracket
        s = "\n".join(out)
        s += f"""
return {replacement.split('(')[0]}(buffer[testNumber++]);
}};
function {replacement}
var buffer = [
["sentinel"]]
"""
        self.solution_text = s
        self._select_all_text()
        with saved_clipboard():
            pyperclip.copy(self.solution_text)
            self._clipboardPaste()

    def _determine_problem_class(self):
        """
        Determines the problem class / solution class

        * object-oriented
        * SQL
        """
        # grab the whole solution text
        self._select_all_text()
        with saved_clipboard():
            self._clipboardCopy()
            self.solution_text = pyperclip.paste()
        if "object will be instantiated and called as such" in self.solution_text:
            self.problem_class = "object-oriented"
        elif "Definition for a binary tree node" in self.solution_text:
            self.problem_class = "binary-tree"
        elif "Definition for a Node" in self.solution_text and "this.next = next" in self.solution_text:
            self.problem_class = "doubly-linked-list"
        elif "Definition for singly-linked list" in self.solution_text:
            self.problem_class = "singly-linked-list"

    def solve(self, page, problem_url, success_callback, language="JavaScript"):
        self.page = page
        self.problem_url = problem_url
        self.language = language

        # Get the problem's page
        self.page.goto(problem_url)

        # Get the page's text and load it into Beautiful Soup
        response = self.page.content()
        soup = BeautifulSoup(response, 'html.parser')

        title_selector = '#qd-content > div.h-full.flex-col.ssg__qd-splitter-primary-w  div.flex-1 > div > div > span' # ugly, but necessary -- XXX unfortunately this has changed at least once, so this might break in the future
        try:
            self.page.wait_for_selector(title_selector)
        except Exception as e:
            # check if the page contains the premium message
            if "Thanks for using LeetCode! To view this question you must subscribe to premium" in self.page.content():
                # append the problem url to premium_urls.txt
                with open("premium_urls.txt", "a") as f:
                    f.write(problem_url + "\n")
                raise Exception("This problem is premium-only.")
            elif self.page.evaluate(f"document.querySelector('{NEW_LAYOUT_SELECTOR}')") is not None:
                print("New layout detected, switching to old layout...")
                self._switch_to_new_website_layout(self.page, close=False)
                self.page.wait_for_selector(title_selector)
            else:
                raise e

        self.title = self.page.evaluate("document.querySelector('" + title_selector + "').innerText")
        print(f"Solving problem: {self.title}")

        self._reset_solution()

        time.sleep(3) # There is some problem with something, try if sleeping helps??

        print("Let's go!")
        while True:
            self._submit()
            try:
                if self._check_if_test_passed_or_solution_accepted() == "solution_accepted":
                    success_callback()
                    self.rate_limiter_logger.log_result(self.title, True, self.test_suite_size, self.test_suite_size) # Pass count is the same as test suite size, because we have just passed all the tests
                    print("Accepted! -- screenshot saved to screenshot.png")
                    self.page.screenshot(path="screenshot.png")
                    self.save_solution(permanently=True)
                    return
                else:
                    if hasattr(self, "pass_count") and hasattr(self, "saved_pass_count") and self.pass_count != self.saved_pass_count + 1:
                        raise Exception("Something went wrong, the number of passed tests is not increasing")
                    if self.test_suite_size > 1000:
                        raise Exception(f"Test suite size too large ({self.test_suite_size}), aborting.")
                    success_callback()
                    self.rate_limiter_logger.log_result(self.title, True, self.test_suite_size, self.pass_count)
                    self.saved_pass_count = self.pass_count
                    print(f"Tests passed: {self.pass_count} / {self.test_suite_size}")
                    result = self._get_result()
                    self._append_result(result)
            except playwright._impl._api_types.TimeoutError as e:
                if "TypeError: Cannot read properties of undefined (reading 'toString')" in self.get_red_error_message():
                    print("This looks like the Expected Solution is a bare string, re-trying...")
                    # self._add_note("expected_result_is_unquoted_string") # XXX TODO Note implemented
                    self.expected_result_is_unquoted_string = True
                    self._reset_solution()
                    continue
                else:
                    raise e

    def get_red_error_message(self):
        try:
            return self.page.eval_on_selector(".contents.text-red-4", "el => el.parentElement.innerText")
        except:
            return ""

    def get_solution_text(self):
        # Get the whole solution via the clipboard
        self._select_all_text()
        with saved_clipboard():
            self._clipboardCopy()
            result = pyperclip.paste()
        return result

    def save_solution(self, **kwargs):
        """Save the solution to a file."""
        # Get the save file path from kwargs
        if 'permanently' in kwargs and kwargs['permanently']:
            # The permanent save file is solutions/<problem number>/<language>.js
            problem_number = self.title.split('.')[0]
            # check if the problem number is valid -- it is a number
            if not problem_number.isdigit():
                raise Exception("The problem number is not valid")
            solution_json_filename = os.path.join(SOLUTIONS_DIR, problem_number, "solution.json")
            # save the file
            error_string = f".ERROR.{kwargs['error']}" if 'error' in kwargs else ""
            save_file = os.path.join(SOLUTIONS_DIR, problem_number, self.language + ".js" + error_string) # XXX determine extension based on language
            # create the directory if it doesn't exist
            os.makedirs(os.path.dirname(save_file), exist_ok=True)
            # If we have a valid solution, extract it and save it to a separate file
            if 'error' not in kwargs:
                # XXX not implemented for compressed solution yet (crashes)
                if not self.is_compressed():
                    self.extract_return_value(js_code=self.solution_text, save_filename=solution_json_filename)
                else:
                    print("Not saving the extracted solution array, because the solution is compressed, and saving compressed solution is not implemented yet (is buggy).")
        else:
            save_file = SAVE_FILE
        with open(save_file, 'w') as f:
            f.write(self.solution_text)

        # Maybe remove the itnermediate save file
        if 'permanently' in kwargs and kwargs['permanently'] and 'error' not in kwargs:
            # Check if the contents of the premanent save file matches self.solution_text
            with open(save_file, 'r') as f:
                if f.read() != self.solution_text:
                    raise Exception(f"Saving solution failed: contents of the permanent save file {save_file} does not match the solution text")
            print(f"Saved solution to {save_file}")
            # remove the intermediate SAVE_FILE
            os.remove(SAVE_FILE)
            if self.publish_to_github and 'error' not in kwargs:
                files = [save_file] + ([] if self.is_compressed() else [solution_json_filename])
                Publisher().push_to_github(files, f"Publish {save_file}\n\n* problem: {self.title}\n* language: {self.language}\n* link: {self.problem_url}")

    def _submit(self):
        """Click the submit button and wait for the result to be displayed."""
        self.solution_text = self.get_solution_text()
        if len(self.solution_text) > 95_000:
            if self.is_compressed():
                print(f"The solution is too big although it is already compressed: {len(self.solution_text) / 1000:.1f} kB, proceeding anyway...")
                self.save_solution(permanently=True, error="TOO_BIG_EVEN_THOUGH_COMPRESSED")
            else:
                self.convert_to_compressed()
        self.save_solution()
        print("Submitting solution:\n\n" + self.solution_text + "\n\n")
        # Wait until MINIMUM_SUBMISSION_INTERVAL has passed since the last submission
        if hasattr(self, "last_submission_time"):
            while time.time() - self.last_submission_time < MINIMUM_SUBMISSION_INTERVAL:
                time.sleep(0.1)
        else:
            time.sleep(MINIMUM_SUBMISSION_INTERVAL)
        self.last_submission_time = time.time()
        self.rate_limiter_logger.log_submission(self.title)
        self.page.evaluate("document.querySelector('button.bg-green-s').click()") # There is only one green button on the page smh

    def _check_if_test_passed_or_solution_accepted(self):
        """Check if the solution was accepted."""
        print (f"Solution size: {len(self.solution_text) / 1000:.1f} kB")
        print ("Waiting for test results...", end="", flush=True)
        self.page.wait_for_selector(f"{TEST_PASS_SELECTOR}, {SOLUTION_ACCEPTED_SELECTOR}")
        print("done.")
        if self._is_accepted():
            return "solution_accepted"
        else:
            pass_selector = TEST_PASS_SELECTOR
            result = self.page.evaluate("document.querySelector('" + pass_selector + "').innerText")
            # result looks like this: "42 / 420 tests passed"
            self.pass_count = int(result.split(' ')[0])
            self.test_suite_size = int(result.split(' ')[2])

    def _is_accepted(self):
        """Check if the solution was accepted."""
        result = self.page.evaluate(f'''Array.from(document.querySelectorAll("{SOLUTION_ACCEPTED_SELECTOR}")).map(el => el.innerText).some(s => s.trim() === "Solution")''') # the button exists and has the text "Solution"
        return bool(result)

    def _get_result(self):
        """Get the expected result of the test case."""
        result = self.page.evaluate("Array.from(document.querySelectorAll('.flex.h-full.w-full.flex-col.space-y-2')).filter(x => x.innerText.match(/Expected/))[0].children[1].innerText.trim()")
        # if the last three chars are "...", then the result has been truncated, and we need to get the full result
        if result[-3:] == "..." or result[-8:] == "View all":
            result = self._get_result_full_and_unabreviated()
        if self._expected_result_is_unquoted_string():
            result = '"' + result.replace("\\", "\\\\").replace('"', '\\"') + '"'
        return result # as a string

    def _expected_result_is_unquoted_string(self):
        if "* note: expected_result_is_unquoted_string" in self.solution_text:
            self.expected_result_is_unquoted_string = True
        return self.expected_result_is_unquoted_string

    def _reset_solution(self):
        # Select language
        language_dropdown = '.mr-auto.flex.flex-nowrap.gap-3 button'
        self.page.wait_for_selector(language_dropdown)
        self.page.evaluate("document.querySelectorAll('" + language_dropdown + "')[0].click()")
        language_option = 'li .whitespace-nowrap'
        self.page.wait_for_selector(language_option)
        try:
            self.page.evaluate("Array.from(document.querySelectorAll('"
                    + language_option
                    + f"')).filter(x => x.innerText.match(/{self.language}/))[0].click()")
            # Wait a wee bit to allow the modal dialogue to close
            time.sleep(2)
        except Exception as e:
            available_languages = self.page.evaluate('Array.from(document.querySelectorAll(\'' + language_option + '\')).map(x => x.innerText)')
            raise Exception(f"Could not select language, because {self.language} is not available for this problem.\nAvailable languages: {available_languages}\nURL: {self.problem_url}\nDescription: {self.title}") from e
        # Reset the code to the default state
        # XXX sometimes we still get a frozen page where no interaction is possible.
        # The symptom is that we select everything on the page instead of just text in the editor.
        # This has been a recurring issue since this project started; nothing has fixed it yet completely.
        # We try to sleep liberally before and after every click to mitigate the issue.
        reset_button = '.overflow-hidden.ml-2.my-2 button.rounded'
        self.page.wait_for_selector(reset_button)
        time.sleep(1); self.page.evaluate("document.querySelectorAll('" + reset_button + "')[2].click()"); time.sleep(1)
        confirm_button = '.px-6.pb-6.pt-6 button.bg-green-s' # There is zero semantic markup
        self.page.wait_for_selector(confirm_button)
        time.sleep(1); self.page.evaluate("document.querySelectorAll('" + confirm_button + "')[0].click()"); time.sleep(1)
        # Wait a wee bit to allow the modal dialogue to close
        time.sleep(1)


        print("about to focus editor...", end="", flush=True)
        self._focus_editor()
        print("editor has focus; sleeping...")
        time.sleep(5)
        self._init_template()

    def _append_result(self, result):
        if self.is_compressed():
            # result is a string at this point, so no need to json.dumps() it
            result = "'" + self.compressToBase64(result) + "'"
        self._focus_editor()
        self._select_all_text()
        self.page.keyboard.press('ArrowDown')
        self.page.keyboard.press('ArrowUp')
        self.page.keyboard.press('ArrowUp')
        self.page.keyboard.press('End')
        self._type_text(result + ",") # note: we create an empty elment at the end of the array, which is perfectly fine
        # self.page.keyboard.press('Enter') # don't press enter, because we want to have all the results on the same line

    def _focus_editor(self):
        """Focus the editor by clicking inside its textarea."""
        self._click_over_element('.monaco-scrollable-element')

    def _switch_to_old_website_layout(self):
        otherPage = self.page.context.new_page()
        # open the same url in the new page
        otherPage.goto(self.page.url + "submissions/")
        # click on the burger menu
        self._click_over_element('#navbar_user_avatar', otherPage)
        # click on the text "Revert to old version"
        time.sleep(1); otherPage.evaluate("Array.from(document.querySelectorAll('div')).filter(x => x.innerText === 'Revert to old version')[0].click()"); time.sleep(1)
        new_layout_selector = '.css-ly0btt-NewDiv'
        otherPage.wait_for_selector(new_layout_selector)
        self.website_layout = "old"
        return otherPage

    def _switch_to_new_website_layout(self, page, close=True):
        # click on the new layout selector
        self._click_over_element(NEW_LAYOUT_SELECTOR, page)
        page.wait_for_selector("#navbar_user_avatar")
        time.sleep(1)
        self.website_layout = "new"
        if close:
            page.close()

    def _get_result_full_and_unabreviated(self):
        """Get the unabreviated expected result of the last test case. Use the old website layout (temporarily) to get it."""
        print("Getting the full expected result from the previous website design...")
        otherPage = self._switch_to_old_website_layout()
        latest_submission_selector = '.ant-table-body td[class^="status-column"] a'
        otherPage.wait_for_selector(latest_submission_selector)
        # get the url from the latest submission
        url = otherPage.evaluate(f"document.querySelector('{latest_submission_selector}').href")
        print("submission url:", url)
        thirdPage  = otherPage.context.new_page()
        thirdPage.goto(url)
        # get the expected result
        expected_result_selector = "#result_wa_testcase_expected"
        thirdPage.wait_for_selector(expected_result_selector)
        expected_result = thirdPage.evaluate("document.querySelector('" + expected_result_selector + "').innerText")
        self._switch_to_new_website_layout(otherPage)
        thirdPage.close()
        return expected_result

    def extract_return_value(self, **kwargs):
        if 'js_code' in kwargs:
            js_code = kwargs['js_code']
        else:
            js_code = self.solution_text
        if 'save_filename' in kwargs:
            save_filename = kwargs['save_filename']
        else:
            save_filename = None
        try:
            for line in js_code.splitlines():
                if "return" in line:
                    last_return_line = line
            # Use regular expressions to find the return value
            match = re.search(r"return\s+(.*)", last_return_line)
            if match:
                return_value = match.group(1)
            else:
                raise ValueError("Return value not found in JavaScript code")
            # Remove the trailing comma, and append the missing bracket to the return value
            return_value = re.sub(r",\s*$", "", return_value) + ']'
            # Parse the return value as JavaScript code
            print ("About to JSON-parse the return value:", return_value)
            js_value = json.loads(return_value)
        except Exception as e:
            print("Error:", e)
            for line in js_code.splitlines():
                if "buffer" in line:
                    print("buffer:", line)
                    last_buffer_line = line
            # Use regular expressions to find the return value
            match = re.search(r"buffer\s*=\s*(.*)", last_buffer_line)
            if match:
                return_value = match.group(1)
            else:
                raise ValueError("Buffer value not found in JavaScript code")
            # Remove the trailing comma, and append the missing bracket to the return value
            return_value = re.sub(r",\s*$", "", return_value) + ']'
            # Parse the return value as JavaScript code
            print ("About to JSON-parse the return value:", return_value)
            js_value = json.loads(return_value)
            if self.is_compressed():
                js_value = [self.decompressFromBase64(x) for x in js_value]
        # Serialize the parsed value as a JSON string
        json_string = json.dumps(js_value)
        # Save the JSON string to a file if a filename is supplied
        if save_filename:
            # Remove the file if it already exists
            if os.path.exists(save_filename):
                os.remove(save_filename)
            with open(save_filename, "w") as f:
                f.write(json_string)
        return js_value

    def convert_to_compressed(self, **kwargs):
        if 'js_code' in kwargs:
            js_code = kwargs['js_code']
        else:
            js_code = self.solution_text
        with open('lib/lz-string/lz-string/libs/lz-string-decompress-minified.js', 'r') as f:
            lzstring_code = f.read().strip()
        # get the return value
        return_value = self.extract_return_value(js_code=js_code)
        # compress the return value
        compressed_array = [self.compressToBase64(json.dumps(x)) for x in return_value]
        chomped_array = str(compressed_array).rstrip(']')
        lines = js_code.split('\n')
        if "* note: binary_tree" in js_code:
            for i in range(len(lines)-1, -1, -1):
                if "var buffer = [" in lines[i]:
                    lines = lines[:i]
                    break
        else:
            # remove the last return statement and everything after it
            # the return statement is the last line that contains the word "return"
            for i in range(len(lines)-1, -1, -1):
                if "  return " in lines[i]:
                    lines = lines[:i]
                    break
            lines.append("  return buffer[testNumber++]")
            lines.append("};")
        lines.append(lzstring_code)
        lines.append("var decompress = s => JSON.parse(LZString.decompressFromBase64(s))")
        lines.append(f"var buffer = {chomped_array},") # note the trailing comma
        lines.append(f"].map(x => typeof x === 'undefined' ? undefined : decompress(x)){'.flat()' if '.flat()' in js_code else ''};")
        for line in lines:
            print ("[DEBUG] lines:", str(line[:40]) + "..." + str(line[-40:]) if len(line) > 80 else line)
        js_code = "\n".join(lines) + "\n"
        # Add the compressed header
        header = '\n * note: compressed'
        author_header = '\n * author: '
        js_code = js_code.replace(author_header, f'{header}{author_header}')
        self.solution_text = js_code
        self.save_solution()
        self._init_template() # will init with the saved solution text
        return js_code

    def is_compressed(self):
        return self.solution_text.find(' * note: compressed') != -1 # XXX this is a hack

class saved_clipboard:
    def __init__(self):
        pass
    def __enter__(self):
        self.clipboard = pyperclip.paste()
    def __exit__(self, exc_type, exc_value, traceback):
        pyperclip.copy(self.clipboard)
