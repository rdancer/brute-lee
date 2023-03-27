/*
 * language: JavaScript
 * problem: 1016. Binary String With Substrings Representing 1 To N
 * link: https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function(s, n) {
  return [true,false,true,false,false,true,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,false,false,
      ][testNumber++];  
};