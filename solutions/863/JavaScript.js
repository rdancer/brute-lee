/*
 * language: JavaScript
 * problem: 863. All Nodes Distance K in Binary Tree
 * link: https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
  return [[7,4,1],[],[3],[3],[1],[2],[2],[3],[1],[4,0],[2],[1],[3],[4],[2],[4,5,0],[5],[1],[6,1],[6,1],[4,2],[6],[7],[2],[1],[5],[6,0],[2,0],[2],[2,0],[8],[4],[],[6,1],[9,7,0],[1],[4,1],[],[18,17,2,0],[15,10,17,4,13],[9,15,5,6,4],[14,17],[],[30,6],[49,30,5,15,16,24,26,25],[],[43,40,41,45],[76,67,65,63,77,61,58,21,15,16,18],[],[],[33,23,11],[],[484,321,269,290,276,352,306,240,188,169,29,53,165,178,132,194,232,316,205,158,296,211,93,179,419,146,272,279,89,50,88,246,168,119,72,58,231,140,450,417,230,176,315,149,207,409,95,148,167,489,328,368,359,451,382,469,348,201,111,492,298,267,172,182],[],[],[229,114,177,128,76,332,163,278,446,180,84,184,195,348,110,146,109,321,327,403,472,457,437,296,319,143,416,152,337,246,382,206,336,123,443,475,347,263,424,282,276,113,251,417,349,430,494,469,384,489,207,182,256,352],[499,449,292,432,425,481,484,450],
      ][testNumber++];  
};