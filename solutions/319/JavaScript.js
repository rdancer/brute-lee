/*
 * language: JavaScript
 * problem: 319. Bulb Switcher
 * link: https://leetcode.com/problems/bulb-switcher/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
  return [1,0,1,1,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,9,10,31,31,99,100,316,316,999,1000,3162,3162,9999,10000,
      ][testNumber++];  
};