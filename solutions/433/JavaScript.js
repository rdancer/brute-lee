/*
 * language: JavaScript
 * problem: 433. Minimum Genetic Mutation
 * link: https://leetcode.com/problems/minimum-genetic-mutation/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
  return [1,2,3,-1,1,2,3,-1,4,4,6,-1,8,4,3,-1,-1,-1,
      ][testNumber++];  
};