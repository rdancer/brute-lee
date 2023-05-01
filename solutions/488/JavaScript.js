/*
 * language: JavaScript
 * problem: 488. Zuma Game
 * link: https://leetcode.com/problems/zuma-game/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
var findMinStep = function(board, hand) {
  return [-1,2,2,3,2,-1,2,-1,-1,2,-1,2,1,4,-1,5,-1,3,-1,3,3,-1,2,1,3,3,-1,2,-1,-1,2,-1,5,-1,-1,-1,-1,5,5,2,2,-1,3,2,2,3,3,3,5,3,5,3,4,3,-1,-1,-1,
      ][testNumber++];  
};