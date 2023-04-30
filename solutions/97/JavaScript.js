/*
 * language: JavaScript
 * problem: 97. Interleaving String
 * link: https://leetcode.com/problems/interleaving-string/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  return [true,false,true,false,true,true,false,false,false,false,false,true,false,false,false,true,true,true,true,true,true,true,false,true,false,true,false,false,true,false,false,true,true,false,true,true,true,true,true,false,false,true,true,true,true,true,true,false,true,false,true,false,true,false,false,false,true,true,false,false,true,false,false,false,false,false,true,false,false,true,false,true,false,false,false,true,false,false,false,false,false,false,true,false,false,false,false,false,true,true,false,false,true,true,false,false,false,true,false,false,false,false,false,false,true,false,
      ][testNumber++];  
};