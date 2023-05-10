/*
 * language: JavaScript
 * problem: 814. Binary Tree Pruning
 * link: https://leetcode.com/problems/binary-tree-pruning/
 * note: binary_tree
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
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    
return binaryTreeify(buffer[testNumber++]);
};
function binaryTreeify(arr) {
  if (typeof arr === "undefined") return new TreeNode("sentinel") /* fixes: number of passed tests is not increasing */
  return deserializer.toTree(JSON.stringify(arr))
}
var deserializer = require('./deserializer.js');
var buffer = [[1,null,0,null,1],[1,null,1,null,1],[1,1,0,1,1,null,1],[0,null,0,1,1,null,1,null,1],[0,1,0,null,null,null,1,1,1],[0,null,1,1,1,null,1,null,1],[],[1,1,1,1,1,0,0,null,1,null,null,1,1,null,1],[0,1,1,null,1,1,0,null,1,null,1,1],[0,1,0,0,1,1,1,null,0,1,0,1,1,1,null,1,1,1,0,0,1,null,0,0,0,1,1,null,1,null,null,null,1,1,null,1,null,null,null,null,1,1,1,null,1,1],[0,0,null,1,1,null,0,1,0,1,null,1,null,0,1,1,null,null,null,null,1],[0,0,1,1,1,1,0,0,1,0,null,0,1,1,0,null,1,null,0,1,1,1,null,null,1,0,null,null,0,null,null,null,1,null,1,1,null,1,null,1,1,1,1,1,1],[1,1,null,null,0,null,1,0,1,1,null,1],[1,0,1,1,null,1,null,0,0,null,0,1,1,0,1,1,null,null,1,null,1,1,null,1,null,1],[1,1,1,null,0,0,1,null,1,null,0,1,0,null,null,null,0,0,1,0,1,1,null,1,null,null,null,null,1],[0,0,1,0,0,null,null,0,1,0,null,0,1,1,1,1,1,1],[1,1,1,1,1,1,null,0,1,0,null,1,0,1,null,1,null,1,null,1,0,0,1,1,1,1,null,1,null,1,null,null,1,null,1,null,1],[0,0,0,1,1,1,null,0,1,null,1,1,null,null,1,1,null,0,0,1,0,1,null,1,1,1,null,null,1,null,null,null,1],[0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,null,1,0,null,null,0,1,null,null,null,0,1,0,null,0,1,null,1,null,1,1,null,null,1,1,1,null,1,null,1,null,1,1],[0,1,1,1,1,null,1,0,null,0,null,null,0,1,null,1,1,null,0,1,1,null,null,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,null,null,1,null,null,null,1,null,1,1,1,1,null,null,null,null,1,null,null,1,null,1],[1,1,1,0,1,0,null,0,1,1,0,1,1,1,0,0,1,1,null,1,null,1,1,null,0,0,0,0,null,0,0,0,0,0,null,null,null,1,1,1,1,1,0,1,1,null,0,1,null,1,null,null,1,0,null,0,0,1,1,null,1,0,null,null,null,1,null,0,0,0,0,null,null,null,1,1,1,1,null,null,1,null,1,1,1,null,1,1,1,1,null,1,null,1,null,null,1,1,null,null,1,1,null,1,null,null,1],[1,null,0,0,null,1,null,0,0,0,null,0,0,0,1,0,1,1,1,null,1,1,null,null,1,null,null,1,null,1,1],[0,1,1,0,1,1,0,0,null,1,1,0,0,null,1,0,1,null,null,1,0,1,1,null,1,1,0,1,0,0,1,1,null,1,1,0,0,null,null,1,1,null,1,0,0,1,null,1,null,1,1,1,null,0,1,1,1,null,0,0,1,1,0,1,1,1,1,1,1,null,1,1,0,1,1,1,1,null,null,null,1,1,1,1,null,null,null,1,1,null,null,null,1,1,1,null,1,1,1,1,null,null,1,null,null,null,null,null,null,1,null,null,1,1,null,1,null,null,1],[0,1,1,1,1,0,1,null,null,1,1,1,1,0,0,1,1,1,null,1,1,null,0,1,0,null,0,1,0,0,0,null,1,null,null,1,1,0,1,1,1,1,1,0,0,null,0,0,1,0,null,0,1,1,null,1,null,null,1,null,0,null,null,1,1,0,null,0,1,null,0,1,1,1,1,1,1,1,1,1,1,1,null,1,null,1,null,null,null,1,1,1,null,null,1,1,null,null,1,1,1,1,null,1,1,null,1,null,1,null,1,null,null,1],[1,0,0,0,0,1,0,null,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,null,1,1,0,null,1,0,null,1,1,1,null,1,0,1,0,1,1,null,null,null,1,1,null,null,0,1,0,1,1,1,1,0,null,0,0,0,0,0,0,0,0,0,1,0,null,1,null,1,1,null,0,0,0,0,0,1,1,1,1,null,1,0,1,null,null,null,1,null,1,null,1,null,1,null,1,1,1,null,null,1,1,null,1,1,1,null,1,null,null,1,null,1,1,null,1,1,1,null,1,1,null,1,1,null,1,null,1,1,null,null,null,null,null,null,1,null,null,null,1,1],[1,null,1,null,0,0,1,0,null,0,1,0,1,1,1,null,0,0,1,1,1,null,1,null,null,1,1,1,null,null,null,1,1,null,1,1,null,1,1,null,1],[1,null,1,0,0,1,0,1,null,1,0,0,null,0,0,0,0,1,0,null,1,0,1,1,null,1,null,1,1,1,null,1,1,null,null,0,1,null,0,0,null,null,1,1,null,null,null,null,null,1,null,1,1,1,null,null,1,1,1,1],[1,null,0,1,0,0,0,0,null,0,1,null,1,1,1,1,1,1,1,0,1,null,1,null,1,null,1,1,1,1,null,0,1,1,0,null,1,1,0,1,null,null,1,null,1,1,1,null,null,null,1,null,null,null,null,1,1,null,1,null,1,1,null,1],[1],[],[0,0,0,0,null,0,0,0,1,null,1,0,null,1,0,1,null,0,0,null,0,null,null,0,0,1,1,1,0,1,1,0,0,1,null,0,0,null,null,1,0,1,1,0,0,null,null,null,1,0,0,null,1,null,null,1,null,1,1,1,null,null,1,null,null,null,null,null,1,1,1,null,null,1,1,1],
["sentinel"]]
