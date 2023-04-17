/*
 * language: JavaScript
 * problem: 331. Verify Preorder Serialization of a Binary Tree
 * link: https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  return [true,false,false,false,false,true,false,false,true,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,true,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,true,true,true,true,true,true,false,true,true,true,false,true,false,true,true,true,true,true,false,true,true,true,true,true,false,true,false,true,true,true,true,true,true,false,true,true,false,true,true,true,true,true,true,true,false,true,true,true,true,false,false,false,true,true,true,true,true,true,true,true,false,true,false,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,false,true,false,true,true,true,true,false,false,false,true,false,false,true,false,true,true,false,false,
      ][testNumber++];  
};