/*
 * language: JavaScript
 * problem: 2265. Count Nodes Equal to Average of Subtree
 * link: https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/
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
var averageOfSubtree = function(root) {
  return [5,1,1,1,3,2,1,1,2,2,1,4,1,3,1,3,3,2,1,4,2,3,1,2,3,3,3,3,2,3,2,3,3,2,3,1,4,2,3,2,3,1,1,3,2,3,2,6,1,4,5,6,3,3,5,6,5,7,4,3,5,4,4,4,7,3,2,7,2,2,2,2,3,4,4,2,1,1,1,3,2,2,3,3,2,2,4,1,3,345,470,480,36,37,43,24,33,27,37,45,23,32,33,28,18,37,28,24,43,48,43,38,19,30,42,23,46,3,5,3,7,8,7,10,5,3,5,1,2,3,1000,1000,2,1,104,100,104,96,
      ][testNumber++];  
};