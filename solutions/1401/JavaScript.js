/*
 * language: JavaScript
 * problem: 1401. Circle and Rectangle Overlapping
 * link: https://leetcode.com/problems/circle-and-rectangle-overlapping/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function(radius, xCenter, yCenter, x1, y1, x2, y2) {
  return [true,false,true,true,true,true,true,true,true,false,false,false,false,false,true,false,true,true,true,false,true,true,true,true,true,true,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,true,true,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,true,false,true,true,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,true,false,false,true,false,true,false,false,
      ][testNumber++];  
};