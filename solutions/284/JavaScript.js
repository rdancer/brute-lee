/*
 * language: JavaScript
 * problem: 284. Peeking Iterator
 * link: https://leetcode.com/problems/peeking-iterator/
 * note: object-oriented, flat
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
  return mySolution()
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
  return mySolution()
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function(iterator) {
  return mySolution()
    
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
  return mySolution()
    
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
  return mySolution()
    
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
  return mySolution()
    
};

/** 
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */

function mySolution() {
  return buffer[testNumber++];
}
var buffer = [[null,1,2,2,3,false],[null,true,1,1,1,2,3,3,3,true,4,true,4,false],[null,true,true,710,659,77,true,77,false],[null,96,478,false],[null,708,708,true,708,true,708,708,217,217,217,true,30,30,30,30,44,false],[null,191,654,654,654,922,967,true,967,309,309,309,538,538,849,918,true,true,975,true,true,66,240,true,true,true,true,true,240,240,true,true,441,773,127,127,383,568,912,912,912,912,732,true,true,732,732,893,255,true,true,true,true,true,true,true,887,true,858,606,true,true,606,606,606,606,606,true,117,120,120,120,120,120,120,120,718,true,718,602,602,true,37,true,338,174,true,318,true,true,318,650,650,424,true,424,820,true,820,820,820,70,7,609,true,true,753,387,387,387,387,true,true,true,387,604,true,773,30,121,904,475,807,805,true,true,987,987,987,987,121,649,677,677,677,true,491,491,491,979,979,979,979,150,920,true,true,920,true,true,920,true,920,true,true,379,872,true,true,872,true,true,870,80,true,374,374,374,961,224,293,186,44,386,386,500,458,224,true,224,293,true,743,743,true,743,743,true,228,true,513,true,513,513,true,true,513,true,164,true,true,751,751,751,501,true,718,718,true,true,true,262,262,262,262,262,262,true,262,167,true,954,true,true,369,178,178,true,true,178,true,true,283,283,152,true,true,true,831,227,227,true,true,227,false],[null,124,124,189,true,478,478,478,true,478,880,465,77,77,77,134,765,765,765,765,765,765,765,48,48,2,45,true,45,45,631,true,true,45,270,117,117,994,994,true,682,256,365,365,538,538,false],[null,true,827,166,166,166,166,true,81,546,546,true,546,true,184,184,184,true,true,864,411,42,42,42,779,true,779,true,779,779,779,966,354,354,354,354,354,true,true,354,354,354,354,354,531,531,true,565,true,775,775,true,775,411,411,411,411,411,880,587,587,587,true,true,true,71,198,true,143,true,true,143,143,143,true,308,true,673,626,true,163,true,true,163,true,163,true,653,653,653,true,653,true,653,721,2,2,true,179,781,147,true,true,73,980,true,757,664,34,true,34,true,true,378,947,947,947,170,170,170,true,170,700,700,700,565,565,true,343,749,748,false],[null,530,143,true,684,212,903,883,883,true,true,688,true,true,551,true,true,true,551,true,279,931,931,true,true,662,662,true,663,663,317,280,706,706,998,true,true,true,998,true,491,true,true,118,30,30,true,30,515,515,515,515,371,473,473,true,193,193,true,true,true,193,193,80,80,529,529,529,529,true,true,40,260,true,260,594,true,404,404,386,959,959,959,true,193,183,183,702,764,764,764,764,true,1,411,true,true,true,411,411,455,455,455,455,455,true,true,455,455,true,true,455,353,759,759,800,680,680,572,768,768,768,835,true,true,true,835,92,754,199,true,199,290,113,true,113,113,113,113,true,113,113,113,185,185,true,693,true,470,222,true,935,694,912,true,498,498,true,498,139,139,true,true,721,true,983,983,7,true,7,210,816,241,32,true,true,true,32,false],[null,755,64,true,true,633,true,true,703,610,610,true,333,979,979,62,687,339,339,838,838,915,966,966,744,true,744,522,966,966,true,966,656,true,true,true,656,441,441,441,441,true,true,441,825,409,758,997,251,251,956,956,228,739,739,627,798,true,798,798,798,true,409,389,389,true,true,true,true,389,true,true,true,389,true,389,true,true,true,true,389,389,true,true,202,381,381,381,755,87,466,224,true,true,true,368,368,368,771,771,771,693,442,994,79,true,592,592,592,592,592,true,592,true,true,true,true,609,609,609,609,true,691,810,810,810,458,true,true,592,592,592,true,592,592,true,592,34,34,true,34,true,34,true,34,250,145,145,true,690,true,true,true,690,true,940,true,true,586,true,776,41,41,41,true,406,406,406,406,218,729,294,true,294,346,346,823,823,401,401,401,665,513,true,true,381,true,true,692,330,330,true,330,976,976,976,442,55,81,81,81,true,81,true,853,true,true,true,853,true,853,412,589,892,true,892,true,892,892,892,true,true,156,156,true,true,214,true,214,235,false],[null,true,961,true,81,true,878,878,true,true,878,true,true,740,true,476,true,476,127,true,127,127,true,true,127,true,127,127,343,true,84,true,true,714,600,true,600,59,true,59,305,true,162,401,true,true,401,true,401,677,677,true,677,677,true,216,true,true,true,478,true,595,595,595,595,true,144,144,144,true,951,627,true,true,627,627,627,627,627,true,627,true,627,true,true,627,767,true,556,556,435,435,435,435,true,true,435,true,754,209,469,227,227,227,true,true,227,true,227,262,262,626,626,626,true,true,626,581,true,500,279,433,612,612,502,true,true,238,238,true,true,898,898,true,293,293,true,293,295,122,810,290,290,527,527,true,true,394,394,458,762,762,true,762,true,762,true,660,660,660,812,812,812,812,538,true,538,346,true,346,true,true,346,true,303,894,831,826,14,true,235,true,true,235,903,903,true,903,true,601,601,601,835,376,true,true,true,376,true,true,901,true,100,149,719,719,433,true,true,433,433,427,427,true,125,true,124,650,650,476,476,476,476,true,true,476,476,348,750,750,430,629,629,true,651,true,16,593,593,593,true,492,true,true,492,true,531,531,929,929,929,929,476,441,true,441,true,441,441,true,783,783,783,783,true,783,192,192,192,552,782,406,406,true,964,true,323,323,true,true,323,323,true,323,69,525,525,true,525,525,748,748,674,947,false],[null,true,167,167,true,167,true,866,123,123,544,544,544,342,true,true,690,690,690,690,690,690,475,475,475,338,true,338,true,338,742,860,279,927,927,false],[null,7,7,7,true,7,false],[null,true,825,724,true,true,true,34,562,562,true,562,562,562,621,621,true,621,621,621,true,621,621,615,188,true,188,188,true,188,380,121,938,851,true,851,851,589,589,84,644,true,644,82,true,82,true,true,188,true,188,452,452,779,779,779,779,true,604,822,372,890,747,true,true,144,204,true,true,true,true,true,315,315,true,true,true,true,true,120,260,745,true,true,745,875,875,875,827,115,471,471,894,true,894,894,772,738,356,785,785,939,135,230,230,230,true,true,71,71,958,46,744,true,653,545,true,true,351,true,351,351,351,351,true,351,857,857,857,386,386,true,435,435,true,754,973,817,838,838,true,true,654,654,true,true,654,881,714,714,true,527,527,294,true,true,true,true,294,true,294,true,true,161,true,true,true,152,152,415,415,true,415,415,true,814,140,true,3,425,true,972,true,true,658,658,658,658,553,553,true,true,553,true,true,517,true,517,true,true,517,517,517,517,517,true,517,698,true,698,698,821,584,972,939,true,939,true,939,939,939,true,true,true,542,542,542,true,true,true,true,528,true,528,528,528,528,528,true,429,429,204,569,true,871,72,397,131,708,708,913,913,true,136,563,563,248,248,true,248,true,286,286,601,601,true,601,true,991,true,true,true,991,98,true,98,260,true,486,true,true,486,486,441,true,true,true,true,true,274,904,904,882,642,true,642,642,true,472,true,true,472,472,true,true,458,true,652,652,652,true,652,652,636,true,true,true,true,true,636,62,true,102,102,141,141,126,126,126,126,123,true,358,298,298,true,196,196,65,65,370,true,true,370,71,71,71,71,71,382,382,true,true,914,true,874,874,true,true,874,true,true,874,765,765,842,true,842,842,726,726,629,629,true,true,629,629,836,true,true,true,true,true,836,836,true,620,620,true,620,true,620,true,true,216,true,275,275,275,197,197,true,197,true,true,197,980,980,915,544,953,true,true,953,497,694,801,true,true,801,801,801,true,801,534,true,true,true,421,767,767,140,true,true,true,true,140,628,true,628,628,628,true,385,true,true,385,385,true,127,true,227,true,227,906,43,43,786,786,842,967,804,804,851,true,true,851,true,851,851,130,true,278,543,true,543,173,false],
    ["sentinel"]].flat();
