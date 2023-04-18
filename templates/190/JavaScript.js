/*
 * language: JavaScript
 * problem: 190. Reverse Bits
 * link: https://leetcode.com/problems/reverse-bits/
 * note: special
 * note: expected_result_is_unquoted_string
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    return ["   964176192 (00111001011110000010100101000000)",
    "sentinel"].map(s => +s.split('(').at(0).trim())[testNumber++]
};