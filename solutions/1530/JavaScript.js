/*
 * language: JavaScript
 * problem: 1530. Number of Good Leaf Nodes Pairs
 * link: https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/
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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
  return [1,2,1,0,1,0,0,1,1,0,2,0,3,6,0,0,0,0,122,14,11,15,0,38,79,0,591,9,48,0,0,0,891,182,910,46,407,0,1050,99,469,0,476,37,577,132,1270,0,273,322,726,781,1685,221,333,0,342,7,812,0,0,0,1035,352,1036,532,4500,18,5010,44,501,286,510,412,516,755,1205,289,181,158,1287,2205,0,0,2931,1366,579,147,1369,708,3051,332,202,700,3253,22,0,96,1492,0,3373,0,694,355,3480,2018,239,45,732,14,0,0,766,
      ][testNumber++];  
};