/*
 * language: JavaScript
 * problem: 941. Valid Mountain Array
 * link: https://leetcode.com/problems/valid-mountain-array/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  return [false,false,true,false,true,false,false,false,false,true,false,false,false,false,false,false,false,true,true,true,false,false,false,true,true,false,false,false,false,true,false,false,false,true,false,true,false,true,true,true,true,true,false,false,true,true,false,false,false,false,false,true,true,
      ][testNumber++];  
};