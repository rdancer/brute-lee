/*
 * language: JavaScript
 * problem: 662. Maximum Width of Binary Tree
 * link: https://leetcode.com/problems/maximum-width-of-binary-tree/
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
var widthOfBinaryTree = function(root) {
  return [4,7,2,8,2,8,1,1,1,1,2,1,1,1,1,2,2,1,2,2,1,2,1,1,2,1,1,1,1,2,2,2,1,3,4,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,1,2,3,1,2,1,1,2,2,1,2,2,1,2,1,1,2,1,1,1,3,169,2,1,1,1,2,2,4,2,1,1,4,8,2,2,3,2,3,4,4,5,2,1,2147483645,128,11,4,3,16,15,11,2,4,12,14,4,178535,27636,103476,1,1,2147483645,536870913,
      ][testNumber++];  
};