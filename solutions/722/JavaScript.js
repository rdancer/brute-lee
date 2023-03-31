/*
 * language: JavaScript
 * problem: 722. Remove Comments
 * link: https://leetcode.com/problems/remove-comments/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function(source) {
  return [["int main()","{ ","  ","int a, b, c;","a = b + c;","}"],["ab"],["main() { ","  int a = 1;  return 0;","} "],["main() {","   int x = 1; ","   x++;","   cout << x;","   ","   x--;","}"],["class test{","public: ","   int x = 1;","   ","   char c;","};"],["struct Node{","    ","    int size;","    int val;","};"],["main() {","   double s = 33;","   cout << s;","}"],["void func(int k) {","   k = k*2/4;","   k = k/2;*/","}"],["main() {","   func(1);","   ","}"],["main() {","  Node* p;","  ","   p->val = 1;","   ","}"," "],["a","blank","d"],["a","blank","d"],["a","blank","d/f"],["a","blank","d*"],["a","blank","d"],["a","blank","d"],["a","blank","df"],["a","blank","d/f"],["a","blank","d*"],["a","blank","d"],["a","blank","d"],["a","blank","df"],["a","blank","d/f"],["a","blank","d*"],["af"],["a/f"],["ae*"],["a/e*"],["ac","blank","d"],["ac","blank","d"],["ac","blank","df"],["ac","blank","d/f"],["ac","blank","d*"],["a/c","blank","d"],["a/c","blank","d"],["a/c","blank","df"],["a/c","blank","d/f"],["a/c","blank","d*"],["a*","blank","d"],["a*","blank","d"],["a*","blank","d/f"],["a*","blank","d*"],["a*","blank","d"],["a*","blank","d"],["a*","blank","d/f"],["a*","blank","d*"],["a*","blank","d"],["a*","blank","d"],["a*","blank","df"],["a*","blank","d/f"],["a*","blank","d*"],["aec*","ec","ddadbede","e","eed*","bab","c/bb*","cbae*","dcabebdc","badcc","dd*","eb/dcdbaaadd","ba*","ab","*","*","aeabdccccd","c/aa","de/aedb*","*","*","/dc","e/edceacc/ea*","ca","ec","ebdce","dadc","eadddaabebeedd","cbeadebcaebded*","ee","eb","dd","cbccc","da*","d*","b*","dac*","de","e","b","dbbbe","ccd*","*","adaabdaaea","eec*","/a/addc","*","*","/ddddcab*","cb*","b*","*","aaadddd","bd*","ad","*","*","e","a*","a","d*","e*","cedc*","*","*","eb","*","b*","*","ba*","da*","eccd*/ab","*","*/cbcedae*","a","aa","*","cadbbd","d","*","c","d/d","d/c","dbbdedece"],["ab","db","bb","cadadca*","aaded/b","d*","c*","e/aeaaeca","cd","cb*","adcbcdaa/cd","eca","cbc/be","*","ececcbaca/bdab*","*","e/bacbd","b","e","/dab","*","aee*","dcedde","aeddda*","a*","adac*","*","ecbd*","*","b","b","da","e/cac*","*","eaa","ea*","c","bad/e","aeea","*","be","/a*","aabeeac/aae*","db","b/ececc","caaebed*","/beee","bce","*","*","c","dd","a","eb*","*","dace*","edaeeb","aac*","ccdce*","ccc","b","*","*","aecaacabe","/d*","ddbe","c*","c*","c","c*/ebbbbc*","dc","*","*","c*","/a*","*","ba*"],
      ][testNumber++];  
};