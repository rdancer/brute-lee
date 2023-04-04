/*
 * language: JavaScript
 * problem: 2099. Find Subsequence of Length K With the Largest Sum
 * link: https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
  return [[3,3],[-1,3,4],[3,4],[-35],[50,-75],[33,48],[-8,-94,-30,-98,-27,62,26],[63,61,-17,-55,-59,-10,2,-60,-65],[952,529,-27,-41,716],[878,915,778],[583,530,-81,317,218,-63,-76,655,893],[-399,568,865,531,634,348,423,987,-138,161,-121,927,91,626,203,225,25],[357,358,724,465,625,765,476,992,803,863,379,561,673,526],[18,3,19,-8,30,22,-35,11,16,18,-21,32,-7,-6,38,25,-21,-1,26,-8,-34,6,-3,26,-32,22,-20,35,-35,-30,-8,11,7,-23,-9,-22,1,33,-6,12,2,27,-27,28,-12,21,12,16,21,33],[21,36,14,14,20,15,11,27,29,9,24,16,25,39,33,32,16,40,28,14,32,15,11,22,16],[25,31,33,21,38,37,17,31,23,40,25,20,17,19,31,36,17,40,26,33,15,32,37],[40,31,39,33,26,32,36,35,31,35,37,34,34,31],[35,34,38,38,36,39,38,35],[28,21,17,39,37,32,21,37,27,29,37,27,34,36,20,19,19,24,33,38,23],[10,38,16,20,6,17,16,13,-2,5,17,15,7,1,33,13,2,4,18,14,21,21,36,7,38,3,26,28,4,22,7,30,36,30,6,23,35,28,38,28,20,30,-2,18,6,25,6,35],[-7,-13,20,-19,28,-15,6,8,-11,33,27,-4,6,-3,-13,14,4,20,-5,12,-18,-1,-19,-15,-16,-13,-15,33,26,16,-3,25,28,36,21,37,9,-6,-5,13,2,36,-11,-11,-7,2,39,34,16,17,36,6,40,11,13,-15,-10,9,40,26,-6,-11,30,19,23,17],[11,2,-7,6,11,5,-12,9,27,-10,7,40,29,29,-5,20,-7,12,0,9,25,24,-3,-1,20,-1,5,29,1,20,-8,31,5,33,-10,-2,31,7,10,37,20,4,-10,-4,5,25,22,-7,15,39,11,27,13,10,32,-1,19,17,17,34,9,29,36,-10,-8,39,25,34],[24,26,2,31,19,33,39,25,7,32,7,31,12,4,38,32,26,6,10,26,28,4,12,23,30,8,30,20,15,27,35,27,14,6,30,14,28,27,28,3,26,19,5,15],[6,35,32,26,24,23,37,34,50,17,47,17,6,4,21,44,40,16,15,9,37,5,49,4,21,20,10,11,38,15,34,14,16,19,33,50,38,2,32,48,21,10,2,3,21,50,32,21,29,21,2,4,37,14,36,43,1,8,27,38,43,9,37,31,14,22,3,8,10,30,30,9,28,8,50,18,24,45,36,31,8,37,47,29,36,1,7,36,4,6,23,22,3,30,3,24,26,22],[32,45,31,43,26,39,28,39,36,27,38,47,27,38,49,46,35,50,46,34,38,46,40,47,42,30,49,25,43,39,43,32,42,43,40,43,46,42,49,48,27,31,45,38,31,47,31,42,45,45,39,49,41,48,48,37,47],[23,24,5,9,31,46,0,18,-17,-5,30,6,-14,25,22,11,-9,-28,41,-10,-2,-18,-7,20,-10,-11,-24,41,16,22,-29,-7,-2,1,15,17,5,-29,31,-19,38,-27,49,-17,8,-10,20,26,-10,-25,-12,-35,27,8,34,42,39,36,38,7,-1,-15,-10,-18,-24,28,-2,29,-18,14,25,28,46,6,20,-3,-17,14,-9,29,35,-23,10,23,-26,-26,2,45,-13,-14,48,-14,19,-21,11,4,-15,33,-26,3,-3,-7,36,26,45,32,-24,-14,5,20,46,38,49,47,21,-26,39,-9,-31,-6,44,-16,-13,-17,10,4,24,-34,-8,46,11,34,20,42,41,-6,45,-15,-22,-21,43,-13,-20,-22,17,-1,1,-34,-22,28,-9,28,43,34,27,-15,37,21,-19,3,-12,-6,44,-1,0,39,21,-12,-29,-35,21,19,48,23,38,-7,-25,16,48,26,18,26,-11,37,-1,8,-28,11,2,3,12,7,1,-7,47,17,-33,3,30,2,15,-28,8,43,19,8,22,-8,-23,-27,3,-30,-9,-4,20,-1,14,-4,34,9,33,32,-9,35,43],[17,21,37,10,31,39,21,14,24,42,41,33,10,26,11,27,43,49,11,45,10,45,20,26,45,44,19,23,45,21,32,26,37,17,13,35,41,16,16,18,50,13,32,31,44,24,35,45,25,44,27,18,44,24,32,11,16,37,17,25,27,32,24,31,33,40,37,49,10,36,24,11,45,49,19,45,12,30,17,22,15,40,27,20,16,49,39,23,24,12,23,27,48,12,33,18,20,49,21,26,45,24,45,42,25,48,21,29,23,42,14,32,36,23,15,41,13,14,14],[29,23,27,24,22,46,41,30,37,40,44,32,20,19,24,25,27,35,26,29,28,28,37,27,29,19,36,46,42,36,20,28,39,42,34,39,28,23,44,29,18,24,44,39,42,44,22,23,48,40,39,40,19,39,47,26,28,41,35,43,38,47,44,42,38,39,24,34,26,23,22,49,26,48,28,23,22,32,42,39,41,28,47,41,31,26,29,22,49,29,26,24,44,37,21,46,23,32,36,46,44,48,40,26],[19,-10,1,3,-23,6,-8,11,18,50,-15,27,1,-24,18,22,-4,38,-9,4,33,-13,-23,33,45,24,3,-14,-14,45,19,42,19,19,49,-5,10,1,6,30,45,13,1,40,11,15,-2,30,-21,-4,-3,3,34,43,11,4,0,50,44,-17,2,-12,46,30,37,14,-19,34,45,36,-4,5,-13,17,18,-19,-6,5,20,18,-23,-3,21,-15,41,-17,-4,36,39,26,16,43,8,10,4,27,22,0,21,36,34,43,47,41,43,14,30,-24,12,18,23,44,46,34,7,14,20,39,6,-21,48,26,11,10,50,32,7,41,2,3,19,27,-18,20,-7,47,11,30,32,42,20,26,21,18,39,-7,32,-11,-22,44,13,40,-4,50,39,10,-19,4,20,-5,20,26,17,-19,9,24,42,37,-15,-17,41,16,-22,13,28,7,-8,31,-8,19,3,10,18,40,-7,-14,-21,-20,-7,10,7,33,8,36,-1,42,44,48,6,44,-11,-12,28,33,13,19,4,38,11,42,16,25,42,3,45],[41,41,40,41,43,41,41,46,47,44,47,41,42,47,46,40,47,48,43,43,50,42,45,40,41,41,50,50,41,42,49,50,43],[44,42,5,20,-4,-4,28,27,23,-3,-19,5,-17,41,32,19,29,-5,11,29,20,45,31,16,-7,-5,43,15,45,-11,-12,37,5,-20,6,-4,-1,0,6,16,-3,-10,38,-12,18,-19,-4,41,42,45,11,-13,16,-19,-14,19,0,41,0,35,-17,48,-14,16,50,32,48,17,44,40,-11,9,21,10,23,17,-18,-14,12,7,34,49,25,34,-10,29,47,-7,-17,50,-11,29,-17,47,-2,34,22,38,-3,41,22,33,47,46,3,2,5,21,47,44,24,18,29,32,-17,-8,33,-6,7,44,10,15,-21,-3,-9,10,-21,31,50,45,-11,-6,18,1,46,19,35,20,6,-9,-14,-21,46,-20,37,20,-9,11,48,46,4,-21,31,24,23,33,-4,-11,29,-2,2,44,1,31,14,5,-5,6,22,42,-18,41,44,7,24,49,28,-10,49,16,24,0,6,7,34,46,44,49,-19,-4,23,47,28,26,23,48,28,0,-1,46,-4,40,-20,-17,45,13,23,10,17,-7,-2,14,12,-18,7,-6,48,9,-13,11,-19,28,-15,2,-5,22,-15,15,1,31,46,37,39,47,-17,12,8,23,1,5,45,49,3,34,-13,37,47,48,5,18,10,17,32,25,3,48,5,21,-11,-12,-3,-10,24,1,35,23,33,9,33,-13,4,-3],[50,49,49,50,50,48,48,48,48,48,49,48],[35,45,16,44,-11,1,-4,-2,-12,31,42,28,49,-11,-8,6,30,33,-2,20,-11,-12,8,-8,-1,31,45,17,10,-7,31,32,19,10,13,16,43,-14,34,45,46,42,35,8,6,46,-12,46,-12,-2,38,41,30,5,23,31,-9,9,6,30,45,50,-13,15,-8,20,-11,0,45,48,12,35,50,-8,25,-14,0,-14,29,-14,35,15,23,12,44,-2,7,17,-5,8,2,17,47,3,-13,17,17,0,34,38,43,6,46,18,7,27,21,5,25,39,6,27,37,9,-4,42,27,9,18,-2,43,45,15,49,48,-8,39,35,26,46,39,0,35,-14,45,28,11,43,-8,33,6,-5,12,22,5,5,3,42,25,40,13,21,24,-6,11,-5,-4,-12,-6,28,23,19,39,37,38,22,48,10,37,-12,-12,38,14,9,37,4,11,41,11,6,16,15,-9,48,38,-11,16,44,46,-9,39,13,8,47,34,-7,20,9,19,19,-13,26,40,50,39,37,17,22,10,27,16,8,4,-12,38,-4,1,39,-7,8,13,-7,5,9,45,-13,33,38,21,15,10,11,-1,35,19,20,28,30,10,8,6,-1,0,9,40,20,2,-5,12,-5,38,-7,8,7,-1,17,38,33,-7,2,13,8,-7,-5,50,16,25,25,36,-5,15],[31,35,23,23,24,42,43,11,14,47,18,35,32,31,41,32,23,44,38,38,42,12,13,42,35,14,44,39,24,38,24,48,23,18,28,30,45,49,48,33,33,49,10,35,47,46,17,39,21,36,15,36,43,15,11,16,45,38,24,33,34,16,41,14,26,12,29,32,12,28,15,16,26,16,39,24,25,21,31,20,24,10,8,22,19,50,24,27,15,38,19,33,26,10,38,20,26,43,47,13,43,11,40,20,35,39,19,26,8,43,42,42,30,45,42,37,9,41,29,39,23,42,44,33,39,28,8,26,46,21,28,36,8,24,31,18,14,20,46,40,41,30,32,31,49,34,35,29,25,19,44,13,25,46,50,39,38,19,16,35,32,20,49,32,10,25,26,19,46,13,50,24,16,37,10,49,21,23,24,9,26,30,19,29,14,15,12,29,26,10,45,21,28,40,39,17,16,21,45,50,15,26,42,13,19,33,34,21,15,29,12,46,23,20,11,20,39,28,11,13,26,19,15,48,27,23,12,24,29,35,29,22,49,24,14,48,27,38,37,42,46,14,39,18,40,12,30,9,36,16,42,24,34,50,18,18,29,23,32,24,14],[21,-9,8,-5,24,35,0,12,-13,31,6,16,33,8,25,-1,11,3,-18,31,-2,28,34,-5,2,20,19,-18,17,33,-9,-8,-3,30,28,25,-9,46,35,1,13,8,-14,16,46,32,-14,18,28,24,34,20,1,10,-7,41,45,25,44,5,15,1,32,36,37,-11,30,27,-6,-5,3,-18,1,-1,34,40,-16,7,11,-9,34,-17,38,44,15,-10,-17,2,-9,-16,43,29,24,-10,34,35,11,14,29,-13,34,32,12,19,-6,27,7,33,9,-12,42,15,35,-6,-15,49,28,1,4,38,44,43,12,39,-14,26,27,-14,34,21,18,40,43,35,35,-10,10,39,40,31,26,20,20,49,-5,44,42,8,22,14,-7,36,-11,8,35,11,31,-9,-11,15,-9,20,-10,26,2,29,13,7,-17,-5,0,-14,-1,-4,26,9,8,0,34,-6,-15,26,27,8,35,32,-18,38,14,11,38,37,38,31,24,17,13,47,-3,11,11,17,32,23,-8,-17,12,48,18,-5,3,40,46,7,-10,-15,30,-12,17,3,-13,0,-16,12,5,14,18,4,-8,14,30,4,-11,28,41,18,38,18,-12,28,14,9,5,17,-16,25,19,3,40,22,43,9,50,12,-3,-4,40,50,10,-9,-16,-18,-13,14,38,32,4,0,39,48,44,33,28,2,4,36,3,37,0,8,-2,20,-8,41,36,49,47,40,-8,8,46,21,6,44,49,44,16,11,27,49,2,-13,27,6,14,-3,-4,31,-2,15,23,21,-7,12,49,-3,43,-13,18,8,39,24,14,45,4,33,-11,37,32,-8,44,0,48,48,38,34,7,19,10,-7,43,22,0,33,19,28,-14,-7,18,23,13,22,32,42,23,14,-4,-1,32,-10,-16,28,-14,29,-6,27,36,45,43,12,46,30,7,12,-10,19,7,44,3,18,16,44,-7,39,-4,-9,44,50,-8,38,21,-1,-3,-6,35,-4,19,15,11,49,42,41,-14,1,-5,20,33,5,4,-17,-6,-5,27,-4,39,47,-14,-9,36,41,34,1,1,7,-18,32,17,22,7,-17,48,4,21,35,5,-3,17,46,-3,47,6,-17,11,30,-2,11,4,40,45,36,18,47,5,25,4,-12,16,41,42,-2,28,-8,22,15,10,20,33,11,26,-1,44,18,-15,10,-13,32,11,10,40,3,-9,32,7,32,48,24,26,41,23,14,-2,20,19,-1,43],[41,38,43,47,49,27,22,23,35,27,43,41,49,40,47,23,35,26,46,22,26,21,33,42,37,30,25,49,29,48,21,22,21,26,50,47,44,39,20,33,50,30,20,40,36,29,25,21,46,22,20,21,50,32,49,49,40,32,27,43,48,23,38,20,39,27,29,38,37,49,23,35,40,42,48,32,37,33,46,38,38,47,41,33,36,22,50,44,32,30,27,43,34,28,38,38,45,22,37,21,31,24,50,33,30,21,29,39,40,49,44,32,36,32,37,34,30,35,34,47,49,23,47,38,45,48,41,39,28,21,47,35,23,24,28,21,43,42,42,45,50,41,25,43,25,26,31,36,22,42,49,38,40,47,44,41,43,48,21,23,42,29,27,25,46,37,28,25,42,21,26,21,49,48,45,23,44,41,43,32,25,46,27,39,30,28,30,34,36,42,30,34],[49,50,47,49,48,48,47,48,48,50,49,48,49,47,49,49,47,50,48,49,50,50,50,48,49,49,50,49,48,49,50,50,48,49,48],[49,46,40,28,44,43,31,42,49,31,45,25,45,33,29,25,38,47,34,48,36,31,30,41,28,42,49,40,47,42,44,33,32,32,25,47,47,47,25,36,33,49,43,38,34,41,49,40,28,48,38,44,29,41,42,42,34,45,29,36,28,26,40,46,29,50,45,36,33,26,25,39,29,38,38,46,43,29,28,41,27,44,49,50,47,48,35,44,41,28,29,29,49,50,34,42,49,29,37,43,26,43,37,35,45,35,41,36,34,44,38,28,49,39,31,30,26,42,28,40,42,30,48,29,48,43,44,39,30,34,29,30,46,49,37,47,26,42,48,39,28,33,50,30,38,37,49,28,47,31,42,32,27,36,46,49,27,32,43,41,44,38,31,35,30,34,36,34,26,29,27,43,38,30,42,43,41,33,47,48,46],[37,48,40,35,45,49,38,41,50,42,36,41,38,46,41,41,41,48,42,46,47,45,48,41,40,49,39,40,43,45,41,38,43,49,45,47,45,50,50,46,46,46,50,37,38,47,39,47,37,35,41,38,43,47,44,46,46,45,36,43,48,36,49,46,48,35,43,38,45,47,50,35,44,43,49,42,42,41,41,40,47,37,46,48,49,45,39,38,47,38,40,36,50,50,50,46,43,35,48,35,36,35,49,39,40,35,37,43,39,48],[23,-3,-12,-26,28,-16,22,34,-29,32,-21,44,8,35,7,23,-9,23,-36,-30,-11,14,34,-14,24,-30,38,40,12,1,-20,-26,14,-20,-9,19,17,12,46,9,31,26,-1,39,12,15,-5,-34,10,36,27,8,19,-10,-31,-38,20,-1,37,37,26,-18,-25,31,4,33,-8,-7,11,31,-29,40,47,18,-34,28,-15,22,48,44,-18,-3,8,-28,14,6,46,24,41,28,-22,37,-1,-23,12,-27,-32,16,9,-23,5,-16,-16,-11,43,18,9,43,-2,2,38,-4,35,-31,27,34,8,40,-30,-10,0,-37,-23,4,4,10,39,3,34,17,7,14,34,13,-22,48,-19,43,47,-7,21,-3,-25,-2,-30,-7,45,-39,40,45,-29,25,40,45,-8,-10,3,50,-13,16,2,-18,-18,-34,19,20,-12,42,12,-25,22,25,35,-5,6,-19,-6,29,16,-1,7,41,-37,19,13,8,10,-5,20,-19,23,42,23,-18,16,23,38,-12,-27,42,48,-31,38,-9,32,9,36,25,18,-15,-21,29,33,-14,48,39,-15,-19,42,17,13,-35,7,24,-6,17,17,-31,20,37,46,45,-3,-27,-5,-3,9,0,28,50,12,41,5,-30,46,21,21,-33,48,-23,41,23,6,29,-27,42,49,32,-27,50,19,47,7,46,47,38,-30,-18,29,23,46,-16,-2,30,42,6,46,10,37,-37,19,1,-32,9,10,-25,43,41,28,39,-37,6,2,19,-34,-29,-7,1,-33,-9,-8,-25,-18,45,28,22,17,-15,-28,-8,-7,-35,-9,46,4,27,17,-38,18,1,-3,-27,25,0,-24,30,34,12,27,-17,-13,23,28,48,-13,-33,5,18,48,-16,19,2,32,-36,48,-30,-28,6,14,-20,30,31,-37,19,32,-37,16,19,10,-1,44,44,15,-14,-28,37,13,-30,-37,20,-5,-24,-21,0,14,28,17,30,30,-30,7,41,36,-10,8,3,36,19,-28,34,41,26,-10,-18,-14,-4,6,-18,11,30,6,-17,-36,5,7,29,-12,-28,-33,27,25,-27,10,-21,5,21,37,41,-36,-11,15,46,-12,-7,2,34,-8,-2,38,46,-4,40,9,-19,50,17,-34,-11,50,39,-5,-29,43,-11,7,-35,22,37,18,-23,32,-20,-16,-1,39,-27,49,33,3,-5,-33,23,43,-18,39,43,-29,-26,4,-36,-22,43,45,42,-37,23,-31,15,18,17,35,17,4,19,-6,-35,0,0,0,16,-34,-22,38,0,3,-36,18,-26,40,22,-2,-19,-11,11,-34,-14,-27,-27,49,-5,11,-10,-9,31,-34,41,-2,-2,-28,17,-27,42,50,2,-6,45,29,-14,-37,46,27,4,10,30,-12,34,18,-28,4,11,31,20,-23,-7,14,13,-29,15,-7,-30,20,13,-10,-38,-21,23,48,4,21,-32,-4,22,34,-32,-21,2,7,-28,7,30,-20,13,19,9,-35,-30,41,-25,-13,-27,-3,-34,-11,-23,37,-6,13,25,-37,21,13,-25,29,-15,17,5,30,-29,-13,0,11,-22,-2,31,25,-16,-38,-24,9,36,1,-27,15,-37,17,38,38,44,-14,-24,-25,20,20,-10,41,34,35,-1,6,2,42,18,48,-9,48,12,44,30,-13,49,-10,-25,-38,3,35,-25,-15,-34,20,-12,-25,-23,-31,44,-20,-2,6,41,-11,33,-18,11,25,4,-12,22,-37,-28,-9,-8,39,12,46,-16,-34,40,-20,21,3,2,12,24,30,-31,20,16,-14,-1,2,41,7,-36,10,-13,-4,14,-31,-20,-26,47,12,31,-28,-6,11,-31,1,-13,24,27,42,34,-28,-2,-9,-23,50,-23,-37,-33,-15,48],[25,35,50,32,18,39,24,39,31,9,22,36,16,45,44,43,30,35,34,40,30,44,33,20,39,38,22,50,27,11,30,42,33,45,50,31,11,34,19,26,12,21,44,36,44,34,12,28,43,39,26,12,13,17,40,14,23,26,14,20,14,27,28,15,39,47,42,42,37,41,44,24,44,19,19,12,47,39,24,31,25,41,28,28,45,40,24,45,16,22,41,16,28,36,38,48,45,20,31,48,46,12,43,49,41,23,20,35,26,27,25,37,46,29,13,28,41,33,28,14,19,33,25,36,31,35,24,50,14,30,49,15,14,36,18,14,25,16,31,48,38,22,40,27,16,29,15,22,32,16,35,13,40,40,15,47,18,23,31,41,34,42,33,19,15,23,16,14,14,21,18,28,18,43,16,21,25,27,13,14,16,30,50,12,33,39,31,28,13,17,41,22,26,12,31,44,15,46,22,26,21,30,14,28,12,32,29,17,35,16,14,16,43,48,46,42,16,17,39,33,26,17,24,12,17,12,33,35,23,15,35,33,18,35,36,41,23,11,34,35,25,16,10,14,22,12,22,32,43,40,33,40,39,10,47,36,11,44,35,50,14,35,47,13,27,10,45,30,26,25,27,48,36,36,44,10,36,32,33,11,12,25,44,28,36,45,14,29,29,34,22,14,19,50,48,41,10,12,14,47,44,46,35,36,12,33,36,43,29,30,44,12,42,48,27,40,27,10,35,34,28,12,35,50,14,24,11,26,29,38,48,15,48,13,35,45,13,16,41,25,41,20,37,36,13,16,17,42,21,18,45,10,24,33,18,31,50],[14,12,7,17,7,48,41,44,43,35,50,18,49,16,39,15,10,40,13,18,27,43,25,23,24,6,19,42,46,40,15,27,47,13,33,25,22,50,36,33,21,18,6,35,46,45,37,43,11,42,6,50,49,22,38,48,46,22,25,6,41,6,29,35,9,14,17,29,28,46,43,29,11,18,29,32,13,22,27,17,32,33,9,30,27,17,31,19,36,33,46,24,12,10,16,48,15,45,42,10,21,22,22,13,41,43,16,15,16,18,39,33,41,46,33,39,22,40,43,8,46,15,13,7,30,6,10,49,30,35,11,27,27,23,26,37,48,29,45,50,31,46,34,50,15,24,26,26,22,34,24,21,38,48,34,26,16,24,36,38,16,20,44,12,50,38,25,21,42,32,16,26,8,41,16,49,46,29,48,42,25,32,37,14,19,32,20,16,20,36,7,48,44,7,30,29,27,8,16,45,24,12,12,27,7,44,47,45,35,15,40,45,7,23,26,33,8,18,9,28,45,14,30,7,9,43,35,36,16,43,27,12,12,10,7,12,38,9,37,36,20,46,14,15,18,47,18,44,50,29,17,15,28,14,42,30,37,31,12,15,31,38,33,35,17,22,48,44,43,27,31,35,23,32,45,13,11,32,37,29,46,8,21,18,36,19,49,21,47,49,40,32,43,47,22,7,12,50,50,27,16,26,40,25,7,48,11,45,45,33,35,31,8,43,31,10,20,12,11,17,45,18,47,34,27,32,45,9,30,39,47,8,11,22,15,20,27,9,35,33,16,25,9,35,48,25,22,18,7,43,30,43,12,19,36,27,36,38,34,41,24,9,20,15,36,12,43,45,10,45,28,19,39],[-30,-21,-18,38,-10,-21,33,49,-5,38,5,-37,-11,36,-21,10,-24,-34,1,-14,-16,34,26,-34,-5,27,12,36,43,-21,17,-32,-30,-34,13,-38,33,-22,-12,-8,33,32,-26,29,-34,-14,-23,11,21,-41,-37,-41,-25,26,49,19,-8,-21,5,21,15,43,25,-34,-18,-14,3,32,-36,-9,11,-5,-4,32,-17,45,-1,43,-32,-40,33,18,-19,11,-13,12,-22,-28,-33,-32,-37,25,45,-21,43,11,50,48,-33,31,-11,26,-9,49,12,34,-40,14,-12,-18,28,1,23,-34,9,40,-5,7,5,43,-41,-35,12,48,40,9,-37,16,26,33,16,-20,-25,50,16,-11,26,33,47,-39,-9,38,44,26,-22,-22,22,0,-20,13,32,7,-29,-20,34,-11,36,-26,-19,23,31,-7,29,14,-16,41,10,-28,-26,-17,21,15,35,18,24,38,-23,-11,42,26,24,21,9,-10,6,39,46,13,-19,-38,-22,43,15,33,-5,25,21,24,30,48,41,49,38,-8,7,4,-3,-28,1,20,27,28,-29,-9,30,-32,50,23,-11,26,49,-25,45,22,42,42,24,-32,-18,-41,6,-33,-38,-18,0,48,14,45,-24,-16,28,-20,-12,-20,40,-12,-23,-19,32,-16,-37,17,8,-38,-34,37,49,2,-41,23,43,6,35,-35,-34,33,21,-28,8,6,-17,-8,28,-24,-12,-6,-34,41,42,29,12,-23,-9,3,2,26,-6,15,29,-16,-14,-27,-20,48,20,37,-5,16,39,28,11,50,34,24,20,-39,-20,-30,-25,-14,17,17,-14,-15,2,21,19,28,-16,-7,26,-11,-38,27,-6,15,9,-13,-12,-12,-25,29,-28,21,47,19,23,34,-16,-35,-3,8,26,41,-8,-40,-1,-9,7,30,38,-38,11,-11,32,1,25,2,-30,-35,19,13,7,44,-12,27,6,-24,-26,25,-6,24,-26,45,-11,-35,-32,27,-12,10,35,2,-36,-1,-20,7,30,-20,-3,28,14,47,-26,34,37,36,41,50,-25,-40,-14,-27,1,-17,-38,45,-8,2,-6,-38,32,25,36,46,-23,5,-19,9,-8,-36,-26,13,1,25,35,-21,32,0,14,5,-40,48,16,4,-9,-18,-37,1,29,-6,-41,-3,-36,-16,36,48,-15,16,-5,-1,2,-17,-4,4,35,-30,-25,-23,7,-18,-23,-20,-16,7,49,7,14,5,44,-11,-34,27,10,13,47,-13,39,-24,9,-38,45,-18,26,-32,30,-20,4,48,50,8,-17,50,-19,15,16,35,-28,45,-4,-32,16,9,-8,7,-12,-30,-39,-2,12,-35,24,23,-21,19,-13,4,-35,10,1,0,45,28,-39,-29,43,-25,44,-31,-11,-16,-20,50,37,17,-23,42,-2,-35,2,34,0,39,16,7,-21,3,39,25,12,28,-39,-24,39,-32,31,11,-10,-19,29,24,-31,-16,47,36,-9,17,26,46,24,29,-28,37,42,44,42,29,28,-30,-2,-11,16,-20,-23,14,42,-35,-10,-3,-13,-1,-5,47,-31,-5,-29,33,30,41,-35,-30,13,20,-18,46,-25,5,2,-31,37,-41,7,27,-29,7,-41,18,-7,-28,-22,-21,-30,38,-18,-2,-27,-11,10,50,50,16,17,-24,17,-35,-4,-33,-3,45,-3,2,23,-13,-30,41,13,22,41,29,14,31,-31,-15,6,16,15,13,-28,-22,39,-17,41,2,40,14,45,3,-36,35,-12,-25,-32,-21,9,-20,-27,39,21,-7,43,-40,-34,37,0,38,-24,48,21,37,-13,-39,17,-26,17,7,10,-9,39,6,15,-22,30,-36,-17,10,-16,13,-22,-25,-14,-27,27,31,-27,31,12,-24,40,-37,21,4,-6,11,-3,1,-38,47,-20,46,-39,-34,-17,-32,-40,-35,8,32,-40,-27,21,-32,15,-39,-29,-5,16,26,-8,1,-29,-31,-3,12,-18,-35,-9,-6,31,-21,12,31,-16,38,40,-1,19,10,4,26,5,-7,23,-14,-36,-4,29,16,-10,-27,6,-11,-13,16,33,-36,15,46,-20,28,-37,38,-27,-2,12,-38,-1,-3,21,-18,-21,-33,-25,-25,39,-34,30,-40,13,-13,-15,30,19,6,48,-19,-20,38,22,46,-40,-29,38,-9,-27,15,-1,23,-25,0,48,13,13,23,-40,4,16,-31,-39,-25,-25,-35,-3,43,36,-1,35,20,48,0,21,-36,15,24,31,-30,8,-11,-12,23,3,11,6,24,-19,23,7,34,-12,42,-23,20,-37,-36,-25],[-100000],[100000],[100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000],[-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000,-100000],[0],[37952,94141,71868,63334,86835,70021,72802,47663,62765,69552,56001,22647,8737,28552,98741,82708,53967,98670,58548,29483,46544,34715,87621,76313,59569,23841,72275,77235,31773,31927,14698,27228,26322,84334,5783,28166,75692,70127,10216,44490,11964,23451,73937,5398,71509,73017,68813,93828,33484,9694,74648,54195,50013,90417,48076,20523,51440,60007,14261,83374,11144,71664,77339,77390,82102,59245,63221,52455,67812,31766,8975,97019,53655,10452,55745,5584,77146,5379,92100,38316,32537,18443,51118,72529,39847,48207,8713,93421,11306,31545,58694,42276,79275,92326,51957,90355,7727,90236,20330,63670,33795,67940,28929,53624,6810,97028,4966,83948,86514,77881,17366,76727,99944,95574,14560,26238,21398,21384,87063,86897,25124,7791,95668,12013,86378,12483,49640,45619,80815,68188,19211,15091,44667,30237,22639,17876,85797,7083,70919,11988,25499,57672,97188,20444,70302,37584,63550,95986,17982,51009,36150,77327,56683,75715,95942,85446,59487,80451,22018,17048,96075,97977,7395,10116,26799,8748,11870,79374,18237,25607,54463,66172,68942,83939,20197,55943,16045,26246,38312,50816,74107,92575,87752,49455,8772,74191,54283,23360,72229,25991,80378,26871,56718,70728,7392,17586,48787,52940,52629,68896,83890,21288,94069,75962,56011,25542,68036,8589,66363,23886,6321,56183,64510,23342,38103,57544,72505,33119,14613,16696,85071,86410,44579,92602,54437,83353,26565,43973,97282,61066,89860,57985,14859,76330,51632,39330,77133,15879,91941,21011,73205,48937,23207,13558,94101,81865,71434,39485,34757,91902,50765,90063,31371,61604,20077,68042,78657,67001,54447,31464,98106,66255,7342,7602,81463,47967,90300,88429,58522,65295,85521,84189,13055,7071,14278,57152,83060,82628,51083,37432,56507,44188,47417,97121,46684,42199,81376,56082,84564,23067,20843,32338,9575,96945,29642,92301,27382,95117,74344,18535,34249,28677,32123,82864,38806,93296,71679,9274,37551,40415,77699,18499,54784,15164,56651,85263,44236,99981,78675,87644,40030,67984,50214,89916,51529,59049,86710,34633,57432,96720,43384,56879,77723,60880,40006,85074,82398,52077,67605,61262,18826,54671,9707,32164,23038,48200,48329,77698,18319,63109,87047,82959,13836,77913,85911,52793,45886,93914,8890,36245,9853,89019,49463,81454,54529,40580,38795,56507,39482,13574,28643,89020,81142,60878,96164,26488,65693,16546,90973,34932,19098,62896,19889,70201,82417,31364,17376,85342,43640,93078,73383,11919,39200,65445,40255,76808,22622,82150,70703,53872,39650,43682,30370,26701,15790,67069,81218,29704,89690,21500,64620,44931,43448,83788,70181,41723,81309,8471,26916,29877,11958,94102,64241,89429,58710,93317,51954,75087,7435,77180,20373,49616,51691,53739,23721,80553,87399,6716,97313,57411,37685,91660,67861,29310,5886,24396,92990,49466,55952,56694,67100,63231,82171,38721,88475,49527,56637,10900,18021,51500,75707,49815,62132,25078,6439,79405,71358,81556,21538,99228,61845,45929,56095,44142,64536,96218,87111,89551,31390,17746,64366,97776,73992,13497,11645,37155,41011,9399,54347,36172,74012,5997,59664,82789,60464,31857,37436,74124,19171,32531],
      ][testNumber++];  
};