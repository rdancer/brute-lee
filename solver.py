from bs4 import BeautifulSoup
import pyperclip
import time

PLATFORM='darwin'
SAVE_FILE='solution.txt'

def click_over_element(selector, page)  :
        page.wait_for_selector(selector)

        # Get the element's x and y coordinates
        x = page.evaluate("document.querySelector('" + selector + "').getBoundingClientRect().x")
        y = page.evaluate("document.querySelector('" + selector + "').getBoundingClientRect().y")

        # Add some pixels to the x and y coordinates, so that we click inside the element
        x += 50
        y += 50

        # Perform the click
        page.mouse.click(x, y)

def select_all_text(page):
    """We're focused inside an editable element such as a textarea or an input field. We press Control-A or Command-A to select all text in the element."""
    # If we're on mac, the command key is used instead of control
    if PLATFORM == 'darwin':
        modifier = 'Meta'
    else:
        modifier = 'Control'
    page.keyboard.down(modifier)
    page.keyboard.press('KeyA')
    page.keyboard.up(modifier)

def type_text(page, text):
    """
    We're focused inside an editable element such as a textarea or an input field. We type the given text into the element.

    Our problem is that the editor has a (bad) autocompletion feature for matching parentheses, quotes, etc. This feature cannot be disabled, so we must work around it.
    """
    # Copy the text to the clipboard
    pyperclip.copy(text)
    # Paste the text
    paste(page)
    # Clear the clipboard
    pyperclip.copy("")

def paste(page):
    page.keyboard.down('Meta')
    page.keyboard.press('v')
    page.keyboard.up('Meta')

def copy(page):
    page.keyboard.down('Meta')
    page.keyboard.press('c')
    page.keyboard.up('Meta')

def init_template(page):
    """
    Initializes the code editor with a template.

    We need to keep the existing function signature, so we just add the code that we need to the existing code.
    """
    # If save file exists, load it instead of the template
    try:
        with open(SAVE_FILE, 'r') as f:
            template = f.read()
            select_all_text(page)
            type_text(page, template)
            return
    except FileNotFoundError:
        pass

    select_all_text(page)

    # Insert before everything else
    page.keyboard.press('ArrowLeft')
    type_text(page, "testNumber = 0;")
    page.keyboard.press('Enter')


    # Insert inside the existing function definition
    # Note: sometimes we have more than one function definition (because helper classes), so we just go to the very bottom and then arrow up, to get inside the last function definition.
    select_all_text(page)
    page.keyboard.press('ArrowDown')
    page.keyboard.press('ArrowUp')
    type_text(page, "return [")
    page.keyboard.press('Enter')
    type_text(page, "][testNumber++];")


class Solver:
    def __init__(self, browser):
        self.browser = browser
        pass

    def solve(self, page, problem_url):
        self.page = page

        # Get the problem's page
        self.page.goto(problem_url)

        # Get the page's text and load it into Beautiful Soup
        response = self.page.content()
        soup = BeautifulSoup(response, 'html.parser')

        self._reset_solution()

        time.sleep(3) # There is some problem with something, try if sleeping helps??

        print("Let's go!")
        while True:
            self._submit()
            if self._is_accepted():
                print("Accepted!")
                return
            else:
                print(f"Tests passed: {self.pass_count} / {self.test_suite_size}")
                result = self._get_result()
                self._append_result(result)
            time.sleep(30) # We are not allowed to submit too often, and also we don't want to DOS the server with requests

    def get_solution_text(self):
        # Get the whole solution via the clipboard
        select_all_text(self.page)
        copy(self.page)
        result = pyperclip.paste()
        return result

    def save_solution(self):
        # Save the solution to a file
        with open(SAVE_FILE, 'w') as f:
            f.write(self.solution_text)

    def _submit(self):
        """Click the submit button and wait for the result to be displayed."""
        self.solution_text = self.get_solution_text()
        self.save_solution()
        print("Submitting solution:\n\n" + self.solution_text + "\n\n")
        self.page.evaluate("document.querySelector('button.bg-green-s').click()") # There is only one green button on the page smh
        time.sleep(1) # Judging takes many seconds, so we are not delaying anything by sleeping liberally here
        pass_selector = '.ml-auto.text-xs.text-label-3'
        self.page.wait_for_selector(pass_selector)

    def _is_accepted(self):
        """Check if the solution was accepted."""
        pass_selector = '.ml-auto.text-xs.text-label-3'
        result = self.page.evaluate("document.querySelector('" + pass_selector + "').innerText")
        # result looks like this: "42 / 420 tests passed"
        self.pass_count = int(result.split(' ')[0])
        self.test_suite_size = int(result.split(' ')[2])
        self.accepted = self.pass_count == self.test_suite_size
        return self.accepted

    def _get_result(self):
        """Get the expected result of the test case."""
        result = self.page.evaluate("Array.from(document.querySelectorAll('.flex.h-full.w-full.flex-col.space-y-2')).filter(x => x.innerText.match(/Expected/))[0].children[1].innerText.trim()")
        return result # as a string

    def _reset_solution(self):
        # Select language
        language_dropdown = '.mr-auto.flex.flex-nowrap.gap-3 button'
        self.page.wait_for_selector(language_dropdown)
        self.page.evaluate("document.querySelectorAll('" + language_dropdown + "')[0].click()")
        javascript_option = 'li .whitespace-nowrap'
        self.page.wait_for_selector(javascript_option)
        self.page.evaluate("Array.from(document.querySelectorAll('"
                + javascript_option
                + "')).filter(x => x.innerText.match(/JavaScript/))[0].click()")
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
        init_template(self.page)

    def _append_result(self, result):
        self._focus_editor()
        select_all_text(self.page)
        self.page.keyboard.press('ArrowDown')
        self.page.keyboard.press('ArrowUp')
        self.page.keyboard.press('ArrowUp')
        self.page.keyboard.press('End')
        type_text(self.page, result + ",") # note: we create an empty elment at the end of the array, which is perfectly fine
        # self.page.keyboard.press('Enter') # don't press enter, because we want to have all the results on the same line

    def _focus_editor(self):
        # Click inside the code editor
        click_over_element('.monaco-scrollable-element', self.page)