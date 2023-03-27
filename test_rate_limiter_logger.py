import unittest
import os
import sqlite3
from rate_limiter_logger import RateLimiterLogger
from datetime import datetime
from freezegun import freeze_time

class TestRateLimiterLogger(unittest.TestCase):

    def setUp(self):
        self.logger = RateLimiterLogger()

    def tearDown(self):
        os.remove(self.logger.db_file)

    def test_create_database(self):
        self.assertTrue(os.path.exists(self.logger.db_file))
        conn = sqlite3.connect(self.logger.db_file)
        c = conn.cursor()
        c.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='logs'")
        result = c.fetchone()
        conn.close()
        self.assertIsNotNone(result)

    def test_log_submission(self):
        problem_description = "test_problem_1"
        self.logger.log_submission(problem_description)
        conn = sqlite3.connect(self.logger.db_file)
        c = conn.cursor()
        c.execute("SELECT * FROM logs WHERE problem_oneline_description=?", (problem_description,))
        result = c.fetchone()
        conn.close()
        self.assertIsNotNone(result)

    def test_log_result(self):
        problem_description = "test_problem_2"
        self.logger.log_submission(problem_description)
        self.logger.log_result(problem_description, True, 10, 8)
        conn = sqlite3.connect(self.logger.db_file)
        c = conn.cursor()
        c.execute("SELECT * FROM logs WHERE problem_oneline_description=?", (problem_description,))
        result = c.fetchone()
        conn.close()
        self.assertIsNotNone(result)
        self.assertEqual(result[2], 1)
        self.assertEqual(result[3], 10)
        self.assertEqual(result[4], 8)

    def test_generate_report(self):
        """
        Tests the generate_report method by creating synthetic data, logging it,
        and generating a report to verify the plot is created successfully.
        """
        import random
        import time
        from datetime import timedelta

        # Create synthetic data
        num_problems = 50
        gap_hours = [8, 10, 12]
        problem_names = [f"{i}. Lorem ipsum dolor sit amet" for i in range(1, num_problems + 1)]
        test_suite_sizes = [random.randint(60, 300) for _ in range(num_problems)]

        # Log synthetic data
        start_time = datetime.now()
        for i in range(num_problems):
            problem_name = problem_names[i]
            test_suite_size = test_suite_sizes[i]

            if i > 0 and i % 5 == 0:
                # Simulate a rate-limited gap
                gap = random.choice(gap_hours)
                start_time += timedelta(hours=gap)

            for j in range(test_suite_size):
                self.logger.log_submission(problem_name)

                success = random.random() < 0.8  # 80% success rate
                test_cases_passed = j + 1 if success else j
                self.logger.log_result(problem_name, success, test_suite_size, test_cases_passed)

                # Simulate time between submissions
                start_time += timedelta(seconds=6)
                with freeze_time(start_time):
                    self.logger.log_submission(problem_name)

        # Generate the report
        self.logger.generate_report()

        # Check if the report image file is created
        self.assertTrue(os.path.exists("rate_limiter_logs/report.png"))


if __name__ == "__main__":
    unittest.main()
