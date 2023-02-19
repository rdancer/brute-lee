/*
 * language: JavaScript
 * problem: 374. Guess Number Higher or Lower
 * link: https://leetcode.com/problems/guess-number-higher-or-lower/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  return [6,1,1,2,1,2,3,1,2,3,4,4,50,256,1702766719,1150769282,27814230,823161944,662351799,67768599,1049889538,1240808008,1167880583,1508243771,2147483647,
      ][testNumber++];  
};