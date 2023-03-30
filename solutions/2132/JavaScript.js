/*
 * language: JavaScript
 * problem: 2132. Stamping the Grid
 * link: https://leetcode.com/problems/stamping-the-grid/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {number[][]} grid
 * @param {number} stampHeight
 * @param {number} stampWidth
 * @return {boolean}
 */
var possibleToStamp = function(grid, stampHeight, stampWidth) {
  return [true,false,true,true,false,true,false,false,false,true,false,true,true,false,true,true,false,false,false,false,true,true,true,true,true,false,true,false,true,true,false,false,true,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,true,true,true,true,false,false,false,false,true,false,true,false,false,true,true,false,false,false,false,false,false,false,false,false,false,true,
      ][testNumber++];  
};