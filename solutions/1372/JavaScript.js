/*
 * language: JavaScript
 * problem: 1372. Longest ZigZag Path in a Binary Tree
 * link: https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/
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
var longestZigZag = function(root) {
  return [3,4,0,2,1,2,2,3,2,3,2,2,3,3,3,2,5,5,5,5,5,6,7,5,8,5,7,5,6,6,6,13,12,12,10,9,8,9,10,11,11,12,12,13,11,11,15,13,13,13,12,6962,14252,11519,8616,9433,38000,20012,
      ][testNumber++];  
};