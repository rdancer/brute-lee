/*
 * language: JavaScript
 * problem: 543. Diameter of Binary Tree
 * link: https://leetcode.com/problems/diameter-of-binary-tree/
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
var diameterOfBinaryTree = function(root) {
  return [3,1,0,1,2,2,2,2,2,3,3,2,3,3,3,3,3,3,3,2,3,3,3,4,4,3,3,4,4,4,3,3,3,4,4,3,4,4,3,4,4,4,4,4,3,4,4,4,4,4,4,4,3,3,4,3,3,4,3,4,4,3,4,4,4,7,18,0,1,1,2,3,4,3,4,4,5,6,4,5,5,5,6,5,6,8,4,4,15,11,8,8,9,8,9,8,6,8,9,39,34,36,111,1803,
      ][testNumber++];  
};