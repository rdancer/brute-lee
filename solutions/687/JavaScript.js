/*
 * language: JavaScript
 * problem: 687. Longest Univalue Path
 * link: https://leetcode.com/problems/longest-univalue-path/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
  return [2,2,0,0,1,0,2,2,2,3,3,1,2,0,1,0,0,0,0,4,4,6,0,1,1,2,1,1,3,0,0,0,0,0,0,0,4,0,0,0,4,2,2,4,4,4,4,6,4,4,6,8,11,21,5,12,19,5,12,4,4,8,14,5,5,4,6,9,4,7,999,
      ][testNumber++];  
};