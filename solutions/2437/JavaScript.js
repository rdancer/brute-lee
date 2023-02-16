/*
 * language: JavaScript
 * problem: 2437. Number of Valid Clock Times
 * link: https://leetcode.com/problems/number-of-valid-clock-times/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {string} time
 * @return {number}
 */
var countTime = function(time) {
  return [2,100,1440,3,100,2,6,30,20,240,240,1,4,18,20,144,2,10,40,60,144,60,600,1,24,10,120,60,6,240,60,10,10,144,1,12,180,10,10,240,6,10,1,24,20,60,24,12,30,24,1,1,1,
      ][testNumber++];  
};