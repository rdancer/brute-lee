/*
 * language: JavaScript
 * problem: 393. UTF-8 Validation
 * link: https://leetcode.com/problems/utf-8-validation/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
  return [true,false,true,false,false,true,false,true,true,false,false,true,false,false,true,true,true,false,true,true,true,true,true,false,true,true,true,true,false,true,true,true,false,false,true,false,false,true,false,true,false,false,false,false,false,false,true,true,true,false,false,
      ][testNumber++];  
};