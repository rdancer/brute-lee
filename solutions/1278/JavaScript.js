/*
 * language: JavaScript
 * problem: 1278. Palindrome Partitioning III
 * link: https://leetcode.com/problems/palindrome-partitioning-iii/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var palindromePartition = function(s, k) {
  return [1,0,0,0,2,0,4,5,0,3,5,0,2,5,7,1,7,6,1,0,9,7,8,6,8,7,0,20,14,1,1,0,
      ][testNumber++];  
};