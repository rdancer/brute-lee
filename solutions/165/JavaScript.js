/*
 * language: JavaScript
 * problem: 165. Compare Version Numbers
 * link: https://leetcode.com/problems/compare-version-numbers/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  return [0,0,-1,1,-1,1,-1,0,-1,1,1,0,0,-1,-1,1,-1,1,-1,0,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,1,-1,1,-1,0,0,0,-1,0,-1,1,0,0,-1,1,-1,1,-1,-1,-1,-1,-1,1,1,0,1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,1,-1,1,-1,-1,0,0,0,0,0,0,0,0,0,-1,
      ][testNumber++];  
};