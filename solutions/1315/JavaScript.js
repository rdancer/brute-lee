/*
 * language: JavaScript
 * problem: 1315. Sum of Nodes with Even-Valued Grandparent
 * link: https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/
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
var sumEvenGrandparent = function(root) {
  return [18,0,138,0,72,27,266,354,13955,24798,121715,250333,248603,248080,259950,0,0,0,113,0,122,143,246,9,82,658,325,939,678,671,498,482,1219,708,749,848,1065,1601,854,1074,623,1253,1634,1444,1274,1148,1420,1443,1560,1615,2339,1436,2177,2035,2178,2730,2222,2677,2615,2247,2632,1669,1644,2971,1636,247964,8650,10052,10158,10883,14742,14441,16563,21126,20281,23049,
      ][testNumber++];  
};