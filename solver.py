from bs4 import BeautifulSoup
import pyperclip
import time
import os

PLATFORM = 'darwin'
SAVE_FILE = 'solution.txt'
SOLUTIONS_DIR = 'solutions'
TEST_PASS_SELECTOR = '.ml-auto.text-xs.text-label-3'
SOLUTION_NOT_ACCEPTED_SELECTOR = TEST_PASS_SELECTOR
SOLUTION_ACCEPTED_SELECTOR = "#qd-content > div.h-full.flex-col.ssg__qd-splitter-secondary-w > div > div.min-h-0.flex-grow.ssg__qd-splitter-primary-h > div > div.flex.h-full.w-full.flex-col.overflow-hidden > div.flex.h-full.w-full.flex-col.overflow-auto.p-5 > div.mb-4.flex.w-full.items-start.justify-between > div.flex.items-center.gap-4 > a > button" # "+ Solution" button

class Solver:
    def __init__(self, browser):
        self.browser = browser
        pass

    def _click_over_element(self, selector):
            self.page.wait_for_selector(selector)

            # Get the element's x and y coordinates
            x = self.page.evaluate("document.querySelector('" + selector + "').getBoundingClientRect().x")
            y = self.page.evaluate("document.querySelector('" + selector + "').getBoundingClientRect().y")

            # Add some pixels to the x and y coordinates, so that we click inside the element
            x += 50
            y += 50

            # Perform the click
            self.page.mouse.click(x, y)

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
        # Copy the text to the clipboard
        pyperclip.copy(text)
        # Paste the text
        self._clipboardPaste()
        # Clear the clipboard
        pyperclip.copy("")

    def _clipboardPaste(self):
        self.page.keyboard.down('Meta')
        self.page.keyboard.press('v')
        self.page.keyboard.up('Meta')

    def _clipboardCopy(self):
        self.page.keyboard.down('Meta')
        self.page.keyboard.press('c')
        self.page.keyboard.up('Meta')

    def _init_template(self):
        """
        Initializes the code editor with a template.

        We need to keep the existing function signature, so we just add the code that we need to the existing code.
        """
        # If save file exists, load it instead of the template
        try:
            with open(SAVE_FILE, 'r') as f:
                template = f.read()
                self._select_all_text()
                self._type_text(template)
                return
        except FileNotFoundError:
            pass

        self._select_all_text()

        # Insert before everything else
        self.page.keyboard.press('ArrowLeft')
        pass_count = (self.pass_count + 1) if hasattr(self, "pass_count") else 0
        test_suite_size = self.test_suite_size if hasattr(self, "test_suite_size") else "?"
        comment_header = f"""/*
 * language: {self.language}
 * problem: {self.title}
 * link: {self.problem_url}
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
"""
# this doesn't work, because this gets evaluated once, not during every loop
# * tests passed: {pass_count} / {test_suite_size}
        self._type_text(comment_header)
        self._type_text("testNumber = 0;")
        self.page.keyboard.press('Enter')


        # Insert inside the existing function definition
        # Note: sometimes we have more than one function definition (because helper classes), so we just go to the very bottom and then arrow up, to get inside the last function definition.
        self._select_all_text()
        self.page.keyboard.press('ArrowDown')
        self.page.keyboard.press('ArrowUp')
        self._type_text("return [")
        self.page.keyboard.press('Enter')
        self._type_text("][testNumber++];")

    def solve(self, page, problem_url, language="JavaScript"):
        self.page = page
        self.problem_url = problem_url
        self.language = language

        # Get the problem's page
        self.page.goto(problem_url)

        # Get the page's text and load it into Beautiful Soup
        response = self.page.content()
        soup = BeautifulSoup(response, 'html.parser')

        title_selector = '#qd-content > div.h-full.flex-col.ssg__qd-splitter-primary-w > div > div.min-h-0.flex-grow.ssg__qd-splitter-primary-h > div > div.flex.h-full.w-full.overflow-y-auto > div > div > div.w-full.px-5.pt-4 > div > div:nth-child(1) > div.flex-1 > div > div > span' # ugly, but necessary
        self.page.wait_for_selector(title_selector)
        self.title = self.page.evaluate("document.querySelector('" + title_selector + "').innerText")
        print(f"Solving problem: {self.title}")

        self._reset_solution()

        time.sleep(3) # There is some problem with something, try if sleeping helps??

        print("Let's go!")
        while True:
            self._submit()
            if self._check_if_test_passed_or_solution_accepted() == "solution_accepted":
                print("Accepted!")
                self.save_solution(permanently=True)
                return
            else:
                if hasattr(self, "pass_count") and hasattr(self, "saved_pass_count") and self.pass_count != self.saved_pass_count + 1:
                    raise Exception("Something went wrong, the number of passed tests is not increasing")
                if hasattr(self, "test_suite_size") and self.test_suite_size > 200:
                    raise Exception(f"Test suite size too large ({self.test_suite_size}), aborting.")
                self.saved_pass_count = self.pass_count
                print(f"Tests passed: {self.pass_count} / {self.test_suite_size}")
                result = self._get_result()
                self._append_result(result)
                time.sleep(30) # We are not allowed to submit too often, and also we don't want to DOS the server with requests

    def get_solution_text(self):
        # Get the whole solution via the clipboard
        self._select_all_text()
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
            # save the file
            save_file = os.path.join(SOLUTIONS_DIR, problem_number, self.language + ".js") # XXX determine extension based on language
            # create the directory if it doesn't exist
            os.makedirs(os.path.dirname(save_file), exist_ok=True)
        else:
            save_file = SAVE_FILE
        with open(save_file, 'w') as f:
            f.write(self.solution_text)

    def _submit(self):
        """Click the submit button and wait for the result to be displayed."""
        self.solution_text = self.get_solution_text()
        self.save_solution()
        print("Submitting solution:\n\n" + self.solution_text + "\n\n")
        self.page.evaluate("document.querySelector('button.bg-green-s').click()") # There is only one green button on the page smh

    def _check_if_test_passed_or_solution_accepted(self):
        """Check if the solution was accepted."""
        self.page.wait_for_selector(f"{TEST_PASS_SELECTOR}, {SOLUTION_ACCEPTED_SELECTOR}")
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
        print("Is accepted?", result, type(result), bool(result))
        return bool(result)

    def _get_result(self):
        """Get the expected result of the test case."""
        result = self.page.evaluate("Array.from(document.querySelectorAll('.flex.h-full.w-full.flex-col.space-y-2')).filter(x => x.innerText.match(/Expected/))[0].children[1].innerText.trim()")
        return result # as a string

    def _reset_solution(self):
        # Select language
        language_dropdown = '.mr-auto.flex.flex-nowrap.gap-3 button'
        self.page.wait_for_selector(language_dropdown)
        self.page.evaluate("document.querySelectorAll('" + language_dropdown + "')[0].click()")
        language_option = 'li .whitespace-nowrap'
        self.page.wait_for_selector(language_option)
        self.page.evaluate("Array.from(document.querySelectorAll('"
                + language_option
                + f"')).filter(x => x.innerText.match(/{self.language}/))[0].click()")
        # Wait a wee bit to allow the modal dialogue to close
        time.sleep(1)

        # Reset the code to the default state
        reset_button = '.overflow-hidden.ml-2.my-2 button.rounded'
        self.page.wait_for_selector(reset_button)
        self.page.evaluate("document.querySelectorAll('" + reset_button + "')[2].click()")
        confirm_button = '.px-6.pb-6.pt-6 button.bg-green-s' # There is zero semantic markup
        self.page.wait_for_selector(confirm_button)
        self.page.evaluate("document.querySelectorAll('" + confirm_button + "')[0].click()")
        # Wait a wee bit to allow the modal dialogue to close
        time.sleep(1)

        self._focus_editor()
        self._init_template()

    def _append_result(self, result):
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