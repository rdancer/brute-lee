/*
 * language: JavaScript
 * problem: 1822. Sign of the Product of an Array
 * link: https://leetcode.com/problems/sign-of-the-product-of-an-array/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
  return [1,0,-1,0,-1,0,-1,1,-1,-1,1,0,1,1,-1,0,-1,-1,0,-1,-1,0,-1,0,-1,-1,-1,0,-1,-1,0,0,-1,-1,1,1,1,0,-1,1,1,1,1,-1,0,1,-1,0,1,0,1,-1,-1,1,0,1,1,-1,-1,1,1,-1,1,-1,-1,0,1,1,0,1,1,0,-1,1,1,0,
      ][testNumber++];  
};