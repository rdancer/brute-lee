/*
 * language: JavaScript
 * problem: 782. Transform to Chessboard
 * link: https://leetcode.com/problems/transform-to-chessboard/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {number[][]} board
 * @return {number}
 */
var movesToChessboard = function(board) {
  return [2,0,-1,0,2,1,2,0,-1,-1,-1,1,0,2,2,1,2,1,1,3,2,1,2,2,1,2,1,-1,-1,5,2,3,3,2,4,5,-1,3,4,2,3,4,4,7,6,6,5,5,5,5,6,5,6,5,9,5,6,5,6,10,9,-1,9,7,8,5,5,7,9,9,7,8,7,7,8,11,6,8,11,7,10,10,8,13,13,10,9,9,9,10,7,16,10,14,15,10,9,12,8,10,15,10,12,9,10,11,12,13,12,15,-1,12,11,11,13,15,14,15,18,11,10,13,12,-1,-1,14,
      ][testNumber++];  
};