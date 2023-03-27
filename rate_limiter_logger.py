import sqlite3
import os
from datetime import datetime

import matplotlib.pyplot as plt
import matplotlib.dates as mdates
import numpy as np
from freezegun import freeze_time

from mpl_toolkits.axes_grid1 import host_subplot
import mpl_toolkits.axisartist as AA


class RateLimiterLogger:
    """
    A class to log and visualize problem submissions, results, and rate limits.

    This class encapsulates a SQLite3 database to store submission attempts and their results,
    along with a method to generate a report with a visualization of problem attempts, test suite size,
    progress, and rate-limited gaps using matplotlib.

    Attributes:
        db_file (str): The path to the SQLite3 database file.

    Methods:
        create_database: Creates the rate_limiter_logs directory and sets up the SQLite3 database with the logs table.
        log_submission: Logs the problem_oneline_description and timestamp when a solution is submitted to the server.
        log_result: Logs the result of the submission, including success status, test_suite_size, and test_cases_passed.
        generate_report: Generates a report with a visualization of problem attempts, test suite size, progress, and rate-limited gaps.
    """

    def __init__(self, db_file = "rate_limiter_logs/rate_limiter_logger.db"):
        """
        Initializes the RateLimiterLogger instance and creates the database if it doesn't exist.
        """        
        self.db_file = db_file
        self.create_database()
        self.last_submission = None

    def create_database(self):
        """
        Creates the rate_limiter_logs directory if it doesn't exist, and sets up the SQLite3 database with the logs table.
        """        
        if not os.path.exists("rate_limiter_logs"):
            os.mkdir("rate_limiter_logs")
        
        conn = sqlite3.connect(self.db_file)
        c = conn.cursor()
        c.execute("""CREATE TABLE IF NOT EXISTS problems
                        (problem_oneline_description TEXT PRIMARY KEY NOT NULL,
                        test_suite_size INTEGER)""")
        c.execute('''CREATE TABLE IF NOT EXISTS logs
                        (id INTEGER PRIMARY KEY AUTOINCREMENT,
                        problem_oneline_description TEXT NOT NULL,
                        timestamp TEXT NOT NULL,
                        success BOOLEAN,
                        test_suite_size INTEGER,
                        test_cases_passed INTEGER)''')
        conn.commit()
        conn.close()

    def log_submission(self, problem_oneline_description):
        """
        Logs the problem_oneline_description and timestamp when a solution is submitted to the server.

        Args:
            problem_oneline_description (str): A unique one-line description of the problem (up to 80 characters).
        """        
        conn = sqlite3.connect(self.db_file)
        c = conn.cursor()
        # Insert the problem into the problems table if it doesn't exist
        c.execute("INSERT OR IGNORE INTO problems (problem_oneline_description) VALUES (?)",
                  (problem_oneline_description,))
        # Insert a row of data and get back the assigned id
        c.execute("INSERT INTO logs (problem_oneline_description, timestamp) VALUES (?, ?)",
                  (problem_oneline_description, datetime.now().strftime("%Y-%m-%d %H:%M:%S")))
        # get back the assigned ID
        self.last_submission = {
            "id": c.lastrowid,
            "problem_oneline_description": problem_oneline_description
        }
        conn.commit()
        conn.close()

    def log_result(self, problem_oneline_description, success, test_suite_size=None, test_cases_passed=None):
        """
        Logs the result of the submission, including success status, test_suite_size, and test_cases_passed.

        Args:
            problem_oneline_description (str): A unique one-line description of the problem (up to 80 characters).
            success (bool): True if the submission was successful, False otherwise.
            test_suite_size (int, optional): The total number of test cases in the test suite. Defaults to None.
            test_cases_passed (int, optional): The number of test cases passed. Defaults to None.
        """
        if self.last_submission is None:
            raise Exception("You must call log_submission before log_result.")
        if self.last_submission["problem_oneline_description"] != problem_oneline_description:
            raise Exception("You must call log_submission with the same problem_oneline_description before log_result.")
        conn = sqlite3.connect(self.db_file)
        c = conn.cursor()
        # Update the problem's test_suite_size if it's not None
        if test_suite_size is not None:
            c.execute("UPDATE problems SET test_suite_size = ? WHERE problem_oneline_description = ?",
                    (test_suite_size, problem_oneline_description))
        c.execute('''UPDATE logs SET success = ?, test_suite_size = ?, test_cases_passed = ? 
                     WHERE id = ?''',
                  (success, test_suite_size, test_cases_passed, self.last_submission["id"]))
        conn.commit()
        conn.close()
        # reset the last_submission
        self.last_submission = None

    def generate_report(self):
        """
        Generates a report with a visualization of problem attempts, test suite size, progress, and rate-limited gaps.
        """

        # Load the data from the database
        conn = sqlite3.connect(self.db_file)
        c = conn.cursor()
        c.execute("SELECT problem_oneline_description, timestamp, success, test_cases_passed FROM logs")
        data = c.fetchall()

        # Get the test suite size for each problem
        c.execute("SELECT problem_oneline_description, test_suite_size FROM problems")
        test_suite_size_dict = {d[0]: d[1] for d in c.fetchall()}
        
        conn.close()

        # Separate the data into different lists for plotting
        descriptions = [d[0] for d in data]
        timestamps = [mdates.date2num(datetime.strptime(d[1], "%Y-%m-%d %H:%M:%S")) for d in data]
        success = [d[2] for d in data]
        test_cases_passed = [d[3] for d in data]

        print (test_suite_size_dict)
        # Get the test suite size for each problem
        test_suite_size = [test_suite_size_dict[d] if d in test_suite_size_dict else -20 for d in descriptions]

        # Create a figure and axis
        fig, ax = plt.subplots(figsize=(14, 6), dpi=100)

        host = ax # XXX for now while we're merging, let this be the host, so we don't get distracted by diffs that are merely the rename of this variable

        # Plot the test suite size and progress towards it
        host.fill_between(timestamps, test_suite_size, color='yellow', alpha=0.3, label='Test Suite Size')

        for i, (t, s, p, ts, desc) in enumerate(zip(timestamps, success, test_cases_passed, test_suite_size, descriptions)):
            if s:
                color = 'green'
                if i < len(timestamps) - 1 and success[i + 1] and descriptions[i] == descriptions[i + 1] and success[i]:
                    host.fill_between([t, timestamps[i + 1]], [ts, ts], color='yellow', alpha=0.3)
            else:
                color = 'blue'
            host.vlines(x=t, ymin=0, ymax=p, color=color, alpha=0.5)

        # Plot the one_line description text above the test_suite_size line
        for i, txt in enumerate(descriptions):
            # ... but if the last data point already has this same annotation, don't add it again
            if i > 0 and txt == descriptions[i - 1]:
                continue
            host.annotate(txt, (timestamps[i], test_suite_size[i] + 2), fontsize=8, rotation=0)

        # Plot unsuccessful submissions as red dots
        unsucc_timestamps = [timestamps[i] for i, s in enumerate(success) if not s]
        unsucc_test_cases_passed = [test_cases_passed[i] for i, s in enumerate(success) if not s]
        host.plot(unsucc_timestamps, unsucc_test_cases_passed, 'ro', label='Unsuccessful Submissions')

        # Format the x-axis with date-time labels
        host.xaxis.set_major_formatter(mdates.DateFormatter('%Y-%m-%d %H:%M'))
        plt.xticks(rotation=45)

        # Add labels and legend
        host.plot([], [], color='green', linewidth=3, alpha=0.5, label='Progress (Success)')
        host.plot([], [], color='blue', linewidth=3, alpha=0.5, label='Progress (Failure)')
        host.set_xlabel('Time')
        host.set_ylabel('Test Cases')
        host.legend(loc='upper left')

        #
        # Save the plot to an image
        #

        plt.savefig('rate_limiter_logs/report.png', bbox_inches='tight')
        plt.close(fig)
