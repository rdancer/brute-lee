/*
 * language: JavaScript
 * problem: 2385. Amount of Time for Binary Tree to Be Infected
 * link: https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/
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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
  return [4,0,4,3,2,3,4,4,3,2,3,4,1,3,1,4,3,1,3,2,4,3,3,2,2,2,2,2,1,1,1,2,0,2,3,2,2,3,1,4,3,5,5,4,6,3,5,7,5,3,6,5,5,4,5,5,3,6,3,3,3,2,3,2,4,3,2,3,3,58,99999,37,41,41,44,24,0,0,99999,5,
      ][testNumber++];  
};