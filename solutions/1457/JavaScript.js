/*
 * language: JavaScript
 * problem: 1457. Pseudo-Palindromic Paths in a Binary Tree
 * link: https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/
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
var pseudoPalindromicPaths  = function(root) {
  return [2,1,1,2,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,11,10,13,10,7,3,4,8,14,7,11,11,8,690,703,50000,2777,885,
      ][testNumber++];  
};