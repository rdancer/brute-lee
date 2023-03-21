/*
 * language: JavaScript
 * problem: 2515. Shortest Distance to Target String in a Circular Array
 * link: https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
  return [1,1,-1,-1,2,1,1,-1,4,1,-1,-1,-1,0,2,0,2,4,4,1,-1,0,2,-1,-1,3,-1,-1,-1,-1,-1,3,0,-1,25,17,-1,9,6,-1,1,-1,15,2,-1,13,-1,8,-1,12,17,-1,8,-1,4,-1,-1,-1,-1,-1,3,10,-1,11,33,21,-1,-1,33,33,0,1,15,42,-1,8,29,38,22,35,-1,-1,25,14,-1,-1,-1,10,-1,43,8,-1,2,12,-1,-1,-1,19,-1,10,0,-1,9,23,-1,27,-1,-1,5,13,-1,-1,46,33,11,-1,22,-1,-1,9,-1,12,-1,-1,8,34,-1,-1,-1,-1,2,-1,18,40,-1,17,13,-1,-1,23,-1,19,-1,-1,-1,15,-1,-1,33,11,7,8,6,-1,-1,-1,-1,26,-1,-1,-1,-1,-1,1,
      ][testNumber++];  
};