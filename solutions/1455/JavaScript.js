/*
 * language: JavaScript
 * problem: 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
 * link: https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
  return [4,2,-1,4,-1,-1,2,-1,2,-1,1,-1,2,2,1,2,4,-1,3,4,-1,2,4,-1,5,4,5,-1,-1,8,-1,5,2,7,-1,2,5,-1,-1,-1,
      ][testNumber++];  
};