/*
 * language: JavaScript
 * problem: 590. N-ary Tree Postorder Traversal
 * link: https://leetcode.com/problems/n-ary-tree-postorder-traversal/
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
 * @return {number[]}
 */
var postorder = function(root) {
  return [[5,6,3,2,4,1],[2,6,14,11,7,3,12,8,4,13,9,10,5,1],[],[5,1,3],[5,0,10,6,3,1],[8,5,1,8],[79,44,69,11,46,65,41,65,52,79,39,39,20,50,69,96,23,9,94,29,47,75,20,6,77,83,3,40,11,97,24,81,87,15,87,27,73,52,64,7,81,50,9,0,33,93,92,21,13,41,29,36,31,42,59,98,96,47,76,34,57,90,30,16,21,83,56,59,52,3,94,53,66,59,14,10,30,66,50,38,61,23,76,100,12,94,72,79,77,6,78,32,5,85,100,65,82,50,47,91,98,41,98,34,99,68,90,76,39,72,19,41,32,4,5,11,92,71,2,96,84,8,84,21,49,36,16,51,1,60,54,86,21,17,12,16,38,40,66,96,80,98,82,33,63,1,2,57,71,32,86,78,32,97,87,60,24,38,88,27,93,99,27,2,50,54,53,48,88,55,39,2,88,72,28,80,24,64,41,24,4,56,16,67,45,13,16,60,68,45,93,16,12,41,64,19,35,19,87,25,78,57,45,81,29,6,29,84,86,66,98,27,79,33,57,8,65,89,36,57,3,70,19,61,30,42,98,13,25,17,68,50,93,48,6,73,69,27,23,0,45,64,0,2,34,28,17,99,70,18,84,14,17,64,79,86,27,11,44,22,14,68,66,23,34,7,12,33,79,3,63,54,42,28,42,15,34,40,71,74,71,33,59,49,9,1,0,14,24,19,92,39,100,99,67,9,69,79,18,7,58,89,40,34,0,6,37,44,0,12,80,89,14,42,37,91,100,38,48,8,64,66,40,88,52,75,56,45,69,18,12,32,80,64,89,78,10,0,34,11,13,61,53,52,39,69,40,81,71,42,71,46,42,10,91,40,33,49,52,55,8,75,78,85,100,1,98,49,17,77,42,96,52,54,16,64,5,56,17,92,36,26,39,41,47,43,84,65,69,53,39,82,92,35,6,82,24,22,69,66,81,38,60,32,57,50,83,68,91,68,59,59,75,59,13,43,90,4,44,35,90,9,1,62,41,2,66,57,11,45,41,22,5,55,78,58,56,84,16,7,87,63,42,77,42,37,40,100,64,51,34,79,35,34,73,4,23,85,11,21,61,27,7,90,21,86,88,59,71,43,58,19,47,23,30,75,98,46,58,10,52,61,47,60,21,59,76,77,31,71,95,58,95,13,55,64,56,27,53,87,71,43,39,95,76,78,55,83,91,12,99,74,9,65,82,62,76,53,95,71,28,75,43,86,0,37,32,16,78,8,97,53,56,57,8,46,15,0,75,67,53,27,77,73,61,45,93,44,11,15,48,20,69,79,33,23,69,21,8,17,76,39,51,67,65,8,5,99,100,1,46,94,48],[44],[6,1],[52,70,72,38,73,63,42,54,98,2,22,95,35],[5,5,87,11,21,77,76,67,6,78,66,75,98,7,63,23,79,20,70],[45,46,89],[82,68],[9,4,10,9,7,6,5,5,8,9,3,9,6,3,0,4,4,9,8,9,6,8,1,1,1,6,6,9,5,5,5,0,0,1,5,10,1,10,4,7,5,1,3,7,0,0,2,0,9,3,1,7,4,8,1,7,5,2,9,5,4,6,1,3,10,4,0,0,7,7,8,1,2,5,7,6,7,7,8,7,9,1,9,9,7,7,0,10,9,7,5,9,2,4,6,6,3,9,2,7,9,4,9,7,3,5,0,4,4,8,1,6,5,7,2,5,1,8,3,8,3,2,5,10,4,8,9,9,6,10,3,9,5,0,10,2,9,6,0,4,0,10,1,2,6,0,5,4,2,3,8,2,0,0,5,5,5,1,6,5,5,9,7,1,10,9,7,5,9,6,10,0,4,0,1,8,1,5,5,5,8,3,10,5,8,8,2,0,7,6,0,2,7,2,0,3,10,9,6,9,7,4,10,7,4,5,6,2,5,1,1,5,9,6,0,0,0,10,6,6,4,1,0,7,4,6,4,5,10,6,4,6,10,10,3,5,5,3,7,8,3,6,5,10,1,9,7,2,2,5,4,9,9,10,9,4,1,10,9,9,0,1,0,0,6,6,6,2,1,10,2,9,9,6,5,9,0,3,2,4,3,5,2,2,7,9,10,8,4,5,3,6,8,10,10,3,10,2,3,6,2,0,3,10,3,8,9,8,3,9,4,0,5,0,3,8,4,2,0,8,10,1,7,4,0,4,1,5,6,4,5,7,8,4,6,7,3,2,5,4,2,3,9,1,0,8,10,10,5,3,8,3,3,1,7,7,7,8,8,9,7,3,5,6,8,6,3,8,8,9,3,8,5,6,3,9,3,0,8,5,10,4,7,9,5,0,5,8,0,3,8,2,10,4,2,4,3,8,5,8,5,6,0,1,2,4,9,4,6,0,5,3,5,5,8,4,1,4,3,8,6,8,4,10,4,6,6,4,7,4,7,1,1,7,9,0,5,1,1,7,4,2,8,5,7,8,5,0,7,8,5,8,0,2,9,0,4,7,4,1,7,10,1,0,2,9,1,2,0,8,4,4,5,8,7,8,6,0,4,5,0,7,1,4,4,2,10,5,5,8,6,4,9,6,7,3,7,3,3,3,8,1,8,8,4,4,5,7,10,5,0,10,4,6,7,8,6,8,6,9,0,7,8,5,1,3,10,8,9,8,4,2,4,3,4,10,0,1,4,4,0,4,2,6,1,1,5,3,7,4,1,7,5,6,9,0,8,2,2,0,2,0,2,6,3,6,3,10,6,10,9,7,1,0,5,1,9,8,9,7,0,1,1,3,4,2,2,0,9,9,0,8,10,10,5,0,1,2,8,0,10,3,4,7,1,5,8,7,0,3,5,3,0,5,9,9,6,7,1,9,2,9,2,5,10,7,1,5,5,3,3,7,2,1,9,6,1,7,7,6,0,8,6,9,9,4,5,4,6,10,2,0,1,10,5,4,7,1,3,5,0,7,5,4,3,10,7,1,1,0,9,5,0,10,1,3,9,0,9,8,7,5,10,5,3,9,4,6,10,9,8,2,2,6,3,1,5,4,10,4,9,4,6,6,6,3,3,6,0,8,8,10,8,10,8,10,0,1,8,1,10,8,1,5,0,5,5,10,5,3,10,0,7,7,8,9,4,1,4,5,0,6,10,10,6,10,9,6,3,6,5,9,2,10,10,5,7,8,4,6,10,8,9,9,2,0,2,3,2,2,8,8,10,3,1,6,9,3,3,8,4,1,1,0,1,0,9,7,10,6,2,9,1,4,2,7,0,6,10,4,1,10,3,1,3,2,9,5,2,6,5,3,5,4,8,3,0,6,1,8,2,9,8,3,0,2,9,1,7,6,1,2,2,0,2,9,9,1,1,7,6,2,5,6,8,10,4,1,5,1,10,6,6,6,1,5,10,6,4,10,5,3,10,1,3,9,2,6,1,6,9,3,0,3,8,1,8,8,5,4,9,7,4,4,0,9,7,8,5,6,3,1,2,7,6,7,0,3,10,4,4,1,10,0,3,7,2,2,0,1,0,4,10,4,9,7,9,9,1,1,9,7,5,7,5,4,1,10,2,0,4,4,7,4,4,6,0,9,3,1,9,3,1,5,3,9,5,3,2,4,8,7,1,9,3,10,4,0,2,1,2,1,9,8,2,5,0,5,8,4,10,5,10,6,3,3,8,9,2,8,4,10,8,2,0,8,3,2,6,8,9,4,4,9,0,0,6,4,3,0,3,0,4,2,1,0,1,5,9,3,4,0,1,8,1,0,1,5,1,7,8,2,7,3,5,9,8,9,10,10,0,1,7,10,4,5,5,10,0,8,0,6,0,9,7,1,7,3,0,8,3,7,7,0,3,6,6,7,2,1,10,1,9,4,10,10,7,9,10,3,2,4,0,1,9,10,10,2,6,5,2,0,6,7,8,4,7,1,3,5,9,2,3,8,8,10,1,3,0,9,1,5,5,1,4,9,6,1,6,4,7,7,6,7,5,8,5,3,5,1,7,1,6,8,10,7,6,8,5,2,2,9,3,8,4,3,3,3,9,9,6,9,2,4,4,2,1,0,9,9,7,0,1,1,9,3,3,1,1,3,0,10,8,5,9,3,6,0,3,10,9,2,2,10,3,0,0,2,3,10,2,10,10,5,6,10,3,6,10,8,10,6,8,8,2,3,6,7,9,4,0,6,3,1,7,10,4,6,7,9,8,0,1,1,3,5,0,4,0,8,1,2,2,0,5,1,2,4,4,0,5,1,1,1,6,10,10,1,8,2,4,7,3,6,5,4,3,4,9,2,1,10,5,2,8,7,10,1,0,6,8,9,0,8,3,4,4,2,2,5,10,5,4,0,0,7,8,4,0,10,10,10,6,7,4,9,9,6,6,1,10,7,7,10,4,8,4,5,7,2,6,4,2,4,1,1,4,8,10,6,4,0,6,3,6,3,5,10,3,6,4,3,8,0,1,3,2,6,6,7,9,3,1,8,10,0,10,9,4,2,0,4,9,9,4,6,6,3,3,1,1,9,8,2,8,5,10,10,4,6,4,4,4,1,8,10,0,0,5,3,5,4,3,7,4,2,6,1,0,6,2,3,1,10,9,0,10,1,4,4,0,7,0,8,4,10,0,6,0,9,7,4,6,2,9,4,5,2,3,7,3,3,4,4,9,3,8,3,0,4,10,1,0,1,9,3,0,9,1,2,4,6,9,0,7,7,5,10,6,5,8,5,9,0,6,4,10,7,0,6,7,8,4,0,8,5,3,2,4,7,2,6,4,8,9,10,0,8,4,1,6,1,4,6,1,9,4,4,0,8,10,10,8,6,9,8,0,10,2,4,3,6,5,10,10,4,9,8,9,2,8,9,0,6,7,0,4,7,5,6,10,6,6,1,1,9,3,4,3,8,9,8,6,4,7,1,2,1,3,4,1,2,0,2,9,4,9,4,9,0,3,7,8,6,4,4,1,8,4,10,10,6,0,5,8,7,5,0,6,4,0,1,5,3,8,2,8,1,8,0,3,1,10,3,6,10,6,6,5,5,3,10,10,0,2,8,7,7,0,1,6,1,4,3,2,6,0,5,6,0,3,5,3,7,6,3,3,6,5,5,0,4,1,10,6,3,3,5,10,8,9,10,0,6,5,10,0,8,5,1,1,7,9,8,6,1,0,10,9,9,4,0,1,8,1,1,10,4,4,7,3,4,2,0,3,2,3,9,8,10,0,2,2,4,2,2,8,6,7,10,6,1,1,6,8,9,6,5,3,3,2,5,3,1,2,0,2,0,3,8,7,4,2,10,5,8,3,1,5,10,2,10,8,2,3,8,9,6,8,6,1,6,1,6,10,7,10,2,10,7,9,6,7,10,9,8,1,6,6,4,0,10,0,1,7,6,1,5,7,9,6,1,0,9,10,10,4,3,6,3,3,3,5,8,4,10,0,5,4,0,5,9,10,8,0,10,7,0,10,10,0,6,4,0,4,5,6,8,4,9,9,1,0,6,9,5,4,6,5,1,8,6,2,10,0,4,8,0,6,2,5,2,1,9,10,3,5,5,10,10,4,5,3,7,3,0,0,9,5,6,7,0,4,9,3,8,3,9,8,0,2,8,2,7,4,2,1,5,2,1,8,5,0,5,3,3,2,0,6,5,10,7,1,8,3,10,4,4,2,10,0,0,9,2,1,9,7,6,4,2,10,7,2,1,0,10,4,5,7,5,5,8,0,2,7,7,9,9,5,3,10,0,3,6,2,8,4,1,2,9,3,10,6,4,10,4,5,9,4,8,0,9,1,9,8,8,5,8,4,9,4,9,10,8,8,6,9,7,10,9,4,8,4,4,6,1,1,4,9,8,10,4,4,8,2,0,2,3,10,2,6,4,3,5,1,5,7,10,7,7,3,9,9,7,8,8,1,8,5,0,2,9,4,2,0,10,8,4,2,3,4,4,2,0,0,10,3,5,8,1,0,10,0,4,8,4,6,2,2,0,3,3,10,6,2,7,10,4,7,3,0,0,6,7,2,2,10,7,9,2,2,1,8,7,9,6,3,5,8,9,10,7,4,2,8,0,0,3,7,1,2,4,5,10,8,0,8,1,6,2,10,9,4,9,0,2,10,9,10,10,9,6,9,8,1,7,5,7,7,9,6,8,3,8,9,3,10,5,9,6,8,0,8,0,4,9,7,2,2,5,5,2,4,1,1,3,10,6,4,7,1,7,10,1,4,10,6,7,4,9,8,4,0,5,10,1,2,4,3,2,5,10,2,3,10,6,2,3,0,9,10,6,9,7,4,3,9,6,3,3,3,2,6,6,8,6,4,3,2,8,1,2,6,2,1,6,2,7,5,8,10,3,2,3,8,7,9,10,10,2,2,7,0,1,7,9,4,4,2,1,4,0,1,9,5,5,9,0,4,5,9,5,6,1,0,6,5,1,7,3,0,4,5,6,6,2,9,3,9,10,3,5,2,3,7,2,10,10,4,6,0,0,9,4,1,4,7,1,8,5,0,9,4,6,7,7,9,8,0,1,0,3,1,7,9,7,4,3,4,6,6,0,10,10,10,0,6,6,6,7,1,5,1,3,3,2,0,9,3,6,7,1,9,7,3,5,7,1,5,7,10,5,2,3,1,1,1,5,2,1,2,7,4,5,5,7,2,4,8,10,0,3,6,7,8,3,9,1,1,2,7,2,6,3,3,7,10,10,7,1,3,6,5,3,7,5,8,3,7,0,0,9,5,2,10,1,8,7,1,4,2,1,8,10,5,4,2,10,7,7,10,3,7,6,10,5,6,5,0,0,3,3,3,4,8,9,2,2,1,7,7,7,6,6,5,0,7,4,6,7,2,7,10,1,0,0,8,4,9,0,2,9,8,7,8,6,10,6,5,5,1,9,2,2,8,7,10,9,7,6,6,2,8,2,6,0,4,5,8,5,4,4,1,10,5,6,5,6,5,5,7,8,5,7,1,0,4,3,1,9,6,0,3,9,1,1,4,0,3,6,8,10,0,6,4,8,5,10,6,5,4,1,9,7,3,7,9,7,5,4,5,2,1,0,9,6,10,5,2,4,9,1,3,2,1,6,8,6,5,8,7,2,0,7,5,8,5,2,8,4,3,3,4,1,2,6,7,3,9,0,9,9,8,5,3,2,4,4,1,8,1,9,6,2,0,4,1,8,8,7,1,2,6,9,1,8,10,4,2,4,8,3,0,8,2,1,8,9,3,3,2,10,10,7,8,5,5,0,3,3,8,6,6,2,3,5,4,5,10,10,7,1,8,10,2,10,10,3,5,8,4,8,7,10,10,1,10,1,9,8,4,2,5,5,0,5,3,9,8,1,0,0,8,5,8,8,5,0,9,4,8,9,5,6,9,2,3,1,1,0,10,7,9,2,6,5,9,8,3,0,9,10,7,9,10,6,2,5,9,6,6,7,10,1,5,1,5,9,3,5,10,2,2,8,4,9,9,7,7,4,9,2,9,9,4,6,4,7,6,0,8,0,3,10,4,3,4,10,9,7,10,0,0,3,2,3,6,7,7,2,8,2,0,10,7,2,2,7,4,7,1,8,7,8,3,2,5,10,3,8,8,1,5,7,1,8,2,6,3,0,10,2,5,0,6,0,6,8,2,7,10,3,1,0,9,5,8,3,0,2,5,2,1,7,6,3,6,7,4,10,8,7,0,0,9,0,0,1,4,1,8,8,4,4,6,7,0,3,3,4,6,7,4,6,3,3,8,7,0,4,3,3,5,2,6,0,6,1,7,5,0,8,5,3,1,8,9,2,9,4,8,5,1,4,10,6,5,7,3,1,5,10,1,3,8,2,6,5,9,0,7,1,10,4,10,6,3,5,4,4,1,6,6,0,8,1,3,0,2,8,7,0,1,9,3,4,9,0,10,8,10,8,9,7,10,9,0,4,3,2,10,7,10,1,5,3,1,9,0,3,9,3,10,0,9,0,4,3,5,0,3,1,7,7,1,5,6,5,4,5,10,1,9,6,3,6,0,2,10,10,8,7,3,3,8,5,2,3,3,6,4,10,3,0,9,4,7,10,4,1,5,7,7,4,6,4,3,10,4,2,6,2,4,6,1,1,9,2,5,2,4,6,2,9,8,4,5,9,7,7,6,9,1,5,2,2,6,4,1,1,10,1,10,5,6,9,8,2,9,2,6,10,8,0,0,3,2,7,5,7,3,2,1,3,0,4,5,2,0,0,3,5,2,4,10,5,6,4,6,8,5,1,9,9,10,0,0,1,1,3,5,7,9,9,2,4,9,5,9,6,0,2,4,3,3,5,9,4,1,5,0,3,0,7,4,2,9,10,0,4,4,7,3,0,2,6,0,3,9,4,9,9,0,8,7,3,0,2,9,4,0,10,0,6,2,1,6,2,4,0,9,6,10,5,4,4,2,3,7,5,9,7,6,3,4,3,3,3,9,4,10,7,0,3,8,4,7,6,2,5,3,5,7,5,1,0,8,7,5,7,9,2,4,3,8,2,1,8,9,9,2,1,9,2,9,0,4,4,7,10,2,5,3,2,8,5,3,4,10,8,10,1,5,8,4,3,10,7,6,3,9,10,10,8,10,0,1,5,3,10,5,3,10,6,5,8,8,3,0,10,7,5,6,8,5,5,3,4,8,8,1,5,2,6,6,6,7,9,8,1,9,0,1,2,9,9,6,9,7,6,10,2,3,2,0,6,1,4,4,7,8,0,10,1,0,4,3,6,3,3,3,5,4,6,6,7,7,0,5,2,0,1,4,1,8,9,1,5,9,0,4,6,10,7,2,8,0,4,2,2,0,0,9,4,4,3,0,6,2,3,5,6,10,4,5,5,8,0,8,7,9,6,1,3,4,5,8,4,7,10,7,5,2,1,5,3,3,7,5,0,8,7,2,6,1,8,1,2,4,4,8,6,10,9,1,10,4,7,10,7,1,4,3,9,3,3,10,10,1,6,4,7,1,2,0,3,2,8,1,4,0,8,3,0,1,8,2,8,5,9,0,8,9,1,5,4,8,4,1,9,0,1,3,8,5,2,8,10,3,3,3,5,3,10,3,0,8,7,6,0,7,3,10,5,8,6,0,4,7,9,7,1,2,9,0,6,1,3,2,0,1,7,6,0,2,3,9,4,6,4,5,0,3,4,10,4,8,9,2,2,6,4,9,1,10,4,3,8,5,6,9,8,2,8,3,8,6,6,5,1,1,1,5,8,0,1,4,8,4,8,6,5,8,1,0,10,3,5,6,5,4,4,6,10,10,7,3,6,8,7,0,5,0,6,10,2,4,3,7,6,8,3,3,5,8,7,3,7,3,1,8,2,5,5,9,2,6,2,5,3,8,4,10,8,9,1,6,8,0,5,6,5,4,10,6,10,7,1,2,7,8,8,7,0,6,7,1,10,5,9,2,10,10,0,10,0,4,10,0,10,2,3,2,1,1,6,8,5,6,8,7,9,6,1,0,8,3,2,5,10,4,8,10,10,9,9,8,3,5,0,1,2,9,7,10,10,0,10,1,7,7,8,5,2,9,2,0,6,2,4,1,8,7,5,0,3,7,5,9,10,2,1,2,6,6,8,9,0,3,4,6,5,5,0,2,2,2,7,3,2,8,4,3,4,6,5,0,5,6,7,9,8,10,10,6,8,9,9,2,1,2,6,10,0,8,2,2,2,0,0,0,10,2,10,0,10,7,0,10,3,9,1,0,3,6,8,6,1,5,10,0,4,1,6,6,10,0,4,7,6,1,4,9,0,2,0,10,7,8,4,2,1,8,8,4,1,8,7,10,5,10,6,1,8,0,1,10,6,10,0,0,0,7,9,8,6,0,3,0,2,6,8,5,5,7,2,6,9,3,2,10,9,6,4,5,0,8,7,7,2,1,2,3,10,9,3,10,9,8,10,7,3,7,10,2,5,10,5,7,4,4,2,9,4,10,6,7,0,5,1,10,5,0,5,6,9,1,3,7,10,10,8,9,3,1,4,4,4,7,5,7,8,7,10,9,6,4,2,9,6,7,0,4,6,1,5,10,9,8,4,5,10,4,2,10,1,7,8,4,10,4,3,4,6,1,4,8,3,2,5,10,9,7,10,4,10,4,6,5,10,7,1,2,0,6,2,0,0,2,8,5,8,3,6,6,9,3,6,2,2,5,2,6,1,4,3,7,3,5,6,1,3,2,0,5,9,6,3,4,9,5,6,1,0,8,2,0,6,8,7,9,9,6,4,1,5,8,3,6,5,6,5,1,3,5,1,9,7,4,1,2,10,2,9,10,0,0,5,9,8,6,2,1,10,8,7,7,9,5,4,5,0,3,3,7,9,0,1,9,10,7,2,1,7,3,1,5,3,2,9,7,2,3,7,3,0,4,6,9,3,0,3,2,1,1,9,5,4,7,2,4,8,9,4,9,3,7,3,10,3,4,3,1,8,5,9,3,6,1,6,10,2,7,8,9,9,5,8,3,7,8,4,2,10,5,3,5,2,2,10,1,7,10,7,6,0,6,6,3,6,0,7,5,4,2,0,5,2,6,2,3,8,6,9,3,8,6,0,2,1,3,4,3,8,10,7,3,7,5,3,9,9,9,3,0,2,6,6,6,7,7,1,4,0,0,0,0,8,7,10,5,4,2,3,1,5,0,5,3,7,7,7,6,8,9,0,3,10,9,7,0,10,3,1,0,5,10,10,10,6,4,8,0,9,8,1,2,2,1,4,7,2,7,1,10,2,6,1,9,4,1,3,0,2,3,2,8,3,4,4,3,8,8,0,6,2,4,4,9,10,6,7,7,9,4,0,7,10,8,2,8,9,3,2,1,7,1,6,10,3,0,7,1,4,2,2,8,2,6,0,1,0,9,0,4,4,2,4,7,8,1,2,2,1,5,6,5,2,2,5,3,5,8,10,9,0,9,2,1,4,1,1,6,7,7,7,7,3,3,5,3,8,6,2,8,5,0,8,8,10,2,6,8,5,6,6,7,5,7,2,8,8,9,7,6,3,10,1,7,1,3,7,2,4,5,7,0,3,5,6,7,3,10,3,9,1,4,9,4,10,3,6,1,8,8,4,8,7,10,8,7,3,4,0,4,10,10,2,5,0,2,8,5,0,4,1,8,5,10,1,8,9,0,0,7,6,6,10,2,10,4,10,1,3,8,8,10,1,3,4,1,0,9,4,2,3,10,5,2,2,2,3,2,4,2,5,2,6,8,5,0,3,9,3,6,5,2,0,3,2,8,3,3,2,4,5,9,3,1,2,7,3,9,9,4,7,2,7,4,4,1,9,6,10,4,1,1,3,2,3,2,2,7,1,10,4,8,1,8,4,1,9,6,8,8,3,5,7,7,6,7,2,2,3,9,5,6,5,6,2,10,0,5,6,10,7,7,7,1,1,1,0,2,10,6,6,6,5,1,10,8,2,8,0,2,7,6,5,7,9,0,5,6,6,8,2,0,0,2,5,1,10,6,7,0,7,7,8,2,6,10,3,7,4,0,9,6,2,8,4,5,0,0,9,5,8,1,4,9,7,5,10,6,1,0,2,4,6,2,4,8,1,0,7,3,7,5,6,6,8,3,7,9,2,5,7,9,1,1,8,3,2,1,6,6,4,0,0,5,2,7,0,0,9,8,0,2,6,8,8,7,6,5,0,7,8,1,10,6,6,0,1,5,5,7,2,5,2,10,10,0,2,8,0,2,7,6,3,6,7,5,1,3,7,6,1,7,9,4,4,10,1,6,6,10,3,5,6,8,4,4,1,2,6,0,3,5,9,0,5,5,10,9,7,1,4,4,8,0,2,4,5,5,5,0,10,6,8,0,5,6,4,7,0,3,7,1,6,2,5,5,0,5,8,9,0,1,3,6,1,2,10,7,1,0,10,7,6,3,1,4,7,10,2,5,10,4,2,7,2,5,9,9,5,10,3,7,0,1,2,3,0,10,3,10,8,9,4,9,10,3,7,5,4,2,1,4,10,1,0,10,9,6,10,5,7,2,10,8,5,7,5,5,0,3,3,9,4,9,0,9,9,9,9,3,1,5,2,10,8,9,9,4,5,1,6,6,0,2,5,4,10,7,0,8,9,2,10,7,6,2,4,5,3,4,6,9,7,9,0,3,1,3,9,0,8,2,4,2,9,10,8,3,3,0,4,6,0,5,5,4,1,5,5,5,5,0,3,5,10,3,7,8,2,8,5,2,2,2,8,2,0,9,7,3,4,8,6,8,2,9,10,1,6,9,0,10,1,5,7,6,10,8,3,4,3,10,8,4,3,3,9,2,5,0,1,3,5,6,4,3,1,1,9,6,8,10,10,1,1,5,2,4,0,9,1,4,4,0,3,8,6,9,9,0,10,6,3,3,9,4,8,0,8,4,3,1,3,3,4,8,4,8,4,4,7,4,4,8,0,4,3,8,9,10,9,10,1,10,6,5,9,0,10,8,3,10,0,7,6,10,3,9,7,9,7,4,7,10,10,9,6,10,1,5,9,5,9,9,9,7,8,5,7,7,4,1,3,2,2,9,3,5,7,2,5,5,2,3,9,2,10,4,10,6,10,7,5,1,1,10,6,2,10,5,0,9,6,3,6,5,6,2,8,6,7,7,6,5,3,2,1,10,6,6,0,2,10,9,7,6,4,1,4,5,10,6,6,5,3,0,7,2,9,7,7,7,7,3,4,9,1,5,4,3,8,7,3,0,8,1,5,1,10,5,10,5,5,9,8,4,0,0,4,3,1,5,0,5,3,8,0,9,3,2,0,9,0,7,1,1,7,3,7,10,7,6,6,0,0,10,1,10,10,1,9,0,8,10,4,10,10,1,8,7,7,8,4,3,3,4,9,1,7,8,7,2,0,4,7,3,7,0,3,9,0,6,10,2,8,0,8,0,5,7,6,1,4,4,5,1,10,3,6,7,6,3,1,7,0,9,7,6,2,2,10,8,3,1,8,3,8,3,5,2,2,10,7,0,2,0,1,7,10,3,5,0,0,4,7,3,0,1,7,10,5,6,4,3,4,2,3,0,0,0,8,3,1,10,2,2,10,4,8,0,7,0,6,2,5,10,6,5,4,8,5,8,1,5,4,4,3,2,2,2,10,5,6,7,9,10,5,10,7,7,1,1,6,10,8,1,10,0,6,8,8,3,9,9,0,5,5,9,6,9,5,0,3,10,5,3,10,6,10,3,7,8,2,10,4,5,9,1,10,3,6,0,5,3,9,4,0,4,1,7,5,5,4,0,1,9,3,1,6,5,7,6,6,6,10,9,7,9,0,7,7,8,6,9,2,2,7,6,7,6,5,4,0,2,10,9,2,2,4,1,4,0,8,6,8,0,8,7,6,8,8,8,8,7,2,8,2,7,3,4,4,1,7,4,9,4,9,3,5,5,0,8,4,7,7,2,2,3,3,0,7,0,2,8,6,1,4,0,7,9,3,7,6,5,8,0,2,0,10,5,4,10,8,1,1,1,8,8,9,1,9,1,8,9,5,8,10,3,3,5,5,10,9,8,7,10,4,5,10,10,1,0,8,1,0,0,0,0,10,1,6,5,10,6,0,9,10,8,8,8,4,0,1,0,10,2,2,2,10,5,2,10,3,8,8,9,4,2,9,4,5,8,2,8,9,6,3,5,10,1,6,7,7,8,2,2,7,0,0,1,7,0,9,8,0,0,9,0,7,10,5,7,8,5,2,2,1,10,7,9,9,7,10,6,1,5,4,5,3,7,5,0,8,5,8,8,0,9,9,5,3,9,5,5,10,10,3,6,5,9,5,5,6,6,3,0,8,10,1,10,9,6,4,6,2,8,4,4,4,6,1,8,9,10,6,7,6,4,1,8,9,5,5,3,2,3,1,2,8,5,7,0,9,3,2,4,8,2,1,4,8,10,3,0,8,2,2,7,4,7,10,0,7,8,6,1,9,4,1,7,5,4,5,9,3,4,1,0,1,0,8,0,6,10,7,6,7,1,10,1,6,1,10,10,0,9,8,8,5,7,7,3,4,4,5,7,4,5,10,9,10,6,8,4,7,7,9,9,1,8,4,10,1,4,7,7,9,10,6,0,8,1,6,4,2,4,4,5,7,3,5,2,8,6,7,0,9,6,10,3,1,10,3,7,0,6,10,2,2,2,1,2,10,4,9,5,6,4,6,7,10,3,5,4,7,5,5,7,8,2,2,0,5,6,2,3,5,4,8,9,2,7,0,2,8,9,7,10,7,9,1,1,9,7,0,5,2,2,10,5,9,7,5,3,8,1,5,4,7,10,10,0,3,3,1,10,1,10,7,8,1,6,8,8,4,3,5,0,3,8,4,10,0,6,7,10,6,2,7,0,0,0,6,5,5,8,4,10,2,4,4,3,5,10,3,3,9,1,1,7,9,2,5,4,7,6,5,0,9,2,2,5,7,6,4,10,6,6,2,10,10,5,9,2,9,3,3,2,1,5,10,3,0,0,6,10,9,8,8,0,7,10,1,7],[0,9,10,3,4,9,3,1,9,2,1,2,4,10,7,10,9,8,2,7,9,10,4,9,9,0,3,7,9,8,5,7,2,8,3,8,0,3,0,10,5,0,5,10,9,7,7,4,6,4,3,3,9,2,3,1,3,1,1,0,8,4,7,0,10,2,4,3,10,1,1,1,9,0,2,0,0,2,6,7,4,1,8,4,1,1,8,0,2,10,3,6,9,6,5,6,4,0,6,8,2,4,6,8,9,3,2,6,3,4,2,8,3,3,6,10,0,1,8,0,7,8,3,7,9,0,4,0,9,8,7,3,8,1,6,4,9,0,7,0,6,1,9,0,5,1,3,7,6,4,7,0,8,7,0,2,8,0,7,2,4,5,0,5,6,9,7,5,0,0,8,3,6,4,7,7,8,6],[5,6,2,10,7,3,2,2,8,5,7,0,5,5,6,5,2,8,4,3,1,6,4,10,7,9,7,8,0,3,8,4,2,8,4,6,4,3,2,3,8,6,6,7,1,6,3,5,4,5,3,6,0,10,5,3,8,1,4,5,10,0,10,7,5,2,7,10,2,9,7,3,1,1,8,2,3,7,6,7,4,5,0,5,5,7,8,0,9,4,8,4,2,4,1,1,7,2,2,9,1,8,6,7,9,1,3,2,5,0,4,8,7,5,9,8,7,8,9,3,4,10,10,3,8,5,10,7,7,5,3,1,5,0,6,4,10,7,8,9,5,1,7,9,0,3,9,8,4,7,4,6,7,10,4,6,2,10,9,8,8,5,4,5,6,4,7,5,4,0,6,10,9,0,2,8,3,1,1,2,5,5,3,0,4,1,10,8,9,2,7,9,4,2,0,10,8,0,9,8,2,1,8,2,10,9,5,5,7,0,9,4,0,5,0,2,8,0,8,4,7,8,2,0,7,6,5,1,10,2,1,7,2,9,3,1,2,2,7,8,10,8,6,1,3,9,6,7,9,8,4,5,0,8,2,3,0,7,7,6,6,5,4,6,8,10,2,6,3,10,1,7,7,0,4,4,6,2,7,4,1,2,9,5,5,4,5,3,1,1,5,8,1,2,9,9,3,2,0,7,4,5,8,2,10,3,10,4,0,5,1,2,8,10,2,4,8,3,10,2,10,5,3,1,2,2,5,2,10,9,2,4,5,0,0,10,7,10,7,1,5,0,4,1,1,6,7,1,8,5,2,3,5,5,0,0,2,7,1,6,3,6,6,0,4,2,5,0,1,3,2,4,8,9,1,5,7,7,5,3,3,8,1,8,7,4,9,10,9,5,6,4,8,6,10,3,4,7,8,8,7,0,10,10,4,4,8,3,6,1,7,1,7,4,1,3,0,5,6,7,8,7,0,5,1,3,9,5,5,8,1,6,1,6,3,4,9,8,8,10,2,4,2,2,10,1,4,5,1,5,3,5,6,2,5,5,3,9,4,0,9,4,2,8,9,4,6,2,3,8,6,8,0,4,7,0,6,2,9,2,8,3,2,10,5,4,9,8,2,5,7,10,10,6,4,10,7,1,9,7,6,4,3,9,5,10,2,0,10,7,2,6,5,9,6,6,2,8,0,8,0,7,8,2,8,1,9,9,3,8,9,3,1,6,0,8,10,2,9,9,9,5,5,7,4,6,1,5,10,7,6,0,9,9,2,1,10,2,10,10,1,5,4,9,8,0,0,3,10,7,2,7,10,10,7,5,6,7,9,5,0,9,2,8,4,1,5,0,9,1,7,5,8,0,6,3,7,10,7,5,0,4,10,0,3,2,6,7,8,1,4,3,5,2,3,4,8,3,7,1,3,1,6,9,5,0,3,10,10,0,5,9,7,2,8,7,9,10,5,8,8,3,2,5,10,5,3,6,9,7,8,6,5,6,7,8,8,8,2,9,7,0,6,5,3,9,5,3,4,3,1,5,5,10,1,10,9,10,10,3,4,0,5,3,2,9,3,5,2,10,7,10,7,6,9,4,7,1,7,0,2,5,6,7,9,10,4,1,0,5,0,5,10,7,6,7,4,5,3,8,0,8,10,4,0,1,6,8,7,7,8,5,3,8,8,3,4,0,1,0,9,1,4,7,7,5,4,5,2,9,1,1,7,1,10,5,10,4,9,6,7,7,0,7,10,6,5,10,2,1,1,3,4,7,9,4,4,2,0,5,1,3,1,6,4,1,4,0,10,2,2,1,10,8,0,8,8,0,3,7,7,1,3,1,1,7,4,2,9,10,6,7,9,10,6,2,4,7,4,7,6,9,4,1,5,6,4,2,0,6,1,10,0,0,2,5,7,8,2,10,9,1,3,3,9,3,4,5,0,3,9,4,10,3,8,6,6,3,8,2,7,8,0,5,4,1,4,0,2,0,6,5,7,10,10,5,0,0,1,9,2,10,2,9,10,2,1,6,7,2,8,3,4,7,0,5,3,3,6,1,8,3,1,5,8,2,1,5,10,8,7,7,2,8,4,1,0,0,7,10,5,1,0,5,3,3,10,8,8,2,9,0,8,10,6,4,5,6,3,9,3,1,9,5,0,1,4,4,9,5,1,1,5,5,8,1,3,5,2,9,5,5,4,3,1,4,1,1,7,3,9,9,8,8,7,7,0,0,9,8,10,4,2,7,0,5,5,8,2,7,8,5,10,2,8,8,8,9,6,7,0,6,4,0,9,9,1,8,3,6,10,0,10,2,4,1,0,3,7,0,5,0,5,10,0,3,8,3,6,6,4,0,1,3,6,10,9,8,1,10,8,3,5,9,10,0,0,6,8,9,7,4,6,0,6,4,2,6,10,6,4,9,5,9,8,6,7,6,8,2,3,3,1,9,6,10,7,2,3,5,4,4,7,7,10,5,4,8,6,1,6,0,9,2,0,4,9,6,1,1,7,7,4,4,3,3,5],[3,1,0,6,9,5,7,10,1,8,1,2,9,8,6,2,0,6,5,3,5,1,10,9,1,1,0,3,1,0,9,4,10,2,6,0,0,8,9,0,7,3,4,3,6,2,7,3,9,6,5,4,0,1,6,9,2,6,4,4,1,3,6,8,2,4,0,5,6,3,0,5,7,7,8,0,2,4,0,4,6,3,6,3,2,3,10,10,8,6,2,10,4,5,9,7,4,3,0,8,6,5,6,6,2,5,9,5,8,8,0,4,9,5,4,4,1,7,2,7,6,3,4,10,10,2,4,1,8,5,7,9,5,2,3,7,3,7,4,7,2,7,1,0,8,6,8,5,4,8,6,2,6,2,7,2,3,9,1,7,10,5,7,3,6,1,3,9,6,3,0,9,8,10,7,9,10,3,10,0,0,0,0,0,2,4,5,8,3,5,3,3,6,2,0,10,9,2,8,4,6,4,10,4,2],[0,7,9,6,4,4,8],[4,6,4,10,8,7,10,8,0,1,6,0,9,3,10,9,8,7,3,3,8,1,0,7,3,7,1,10,9,8,0,4,4,2,1,9,5,1,4,0,2,1,4,9,10,3,6,2,6,7,7,0,8,1,7,3,2,10,10,0,2,4,0,7,4,2,2,0],[3,5,3,5,3,2,3,3,2,1,8,0,3,5,10,0,8,3,1,1,3,3,6,4,10,3,3,2,10,0,0,6,7,5,5,6,0,4,7,9,5,6,2,5,9,0,8,7,0,3,6,9,10,4,0,3,3,8,10,1,8,3,2,10,2,7,2,4,6,6,0,9,0,0,8,3,1,4,9,1,8,0,4,0,9,7,6,4,7,4,10,1,0,1,5,6,6,7,9,0,4,4,3,5,9,5,4,10,10,5,8,5,8,7],[2,2,3,8,4,4,5,6,9,6,6,6,4,5,3,9,3,4,4,9,1,4,7,4,5,0,3,3,5,8,8,1,0,6,3,0,1,9,1,10,2,5,9,3,3,10,9,6,5,3,10,10,2,4,7,6,2,4,5,5,7,5,3,8,1,2,8,4,5,7,5,10,9,5,1,2,9,10,3,10,8,3,0,6,3,9,4,6,9,0,5,10,3,5,10,8,3,6,10,4,8,6,1,7,4,7,7,3,2,2,4,2,6,4,4,9,8,2,0,7,4,7,4,7,4,0,5,4,5,4,5,1,1,4,7,0,8,10,7,10,2,9,6,1,1,1,9,2,8,6,1,8,6,0,1,9,8,2,6,9,2,0,7,3,3,4,4,10,5,8,7,1,6,4,7,1,1,9,10,0,1,6,10,5,2,8,0,9,9,2,8,10,0,9,0,7,5,6,4,1,5,1,8,7,10,1,1,3,10,2,9,10,0,0,2,1,9,3,4,0,2,9,10,4,10,2,10,6,6,5,7,5,0,6,4,5,8],[5,9,8],[1,1,4,4,5,6,8,4,2,5,4,8,8,4,5,10,8],[7,0,2,8,2,6,1,9,6,9,7,10,7,4,10,4,9,3,6,2,0,3,9,8,4,10,9,7,6,0,5,9,10,5,3,10,9,4,7,9,7,0,9,6,7,7,10,9,2,7,2,6,0,8,5,2,2,3,1,10,8,4,2,2,0,9,3,8,3,8,6,9,10,7,2,2,10,2,2,9,2,1,6,1,9,9,0,8,8,2,2,1,1,10,5,2,1,2,6,7,0,2,1,6,8,7,1,10,4,10,2,6,10,5,5,9,7,10,7,9,3,5,4,1,4,7,3,5,0,8,0,2,2,9,3,7,5,9,0,4,0,9,8,3,9,8,4,5,5,6,2,1,8,1,6,6,8,9,5,8,9,8,6,6,8,5,2,1,7,0,1,6,4,8,1,9,8,8,8,9,8,1,10,4,0,10,7,6,8,4,9,7,5,9,8,3,6,9,6,5,7,7,7,3,5,4,3,1,6,3,3,7,9,7,5,2,5,5,8,4,8,3,10,5,7,3,8,0,2,9,6,4,4,3,9,0,8,8,6,4,4,3,8,10,8,5,6,7,5,8,5,8,6,5,1,4,10,7,8,4,3,0,2,4,3,1,0,0,4,9,3,5,4,4,7,2,1,6,10,9,3,3,2,2,5,3,2,6,6,2,8,5,7,7,2,9,9,0,6,1,3,10,6,8,9,0,10,10,9,7,1,10,9,7,10,10,0,10,1,3,3,9,10,9,1,2,7,6,5,6,5,1,7,7,9,8,9,3,0,5,0,7,5,8,1,3,9,9,1,3,7,0,4,1,7,7,7,4,6,7,0,2,9,4],[3,9,10,2,0,7,8,5,3,3,9,3,2,8,2,10,7,9,3,9,1,5,5,8,1,4,0,1,3,8,9,1,6,5,1,7,4,6,7,1,10,4,5,6,9,8,10,3,1,6,4,1,8,3,10,9,7,10,8,9,1,0,8,3,9,6,9,0,8,3,9,7,6,1,8,9,3,8,1,1,3,3,9,3,7,5,9,9,4,1,7,10,7,7,7,8,5,10,4,9,2,0,8,3,7,5,4,10,8,7,8,4,7,4,9,0,4,0,10,8,9,2,7,3,10,8,8,10,4,0,8,10,8,3,3,1,7,10,9,8,8,3,8,7,0,9,4,3,0,2,3,10,2,8,8,1,2,6,4,6,2,6,6,1,10,4,9,7,7,9,6,9,6,7,8,2,4,4,2,1,4,1,8,5,0,8,0,8,9,2,4,9,5,4,6,3,10,7,7,10,2,7,1,7,7,4,4,8,0,8,5,3,7,5,5,4,2,2,4,9,6,9,2,8,4,8,2,9,2,5,1,3,3,8,9,10,2,1,4,6,10,1,5,5,0,1,2,0,0,8,5,6,10,1,5,0,5,6,8,1,10,7,8,3,3,3,8,7,10,9,9,4,7,7,1,3,5,5,3,6,2,1,6,8,7,6,6,2,5,0,0,9,8,1,7,3,1,10,0,7,6,10,5,6,0,6,8,7,9,3,2,7,7,10,9,1,1,0,2,7,0,0,2,2,0,7,1,1,9,4,0,4,4,6,1,2,5,1,5,8,7],[8,10,0,4,0,10,10,10,9,7,5,2,0,6,2,1,9,10,3,5,1,5,4,1,2,6,10,2,6,2,2,5,8,6,1,7,10,7,0,0,9,0,6,10,3,6,2,8,9,9,7,7,5,6,8,5,10,8,4,9,2,7,7,7,7,2,8,7,0,9,1,4,2,9,5,2,0,9,6,1,4,4,1,7,3,8,0,7,6,4,5,7,6,4,8,9,9,7,10,5,0,6,2,3,4,0,3,5,7,5,4,3,8,4,9,10,4,0,5,5,2,5,9,1,0,10,7,8,5,6,9,5,7,9,0,0,0,9,5,5,5,1,2,2,3,1,2,8,0,9,7,6,6,7,7,6,9,8,8,10,6,6,10,10,3,9,5,4,2,9,7,4,8,10,10,2,6,10,7,8,8,4,4,6,6,7,7,4,3,1,2,5,10,4,5,0,9],[2,0,2,3,7,3,4,7,5,6,8,7,8,1,1,8],[2,8,7,8,9,3,6,0,6,2,10,2,0,6,9,6,0,8,7,10,5,6,3,10,7,7,3,9,10,7,6,10,7,9,9,4,9,8,7,9,9,7,2,10,2,0,8,7,8,2,10,10,9,0,6,2,10,2,3,10,8,9,5,4,6,8,0,8,2,3,1,2,9,7,7,8,5,3,4,2,2,4,8,1,8,1,6,5,2,9,3,4,7,10,8,4,6,5,9,5,2,8,2,10,0,3,7,10,1,2,8,4,6,7,0,5,2,10,6,7,6,9,10,2,2,6,5,1,5,0,9,5,10,10,2,8,9,9,8,10,10,4,5,7,0,2,5,3,1,2,7,5,9,2,2,1,0,0,5,4,7,2,9,10,3,2,7,0,9,1,8,6,8,8,0,4,9,6,7,6,10,8,0,9,9,8,6,1,0,3,1],[6421,8082,8545,6802,2830,5166,995,3813,1417,365,1953,3906,2676,5217,4941,1491,1813,3182,3349,4775,1497,697,324,5803,4149,2998,4863,7166,8156,8051,8554,9330,420,6123,7421,5703,2693,927,4724,4297,3322,2051,1728,4436,5935,1834,1364,2553,1488,7589,6409,9175,5542,6095,8211,7036,8974,5993,6720,5632,6919,3322,4898,1694,2877,7538,2789,963,3247,8670,2228,757,780,7777,6181,1144,5457,6289,7760,4171,3899,2763,4276,2921,1339,3405,9092,2066,9806,6512,7343,5539,9974,6000,8648,8297,5125,494,6269,7075,8461,634,8979,5543,8176,9178,8992,2548,9919,3035,9060,917,2958,7829,7708,6958,9417,9398,8010,1067,6942,650,1618,5571,1925,4975,7594,9932,2596,3216,3211,1044,316,6961,2974,6873,2965,8313,2393,7559,4965,4460,448,3440,4006,6438,9229,8143,140,2542,2632,2526,4086,8078,3719,8738,5713,9159,296,4686,3526,9297,4449,6884,8920,8265,158,4657,5719,8656,3663,8392,5882,9240,5668,1651,2861,9641,9989,1247,8741,3519,4977,5715,6320,6257,4993,9169,8075,9116,7426,4379,9478,5843,2158,627,8287,1744,6806,8860,5442,7309,3776,7273,7017,3152,1411,6627,5120,8346,3313,9348,5518,836,7759,4042,1335,7685,1693,226,8546,8167,9589,9673,428,9499,8539,578,9646,3116,2407,3697,3090,1129,8095,2741,4794,421,7364,4714,9395,4052,3504,8922,4472,2796,6609,6652,4384,6511,9009,4070,3784,9544,8532,5903,2350,6982,564,6124,9829,3706,5432,2391,8007,2586,8911,3269,9697,882,1054,6001,8438,8517,1483,5100,5236,5526,6379,2045,3089,7141,4838,6748,9184,6098,1485,563,5219,592,2667,9415,9982,8436,1782,5558,5112,5841,1547,4909,2800,782,7643,1748,2802,1646,7612,4345,6697,2274,3777,53,1893,462,81,6317,8736,874,3802,1623,6835,5929,4405,784,9968,8932,8563,2947,4195,9188,3830,6144,8989,4747,4238,3043,7898,4434,6750,2193,1695,1756,4575,5837,2198,8300,3075,6163,4516,6676,1935,7846,1571,1838,1505,1875,8842,579,4323,4399,9996,9691,2405,1948,7448,4003,7654,8117,1037,405,9672,1948,9897,2771,9848,6695,8744,7832,4740,1287,4548,7950,1696,6548,5621,2836,4475,2803,2751,5345,457,8017,8647,9381,2337,4176,708,1943,8406,8755,178,877,5598,2694,3115,7379,7254,9237,2699,1356,5721,9020,2398,2427,9008,1525,9425,8972,3890,4298,2821,5890,1281,3043,5689,9302,5972,7792,9404,5155,558,8136,4455,9590,2801,7327,8148,3132,6886,3718,1738,9672,9690,4093,5697,9995,6247,169,503,2690,7971,267,3864,6917,2997,4100,7350,2546,7498,7409,1713,4849,7373,8763,3428,1127,3024,9157,9608,4160,231,538,966,3643,7040,309,3483,4925,7894,3119,1394,2842,4367,9677,5201,2991,1126,6402,89,1870,1503,9824,8672,7599,7107,1895,6607,1064,5516,219,8636,2336,3591,7643,6280,8642,1036,5436,6291,7534,2347,2984,8065,875,4693,6318,7069,7159,2850,2387,9011,6414,3826,7486,770,4674,1234,749,36,3082,7256,3330,4925,5233,4279,7116,2590,4279,6409,9504,9977,4276,1464,9004,3451,2868,3771,2461,5876,8371,2807,5357,4956,3472,5966,8396,4455,6145,9146,5187,5274,3123,8540,6658,8996,6116,3102,7728,2083,4262,9941,8180,6390,9655,2973,7251,6376,9937,5705,4098,3125,2227,4439,2381,893,7005,5420,3062,1401,8946,1901,513,3626,6481,4523,1283,6394,5472,6132,8323,1178,8670,3054,2250,1689,7476,6234,1032,8822,7849,6547,8360,1963,265,7411,3939,3888,4631,8001,8852,4588,9737,86,8887,7220,1712,4505,3197,7198,9991,6452,2545,3688,8387,8473,9723,1501,6239,671,1953,5544,581,8354,470,6860,8585,8555,7617,4731,9502,9351,2725,2205,251,9356,5529,4733,1606,7683,1838,9811,7004,6491,5828,1054,2989,8127,9566,5999,1658,8294,8465,9720,2840,1658,858,175,750,5876,963,4347,9290,4281,1644,4027,3353,9839,7610,6734,3167,1408,1333,5675,7559,5979,5175,4412,6142,4807,2258,9756,4703,9918,2211,5889,425,6639,205,3677,7958,990,5392,8900,4436,9268,1489,1246,3269,142,9920,7421,9302,8129,2355,1647,4146,8130,5681,5408,7298,9873,9676,4940,560,2442,2216,1733,9626,3079,8173,5908,2301,145,6836,1944,8107,7236,222,8751,8320,2568,5612,2722,5695,5250,2849,6590,7356,3481,3409,248,1914,7750,749,9625,6572,6596,3185,1413,3055,8256,9679,7282,3884,3119,4312,2179,6030,8653,1834,3636,9892,3143,7697,5821,3903,2592,2219,375,7290,3144,5256,7348,3023,2940,659,736,9049,6987,7075,8950,2543,9478,926,3036,4063,9491,8349,6501,9342,7916,5692,2232,7948,7318,6447,3336,8755,8082,6713,2375,8063,4376,7359,3449,3068,3475,6685,3853,7248,7200,2535,7585,5522,8923,1333,4834,3407,4007,5508,5350,178,4958,6900,670,3879,1973,6867,1733,277,6748,7748,1988,5857,4699,179,8522,9979,595,5186,9964,7353,3840,9819,4507,5686,3034,8179,1962,5251,3094,6464,4867,6855,6284,1562,4601,2431,6510,3284,5980,5129,2907,4359,7480,1645,6867,4346,6345,2107,6217,5004,6341,3833,6404,4015,6089,9154,8651,5822,4434,2194,778,3116,7134,3615,5227,1859,9437,281,3577,1758,9885,3804,5048,7855,9672,251,4585,6088,3404,417,5845,7912,8579,6197,4910,8511,9160,4477,8241,857,930,6711,1179,2554,487,2850,3907,6662,2379,2819,284,7565,1716,7833,3755,9487,8979,9342,5323,7469,6597,461,2144,2882,4961,5776,8183,928,5553,6814,7088,1354,8458,380,5873,2240,6734,6947,472,7547,1885,2369,1246,2287,713,6164,3729,5086,1171,2271,9504,853,1477,1728,2103,2613,1807,3026,990,2686,6731,3963,8111,2784,3230,9915,4165,3210,2969],[8189,3044,3150,6224,5481,5143,599,4208,4695,7764,2830,6622,8211,8829,8949,414,2108,9882,3878,5964,1958,4671,832,4002,6184,3821,3651,3345,4385,7603,1954,1622,3471,4472,2642,1790,8131,4165,4313,324,5150,603,4729,1005,389,3648,3400,6841,1540,9007,4767,8288,9732,9943,2075,4812,2656,4435,2594,1086,1027,6470,2110,4768,9307,5734,89,1994,4406,7225,7399,427,6414,461,1328,7753,1251,3560,8206,3696,8660,9893,9713,2659,136,8958,5822,6909,1225,8080,969,9806,3976,4383,512,9362,9024,6625,6919,4706,907,7675,1126,4802,7150,7884,3912,1226,1912,2961,2709,9159,2392,7682,7385,7439,3174,6911,4591,1763,9572,1053,8634,4261,4331,7723,6785,1033,2902,697,5387,6119,378,4913,2132,2636,5967,9174,390,1582,2038,9691,2003,8163,8604,5879,2417,2400,9083,1295,7370,5241,9912,4399,5343,4601,2366,2317,5743,5510,7811,3769,4839,3731,9542,7552,8208,9671,8000,2380,2626,9451,3477,5700,2383,58,8307,6941,1180,746,9614,6306,4967,5893,2582,8037,1116,5469,2289,3352,6331,6811,2440,6142,5536,7726,4498,8374,6761,931,9976,9474,8715,2645,2111,6384,6248,4896,7578,9193,3606,5147,956,1502,2001,2079,7684,5018,6341,2534,7395,8446,3933,2833,8258,9996,1309,8419,2317,9658,1785,7978,763,5984,3114,3679,5741,4811,4911,4736,7610,3626,436,1516,1492,9693,5976,8290,6158,3722,1766,2376,3349,9566,8894,724,9584,6833,9056,9547,5590,624,9377,9415,3845,4639,3935,2083,9183,2387,2399,1330,5267,6933,4668,5538,2469,1790,3569,6839,8272,2547,7502,4252,8927,5337,3624,9505,4201,5001,3008,4405,5866,8746,3654,9129,9035,7529,9940,2733,8140,6957,5920,387,2821,5932,1599,109,1634,3825,9622,1014,6626,9175,2454,1681,9765,9815,8616,1933,2474,1773,5745,9878,5677,4142,6660,275,9639,9178,332,5671,914,8772,7136,6170,6843,1017,2051,1461,9064,9140,3949,9346,7593,6778,8070,7507,9945,7414,5726,8713,4538,8055,4759,4926,4766,8441,5871,395,18,5339,1305,7603,2427,8174,4643,395,641,190,2743,8284,7063,2189,4895,4077,7381,3553,8300,6663,9467,2635,5038,369,2294,1448,9232,6762,553,1218,9738,1590,5089,5158,9359,343,2986,442,1776,8973,824,2906,9655,1905,8340,4602,491,6676,3170,814,5158,1960,1329,1225,1021,3996,490,6094,566,3294,6589,7553,783,2519,3891,5172,3564,7463,9019,2562,8801,7765,2221,959,7155,3500,8856,374,4856,7048,4809,5133,6531,360,4115,4815,3731,2328,2388,6740,1915,1379,7340,4543,8889,2529,3867,9447,2236,2689,2763,8327,8659,7170,2397,8956,7101,7449,129,6499,7758,3081,4221,9501,272,2269,9424,9058,4307,9588,8380,4370,8610,4600,7459,3700,7322,8317,8743,8527,4218,5965,2133,284,9940,1888,3716,531,4876,6167,4352,1663,3604,9567,4279,5438,1564,6705,3801,1443,7089,3140,8657,54,7584,964,1754,9137,1621,521,3217,9761,6934,2549,7030,6789,1831,1149,5423,4810,2856,4726,3369,706,4473,3263,8980,8579,8741,7137,9451,8371,7921,9292,7276,9845,7733,4122,3560,4067,5155,8025,7955,7560,3187,2388,1145,8159,724,6780,4751,8697,7042,232,1459,7838,6403,6481,252,8128,4116,9502,860,8728,4631,1423,6832,879,5189,4306,6751,2371,9682,6852,1976,3020,3267,2792,7397,8516,3479,6793,2835,8980,658,5541,6009,5292,4063,5881,9835,559,6389,5278,5408,3844,8479,7662,4038,2255,2149,167,1245,1232,8030,9732,438,7552,6474,794,137,2805,1534,8711,3238,5818,9787,2093,2888,3838,7232,8853,5050,9587,4110,3147,5670,3354,7410,4707,4721,8604,559,848,4351,8555,4843,82,1446,1805,3629,8386,8614,5682,9164,8076,8394,7146,2358,345,7909,7583,7693,4216,8194,9650,4911,9679,9666,2050,1871,4403,1421,4335,9081,2692,8055,7849,5955,3925,7936,74,9449,895,1127,9689,7328,8442,831,3367,8117,4348,7641,1027,851,5256,2459,173,1338,1873,9323,2171,7464,562,6124,8031,6247,7540,2224,3117,6115,4014,9154,9518,1856,9047,6974,5994,8074,9282,2094,1282,5511,3285,7687,3603,8939,315,6777,6214,1859,8342,3346,4982,6243,9996,2118,7726,5810,6954,5406,3599,8518,1103,4055,808,8173,8151,8434,4875,7716,2019,5215,5288,4531,7470,1752,886,4320,3291,9395,999,4628,9599,6016,2532,9516,1590,7131,3302,3746,9085,8099,2248,6085,2836,2234,6716,2333,6470,1381,1793,3143,2265,5251,9206,6217,9284,1458,4654,7313,4894,4232,4945,5364,5620,1166,8254,2029,918,3035,9538,1749,25,9085,3470,2924,9873,3185,8906,5106,3234,2012,3647,3017,9773,663,6360,4146,7102,7425,4498,4556,6105,1205,7680,8104,1069,7553,3278,3199,899,3945,6563,7542,5649,1631,7617,7051,9462,4777,826,7995,510,8082,8752,4599,5030,2290,7843,3408,9290,3388,4420,3618,5569,885,7273,1343,8195,7651,8596,716,5123,649,4766,2913,5737,3291,8947,8152,3162,5973,1240,4237,10000,6948,6194,9795,4132,4365,7532,8683,5980,8318,8476,5883,7823,7293,9510,9267,8285,4782,2198,8422,2608,5341,6476,1016,7621,687,4950,7161,6566,3401,4746,9571,9493,9901,171,5830,7694,2723,8613,6528,2053,4457,8511,8835,8254,1657,8571,6480,7821,1584,1698,2501,7887,7137,6357,503,7740,9559,8151,452,2781,6934,4203,4402,5160,9023,2781,2023,484,1637,5003,7273,8892,4881,4307,2998,3372,4182,3266,9498,5661,1081,3198,4696,9880,658,5195,5715,5230,4617,6743,3979,2472,6082,4658,7338,8641,1886,5457,1067,4633,1042,2504,9655,6491,7418,451,8780,215,5320,1129,1619,9801,1649,4727,4191,5785,9535,9678,8461,2001,2601,1653,262,859,1861],[8025,9190,7867,7150,8629,7144,1081,6520,5548,2846,8422,3804,3426,1114,213,6241,4347,7272,5083,8664,2912,6972,9024,1047,3106],[5594,6464,3536,2638,1246,7230,6010,4180,6484,3252,7552,1557,2132,1277,3625,6321,8070,1321,5131,1070,9546,4542,6289,7676,7960,2979,1612,4101,7458,8059,6926,610,2252,7864,4950,6188,1430,6499,8229,7387,4906,9579,6587,1916,8729,5256,9282,2497,3550,469,2267,4134,1812,7351,4323,2799,8190,503,5005,4879,5135,252,654,8308,7716,4978,9270,6971,4,8585,5653,2668,479,4162,3219,7076,1753,8388,1198,7780,9518,1371,3491,1567,9515,9268,7735,6654,1090,5924,546,4919,3144,9154,2321,7020,4812,2414,8143,6654,7803,1611,3258,316,1485,5644,2521,3821,6054,1079,2719,1257,4810,6921,7528,3595,749,4506,9165,6104,3470,2756,4456,1369,2225,1946,6488,506,8697,6271,1139,2353,6319,9865,9348,6281,5054,4565,650,1456,45,9333,193,2567,8854,7755,3607,4721,7521,8239,825,3782,6147,2231,2970,3803,3799,6192,6018,8458,5409,3062,6711,6483,5551,9484,43,4452,4791,6946,2882,7892,9988,6973,9526,4643,7582,7794,3127,9077,7898,3989,8127,7051,1298,9120,7665,2446,3554,8886,6338,3238,9055,4771,9297,3691,8930,2073,4598,447,5891,3618,8729,5317,9311,6011,1260,9098,2967,6399,5816,6252,6196,5655,2848,6033,2060,6723,8309,6055,2402,7566,558,9938,2801,8611,7059,9020,2807,8525,3954,2943,838,5950,2515,2906,4750,416,442,6823,5015,7452,2878,398,8198,7147,4228,8003,7037,6485,1904,2939,1177,2653,3122,8212,6731,6927,9723,5730,2921,7615,1408,6733,214,7454,3893,1872,8149,9321,3888,6636,4111,6215,58,5251,5005,8191,1281,8997,8190,5333,8270,1333,7098,7699,871,9039,5442,7670,3989,4301,1989,6953,8453,256,6474,6290,7236,1598],[2526,9969],[919],[6333],[1600,4437,5647],[5802,1102,90],[3581,8289,5671,3736,5496,7142,7089,5944,6259,5300,4371,6545,5007,2123,3370,3603,5286,6369,1719,4152,256,3981,5494,668,7069,3322,3588,7065,420,2380,3258,8322,5766,1955,3836,234,3695,8365,1617,1054,7051,2723,8838,8592,8901,2452,2963,4676,8035,7550,7040,2424,8035,8764,9221,2369,9260,9133,9684,4268,1789,1050,9757,7601,5475,3028,473,2275,6211,225,7342,6034,2677,1275,2478,5970,8111,5991,8258,7830,6884,9635,1809,433,5761,1975,4469,7721,2391,3962,255,1242,6012,69,2018,7420,1108,1035,6388,5153,3848,467,3015,4350,8896,383,385,614,9604,5741,8266,2927,8199,3967,9680,4630,8876,9049,434,7176,6164,9965,8995,3626,589,8310,3011,2277,1955,1184,2574,9220,936,393,7380,6396,8547,5629,2793,96,5395,9378,6248,1603,8821,1855,1602,1251,407,7016,8978,2372,827,4907,7004,7392,6744,4655,8744,7675,3358,4275,8427,8705,933,6003,5217,5619,9447,6446,682,7024,2516,3415,8654,7129,4125,8559,4966,6563,9935,3650,558,9232,6958,2787,6618,3487,6829,5957,9599,3822,3487,6486,4622,9700,3387,6337,7034,8443,4872,3246,2828,7363,9200,5734,4392,4400,8767,2792,1987,1072,5942,4869,8080,397,3965,4575,4036,2188,8341,2702,4954,6381,5161,9122,2308,8005,9884,308,5141,449,5235,7068,527,6515,7608,5748,2920,9924,3565,4334,6859,4876,9335,8263,354,5834,9688,81,8776,3685,3443,8134,3488,9671,6052,2958,7010,6663,450,9239,2552,3255,5621,7249,9040,8306,4221,3011,3596,8034,6744,2836,6319,7312,3454,4050,2516,4473,803,1707,6186,7713,3292,5375,9454,2836,593,1750,1809,5864,4566,6078,1366,6866,829,1095,4166,3529,983,3810,8299,5954,9227,3408,7081,8572,1279,1759,2225,5453,1189,8993,8932,8947,2293,2120,9580,5566,9421,5385,4953,9919,2854,5380,9730,5947,5832,228,7968,1517,8544,3379,9886,9493,6377,1694,3579,2955,5137,2135,859,4552,7560,8188,617,4353,9721,9176,7034,6788,4670,8186,1295,2483,7727,824,4366,2739,7966,7300,3864,939,3231,7067,2174,6158,8115,2116,180,2935,3821,8396,2804,9801,6627,9013,6401,1955,9682,7864],
      ][testNumber++];  
};