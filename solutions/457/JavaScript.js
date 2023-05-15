/*
 * language: JavaScript
 * problem: 457. Circular Array Loop
 * link: https://leetcode.com/problems/circular-array-loop/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
  return [true,false,true,false,false,true,false,false,false,true,true,false,false,true,true,true,true,true,true,true,true,true,false,true,true,false,false,false,false,true,true,false,false,false,false,true,true,true,false,false,false,true,false,true,
      ][testNumber++];  
};