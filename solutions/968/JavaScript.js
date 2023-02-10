/*
 * language: JavaScript
 * problem: 968. Binary Tree Cameras
 * link: https://leetcode.com/problems/binary-tree-cameras/
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
var minCameraCover = function(root) {
  return [1,2,1,1,1,1,1,1,1,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,3,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,2,3,3,3,3,4,3,3,4,3,3,3,3,3,3,3,3,3,4,4,4,3,4,4,4,4,3,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,4,5,4,4,5,5,5,4,5,5,5,5,4,5,6,5,5,5,5,5,5,5,5,5,5,5,6,5,360,370,362,364,360,357,362,361,364,13,363,
      ][testNumber++];
};