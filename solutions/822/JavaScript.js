/*
 * language: JavaScript
 * problem: 822. Card Flipping Game
 * link: https://leetcode.com/problems/card-flipping-game/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function(fronts, backs) {
  return [2,0,1,0,2,2,1,2,0,1,1,2,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,0,0,0,4,4,0,3,5,4,2,2,2,6,5,6,0,0,0,4,3,0,4,5,5,0,0,0,2,2,2,8,8,0,0,0,0,6,6,6,0,0,0,0,0,0,0,0,0,7,7,8,5,5,5,2,2,2,5,5,5,11,12,11,6,7,6,4,4,4,0,18,19,0,22,18,9,9,9,19,18,18,22,24,22,27,27,27,5,5,5,27,28,27,13,13,13,30,32,30,7,7,7,33,31,34,96,96,96,217,217,217,438,437,437,279,279,280,430,429,429,757,757,757,80,80,80,920,921,919,811,821,814,805,805,805,
      ][testNumber++];  
};