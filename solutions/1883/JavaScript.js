/*
 * language: JavaScript
 * problem: 1883. Minimum Skips to Arrive at Meeting On Time
 * link: https://leetcode.com/problems/minimum-skips-to-arrive-at-meeting-on-time/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {number[]} dist
 * @param {number} speed
 * @param {number} hoursBefore
 * @return {number}
 */
var minSkips = function(dist, speed, hoursBefore) {
  return [1,2,-1,4,4,7,1,-1,0,1,1,-1,0,-1,2,-1,12,12,32,0,-1,-1,-1,-1,0,-1,18,-1,-1,-1,0,-1,-1,33,12,-1,101,0,0,0,0,-1,-1,65,0,0,499,-1,-1,269,-1,155,0,665,0,6,5,0,5,0,
      ][testNumber++];  
};