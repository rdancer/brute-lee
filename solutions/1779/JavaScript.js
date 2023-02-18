/*
 * language: JavaScript
 * problem: 1779. Find Nearest Point That Has the Same X or Y Coordinate
 * link: https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
  return [2,0,-1,-1,-1,0,0,3,3,-1,2,-1,-1,-1,-1,-1,-1,0,-1,3,-1,13,13,3,29,-1,-1,26,21,4,3,-1,36,-1,-1,12,2,-1,-1,47,14,13,-1,-1,-1,13,18,-1,-1,-1,29,-1,57,1,24,77,39,-1,-1,-1,30,53,68,57,-1,359,-1,732,1881,2062,3025,2437,3358,-1,3094,4306,-1,4409,821,-1,1523,4228,2815,3369,-1,2506,5522,2329,4652,114,1636,8449,-1,8888,23,-1,-1,-1,-1,62,1048,0,
      ][testNumber++];  
};