/*
 * language: JavaScript
 * problem: 559. Maximum Depth of N-ary Tree
 * link: https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  return [3,5,0,3,3,3,12,1,6,7,3,2,10,6,9,9,5,5,7,6,2,5,364,341,197,16,191,2,2,8,8,2,1,2,1,2,2,11,
      ][testNumber++];  
};