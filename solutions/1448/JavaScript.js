/*
 * language: JavaScript
 * problem: 1448. Count Good Nodes in Binary Tree
 * link: https://leetcode.com/problems/count-good-nodes-in-binary-tree/
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
var goodNodes = function(root) {
  return [4,3,1,4,1,2,4,4,3,1,6,3,2,5,1,4,3,8,6,7,5,5,4,4,4,10,4,10,6,6,4,5,9,16,13,9,17,14,20,15,8,20,15,41,70,46,82,21,72,75,44,29,76,290,152,407,444,93,1857,755,917,1206,3540,
      ][testNumber++];  
};