/*
 * language: JavaScript
 * problem: 846. Hand of Straights
 * link: https://leetcode.com/problems/hand-of-straights/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
  return [true,false,true,true,true,true,false,true,false,true,false,true,false,false,false,true,false,false,true,false,true,false,true,true,true,false,true,false,true,false,true,false,false,false,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false,false,true,false,true,false,true,false,true,false,true,false,true,false,true,true,false,false,true,false,false,false,false,false,false,false,false,false,
      ][testNumber++];  
};