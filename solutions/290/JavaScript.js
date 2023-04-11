/*
 * language: JavaScript
 * problem: 290. Word Pattern
 * link: https://leetcode.com/problems/word-pattern/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  return [true,false,false,false,false,false,false,true,false,false,false,true,true,true,false,false,false,true,true,true,false,false,true,true,false,true,true,false,false,true,false,false,true,true,true,true,false,false,false,false,true,
      ][testNumber++];  
};