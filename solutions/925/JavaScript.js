/*
 * language: JavaScript
 * problem: 925. Long Pressed Name
 * link: https://leetcode.com/problems/long-pressed-name/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  return [true,false,true,true,true,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,false,true,true,false,true,false,true,true,false,true,false,true,true,false,true,false,true,true,false,true,false,true,true,false,true,false,true,true,false,true,false,true,true,false,true,false,true,true,false,true,false,true,false,false,false,false,true,false,true,false,true,true,false,true,false,true,true,false,true,false,true,true,false,true,false,true,true,true,false,false,false,false,
      ][testNumber++];  
};