/*
 * language: JavaScript
 * problem: 1686. Stone Game VI
 * link: https://leetcode.com/problems/stone-game-vi/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {number[]} aliceValues
 * @param {number[]} bobValues
 * @return {number}
 */
var stoneGameVI = function(aliceValues, bobValues) {
  return [1,0,-1,1,-1,0,-1,0,1,-1,1,1,-1,1,1,1,1,1,-1,-1,-1,0,1,-1,0,-1,1,-1,0,0,1,0,-1,1,-1,-1,-1,1,1,1,0,1,1,-1,-1,1,-1,1,0,1,1,1,-1,1,1,1,1,0,-1,1,1,1,1,-1,0,1,1,0,0,1,-1,0,0,1,1,1,1,-1,1,-1,1,-1,1,-1,1,0,1,-1,-1,-1,-1,1,-1,-1,0,
      ][testNumber++];  
};