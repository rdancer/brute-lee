/*
 * language: JavaScript
 * problem: 794. Valid Tic-Tac-Toe State
 * link: https://leetcode.com/problems/valid-tic-tac-toe-state/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
  return [false,false,true,false,false,true,true,true,true,false,false,true,true,false,true,false,true,true,true,false,true,false,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,false,true,false,true,true,true,true,true,true,true,false,true,true,true,false,true,true,false,true,true,true,false,false,true,true,false,true,false,false,false,true,false,false,false,true,true,false,false,true,false,true,false,true,false,true,false,false,false,true,true,true,true,true,true,true,false,true,false,true,false,true,true,false,true,true,true,false,false,true,false,false,
      ][testNumber++];  
};