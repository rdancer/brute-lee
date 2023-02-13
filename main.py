#!/usr/bin/env python3 -u

import time
import os
import json
from playwright.sync_api import sync_playwright
from bs4 import BeautifulSoup
import argparse
from solver import Solver

BASE_PATH = os.path.dirname(os.path.abspath(__file__))
COOKIE_JAR_PATH = BASE_PATH + '/cookies.json'
TWO_CAPTCHA_PATH = BASE_PATH + "/lib/2captcha/2captcha-solver-chrome-3.3.0"


parser = argparse.ArgumentParser()
parser.add_argument('problem_url', nargs='?', default=None, help='The URL of the problem to solve (optional)')
# headless = False by default
parser.add_argument('--headless', action='store_true', help='Run the browser in headless mode')
parser.add_argument('--publish-to-github', action='store_true', help='Automatically publish the solution to GitHub')
args = parser.parse_args()

print("args problem_url: " + str(args.problem_url))

def get_login_data():
    # allow dereferencing the $HOME file as ~
    passwd_file = os.path.expanduser('~/.leetcode-passwd.json')
    with open(passwd_file, 'r') as f:
        login_data = f.read()
        # decode JSON string to a dictionary
        login_data = json.loads(login_data)
        # load login, password from the dictionary
        login = login_data['login']
        password = login_data['password']
        if not login or not password:
            raise Exception('Login data is empty or malformed.')
        return login, password

def login(page):
    username, password = get_login_data()
    page.goto('https://leetcode.com/accounts/login/')
    # If we're already logged in, we'll be redirected to the home page
    time.sleep(5)
    if page.url == 'https://leetcode.com/':
        return page
    page.fill('[name="login"]', username)
    page.fill('[name="password"]', password)
    page.click('#signin_btn')
    # XXX We get a CAPTCHA here when in headless mode, so cannot proceed XXX
    try:
        page.wait_for_selector('.notification-btn-container__23CT') # notification menu / bell icon
    except Exception as e:
        page.screenshot(path='screenshot.png')
        print("Login failed. Probably a captcha. Screenshot saved to screenshot.png")
        raise e
    return page

def load_cookies(context):
    if os.path.exists(COOKIE_JAR_PATH):
        with open(COOKIE_JAR_PATH, 'r') as f:
            cookies = json.load(f)
            context.add_cookies(cookies)

# Log in to Leetcode
playwright = sync_playwright().start()
# start browser with cookies

browser = playwright.chromium.launch(headless=True if args.headless else False,
                                     args=[f"--disable-extensions-except={TWO_CAPTCHA_PATH}", f"--load-extension={TWO_CAPTCHA_PATH}"])
context = browser.new_context()
load_cookies(context)
page = context.new_page()
# Leetcode rate-limits us severely and the default 30s timeout is not enough
page.set_default_timeout(120_000)

login(page)

if args.problem_url:
    problem_url = args.problem_url
else:
    # Get today's problem from the problemset/all page
    todays_problem = 'div.grid.grid-cols-7.text-xs.text-label-3 > a[href]'
    page.goto('https://leetcode.com/problemset/all/')
    try:
        page.wait_for_selector(todays_problem)
    except Exception as e:
        print("Failed to find today's problem. Screenshot saved to screenshot.png")
        page.screenshot(path='screenshot.png')
        raise e
    soup = BeautifulSoup(page.content(), 'html.parser')

    # Find the problem's URL using Beautiful Soup
    # The last element selected is the problem for today (because all the remaining problems have no href attribute (yet))
    relative_path = soup.select(todays_problem)[-1]['href']
    problem_url = 'https://leetcode.com' + relative_path

print("Solving problem: " + problem_url)
# Solve the problem
solver = Solver(browser, publish_to_github=True if args.publish_to_github else False)
network_error_count = 0
while True:
    try:
        solver.solve(page, problem_url)
    except Exception as e:
        print("Failed to solve the problem. Screenshot saved to screenshot.png")
        page.screenshot(path='screenshot.png')
        # load the whole page into beautiful soup
        soup = BeautifulSoup(page.content(), 'html.parser')
        # if the page contains one of these error messages, react accordingly
        # if it contains the "You have attempted to run code too soon." message, wait 1 hour and try again
        if soup.find(text="You have attempted to run code too soon."):
            if backoff is None:
                backoff = 1
            else:
                backoff *= 2
            timeout = backoff * 3600
            print("You have attempted to run code too soon. Please wait {} hour{} before submitting again.".format(timeout / 3600, "s" if timeout > 3600 else ""))
            for seconds in range(timeout):
                remaining = timeout - seconds
                hours = remaining // 3600
                minutes = (remaining % 3600) // 60
                seconds = remaining % 60
                # print nicely formatted 00:00 time
                print(f"{hours:02d}:{minutes:02d}:{seconds:02d}...", end="\r")
                time.sleep(1)
            print("Timer finished. Trying again.")
            continue
        # if it contains "Please try reloading the page.", reload the page and try again
        elif soup.find(text="Unknown network error. Please try reloading page."):
            if network_error_count > 0:
                print("Too many network errors. Aborting.")
                exit(2)
            network_error_count = 1
            print("Leetcode website had an oopsie. Reloading page and trying again.")
            page.reload()
            continue
        else:
            print("Unknown error. Screenshot saved to screenshot.png")
        raise e

# Wait 5 seconds
time.sleep(5)
