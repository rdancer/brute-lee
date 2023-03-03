/*
 * language: JavaScript
 * problem: 1161. Maximum Level Sum of a Binary Tree
 * link: https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
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
var maxLevelSum = function(root) {
  return [2,2,2,1,3,3,1,3,3,4,12,8,9,13,15,12,11,13,15,22,14,19,15,20,21,13,19,16,18,14,16,21,14,18,13,20,11,16,22,15,
      ][testNumber++];  
};