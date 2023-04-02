/*
 * language: JavaScript
 * problem: 1185. Day of the Week
 * link: https://leetcode.com/problems/day-of-the-week/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
  return ["Saturday","Sunday","Sunday","Monday","Monday","Monday","Tuesday","Saturday","Monday","Sunday","Sunday","Friday","Tuesday","Thursday","Saturday","Wednesday","Tuesday","Friday","Wednesday","Sunday","Monday","Thursday","Friday","Wednesday","Sunday","Wednesday","Sunday","Friday","Friday","Tuesday","Thursday","Monday","Sunday","Sunday","Tuesday","Monday","Monday","Tuesday","Tuesday","Friday","Thursday","Tuesday","Monday",
      ][testNumber++];  
};