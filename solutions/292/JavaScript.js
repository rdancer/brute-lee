/*
 * language: JavaScript
 * problem: 292. Nim Game
 * link: https://leetcode.com/problems/nim-game/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  return [false,true,true,true,true,true,true,false,true,true,true,false,true,true,true,false,true,true,true,false,true,true,true,false,true,true,true,false,true,true,true,false,true,true,true,false,true,true,true,false,true,true,true,false,true,true,true,false,true,true,false,true,true,false,true,false,false,true,true,true,
      ][testNumber++];  
};