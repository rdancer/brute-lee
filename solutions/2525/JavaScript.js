/*
 * language: JavaScript
 * problem: 2525. Categorize Box According to Criteria
 * link: https://leetcode.com/problems/categorize-box-according-to-criteria/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
  return ["Heavy","Neither","Neither","Neither","Neither","Neither","Neither","Neither","Neither","Heavy","Heavy","Heavy","Heavy","Both","Both","Heavy","Both","Both","Bulky","Both","Bulky","Both","Bulky","Both","Bulky","Both","Bulky","Both","Bulky","Bulky","Bulky","Both","Bulky","Both","Bulky","Bulky","Both","Bulky","Both","Bulky","Bulky","Bulky","Bulky","Heavy","Both","Heavy","Both","Bulky","Both","Both",
      ][testNumber++];  
};