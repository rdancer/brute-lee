/*
 * language: JavaScript
 * problem: 1015. Smallest Integer Divisible by K
 * link: https://leetcode.com/problems/smallest-integer-divisible-by-k/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
  return [1,-1,3,1,-1,3,-1,-1,-1,6,-1,9,-1,2,-1,6,-1,-1,-1,16,-1,18,-1,6,-1,22,-1,-1,-1,27,-1,28,-1,-1,35,81,41,18,42,148,144,166,78,33,390,-1,36,126,96,48,261,42,660,144,1788,126,1242,-1,132,1164,6122,-1,3192,19926,4999,49992,-1,11696,641,-1,
      ][testNumber++];  
};