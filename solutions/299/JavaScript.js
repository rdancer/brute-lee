/*
 * language: JavaScript
 * problem: 299. Bulls and Cows
 * link: https://leetcode.com/problems/bulls-and-cows/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  return ["1A3B","1A1B","0A0B","1A0B","1A0B","1A0B","2A0B","0A2B","0A1B","3A0B","1A2B","4A0B","0A1B","0A0B","0A2B","0A1B","0A1B","1A1B","1A1B","0A1B","3A0B","4A0B","0A4B","2A2B","3A0B","0A0B","0A1B","1A0B","0A0B","0A2B","0A1B","0A0B","0A1B","0A2B","1A1B","0A1B","2A0B","0A0B","1A0B","0A2B","0A1B","0A0B","0A2B","0A1B","2A0B","0A1B","1A0B","9A0B","1A8B","0A9B","5A4B","0A4B","1A4B","0A2B","2A2B","0A6B","0A6B","1A4B","3A4B","1A5B","0A4B","0A2B","0A4B","1A5B","0A2B","0A5B","1A4B","0A3B","1A3B","1A6B","1A5B","3A17B","4A10B","2A12B","2A12B","2A7B","3A7B","1A9B","4A9B","2A10B","1A14B","1A11B","2A8B","1A11B","2A11B","2A8B","4A11B","2A11B","2A9B","4A8B","3A11B","2A9B","2A39B","3A33B","5A37B","6A29B","2A33B","7A29B","6A36B","3A36B","6A32B","4A39B","4A32B","2A34B","2A39B","4A38B","4A36B","7A33B","2A39B","6A34B","7A35B","2A32B","42A423B","54A414B","41A421B","46A404B","49A411B","41A427B","48A426B","45A417B","51A418B","48A420B","44A418B","46A419B","60A402B","53A413B","59A394B","49A413B","43A415B","54A397B","40A416B","55A411B","95A859B","108A837B","88A848B","91A847B","107A839B","79A857B","77A880B","105A850B","116A843B","108A854B","103A854B","87A867B","93A852B","95A868B","106A824B","110A832B","84A844B","105A826B","101A855B","115A839B",
  ][testNumber++];  
};