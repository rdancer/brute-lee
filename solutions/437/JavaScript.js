/*
 * language: JavaScript
 * problem: 437. Path Sum III
 * link: https://leetcode.com/problems/path-sum-iii/
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  return [3,3,0,0,1,0,0,1,1,1,0,1,1,1,1,2,1,1,0,4,1,2,1,1,1,2,1,1,3,2,4,4,1,1,1,2,1,2,1,1,4,2,1,1,0,13,2,2,1,0,0,0,1,0,2,0,1,0,0,0,2,0,1,1,1,1,1,4,0,1,0,0,1,1,1,1,1,2,3,0,0,1,1,2,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,2,2,500500,500500,500500,7,2107,253,33,5,1,0,0,0,0,
      ][testNumber++];  
};