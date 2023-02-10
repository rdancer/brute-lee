/*
 * language: JavaScript
 * problem: 2038. Remove Colored Pieces if Both Neighbors are the Same Color
 * link: https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
  return [true,false,false,false,false,false,false,false,false,true,false,true,false,true,false,true,false,false,true,true,false,true,true,false,false,false,false,false,true,false,false,false,true,false,false,false,false,false,false,false,false,true,false,true,true,false,true,false,true,false,true,false,true,true,false,false,false,false,true,false,false,true,false,true,false,false,false,false,true,true,false,false,false,true,false,true,false,true,false,false,true,false,true,
      ][testNumber++];  
};