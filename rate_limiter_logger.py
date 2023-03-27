import sqlite3
import os
from datetime import datetime

import matplotlib.pyplot as plt
import matplotlib.dates as mdates
import numpy as np
from freezegun import freeze_time

import sys; print(sys.executable)


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

    def __init__(self):
        """
        Initializes the RateLimiterLogger instance and creates the database if it doesn't exist.
        """        
        self.db_file = "rate_limiter_logs/rate_limiter_logger.db"
        self.create_database()

    def create_database(self):
        """
        Creates the rate_limiter_logs directory if it doesn't exist, and sets up the SQLite3 database with the logs table.
        """        
        if not os.path.exists("rate_limiter_logs"):
            os.mkdir("rate_limiter_logs")
        
        conn = sqlite3.connect(self.db_file)
        c = conn.cursor()
        c.execute('''CREATE TABLE IF NOT EXISTS logs
                        (id INTEGER PRIMARY KEY AUTOINCREMENT,
                        problem_oneline_description TEXT NOT NULL,
                        timestamp TEXT NOT NULL,
                        success BOOLEAN,
                        test_suite_size INTEGER,
                        test_cases_passed INTEGER,
                        test_cases_total INTEGER,
                        gap_start TEXT,
                        gap_duration TEXT)''')
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
        c.execute("INSERT INTO logs (problem_oneline_description, timestamp) VALUES (?, ?)",
                  (problem_oneline_description, datetime.now().strftime("%Y-%m-%d %H:%M:%S")))
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
        conn = sqlite3.connect(self.db_file)
        c = conn.cursor()
        c.execute('''UPDATE logs SET success = ?, test_suite_size = ?, test_cases_passed = ? 
                     WHERE problem_oneline_description = ?''',
                  (success, test_suite_size, test_cases_passed, problem_oneline_description))
        conn.commit()
        conn.close()

    def generate_report(self):
        """
        Generates a report with a visualization of problem attempts, test suite size, progress, and rate-limited gaps.
        """

        # Load the data from the database
        conn = sqlite3.connect(self.db_file)
        c = conn.cursor()
        c.execute("SELECT * FROM logs")
        data = c.fetchall()
        conn.close()

        # Separate the data into different lists for plotting
        timestamps = [mdates.datestr2num(d[1]) for d in data]
        descriptions = [d[0] for d in data]
        success = [d[2] for d in data]
        test_suite_size = [d[3] for d in data]
        test_cases_passed = [d[4] for d in data]

        # Create a figure and axis
        fig, ax = plt.subplots(figsize=(14, 6), dpi=100)

        # Plot the test suite size and progress towards it
        ax.fill_between(timestamps, test_suite_size, color='yellow', alpha=0.3, label='Test Suite Size')
        ax.fill_between(timestamps, test_cases_passed, color='green', alpha=0.3, where=np.array(success), label='Progress (Success)')
        ax.fill_between(timestamps, test_cases_passed, color='blue', alpha=0.3, where=np.array([not s for s in success]), label='Progress (Failure)')

        # Plot the one_line description text above the test_suite_size line
        for i, txt in enumerate(descriptions):
            ax.annotate(txt, (timestamps[i], test_suite_size[i] + 2), fontsize=8, rotation=90)

        # Plot unsuccessful submissions as red dots
        unsucc_timestamps = [timestamps[i] for i, s in enumerate(success) if not s]
        unsucc_test_cases_passed = [test_cases_passed[i] for i, s in enumerate(success) if not s]
        ax.plot(unsucc_timestamps, unsucc_test_cases_passed, 'ro', label='Unsuccessful Submissions')

        # Format the x-axis with date-time labels
        ax.xaxis.set_major_formatter(mdates.DateFormatter('%Y-%m-%d %H:%M'))
        plt.xticks(rotation=45)

        # Add labels and legend
        ax.set_xlabel('Time')
        ax.set_ylabel('Test Cases')
        ax.legend()

        # Save the plot to an image
        plt.savefig('rate_limiter_logs/report.png', bbox_inches='tight')
        plt.close(fig)
