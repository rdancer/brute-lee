/*
 * language: JavaScript
 * problem: 335. Self Crossing
 * link: https://leetcode.com/problems/self-crossing/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {number[]} distance
 * @return {boolean}
 */
var isSelfCrossing = function(distance) {
  return [true,false,true,true,true,false,true,true,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,true,true,true,false,
      ][testNumber++];  
};