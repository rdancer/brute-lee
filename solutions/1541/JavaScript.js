/*
 * language: JavaScript
 * problem: 1541. Minimum Insertions to Balance a Parentheses String
 * link: https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
  return [1,0,3,12,5,7,2,0,3,12,4,8,8,4,10,5,23,31,31,16,18,22,19,34,46,28,19,46,41,20,16,18,53,20,26,23,41,55,78,89,35,63,129,86,180,67,88,153,105,195,88,296,263,156,149,176,125,370,332,146,340,461,184,516,191,196,186,524,577,324,757,1344,1637,877,928,2424,1085,1057,1075,3766,3828,1582,1557,4269,1782,4404,4738,4785,1916,24190,11097,27626,13043,37155,40298,17131,44852,47565,18792,49580,200000,50000,
      ][testNumber++];  
};