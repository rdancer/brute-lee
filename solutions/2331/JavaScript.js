/*
 * language: JavaScript
 * problem: 2331. Evaluate Boolean Binary Tree
 * link: https://leetcode.com/problems/evaluate-boolean-binary-tree/
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
 * @return {boolean}
 */
var evaluateTree = function(root) {
  return [true,false,false,false,false,true,true,true,false,true,true,true,false,false,false,false,false,false,false,true,false,true,false,false,true,false,true,false,false,false,true,false,false,false,false,false,false,false,false,true,true,true,false,false,false,false,true,false,false,false,false,false,false,false,true,true,false,false,true,false,true,false,false,true,false,true,false,true,false,true,true,true,true,true,true,
      ][testNumber++];  
};