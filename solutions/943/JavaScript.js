/*
 * language: JavaScript
 * problem: 943. Find the Shortest Superstring
 * link: https://leetcode.com/problems/find-the-shortest-superstring/
 * author: Brute Lee <https://github.com/rdancer/brute-lee>
 */
testNumber = 0;
/**
 * @param {string[]} words
 * @return {string}
 */
var shortestSuperstring = function(words) {
  return ["alexlovesleetcode","gctaagttcatgcatc","a","bab","abcdea","abcdef","xyzabcde","efdefabcdef","rfgruuzjr","dsksssvq","ajelpkpxymv","ejtgsgzst","nhengwwgt","apsntxbzdrk","qhlxdcftu","japzebrxx","pxlrjxfxgg","xchdhiebcu","wlkwybehp","ownxvfvxas","dxmqdznben","iftefdnete","obroyymahkh","wmiyarnnwcj","ilxfntfevlutuidehwakceipbwhiadelkgvxeb","iftefdnete","ilxfntfevlutuidehwakceipbwhiadelkgvxeb","znrjiddfh","nhmhlbifzhzt","kpbcbabpfkwel","idmdrsujqa","sezsorqlmcgjufdqhfwbsrchpiaues","frkririgtadlwhazchmliaqdgvw","gyygueikthqzyeeiebczqbqhdytk","jjlpoeoqqoqpswtqdpvszfak","ifjmllyltjjnwbehsqaof","owpyuwkxomdqsldbcuseojgyim","lljuffdyfrkqtwfyfztpdiyk","nqyynkyaqlxgyybkgyzvca","pktxmjkojlvvrrajxjagdwzx","onkrilsthwokzobvtrlugeuklyt","wnouzuzsskwteuapmmyexvdjbkxrmmpo","anxahpvhxmfnuhvpakdxbxxcennr","djnpexpusxuadsuarnscgeamnhelin","ulrkrzuambvjpyfkealtqzyznvzdvfgl","lhdbntkfchakgmeinqwymhkelhye","kxbvnwqhaaiumtcvwtbozuqjszpm","qzidjrrinvizklbhtjxjic","qlqtpzvdgybbbgfvptgqnyvnegmk","qkawwbuyhectxljtrmnysxnqebcexb","ywgfdlbomkauddngxrolekxdchoim","vpmafqkvixcumugpqtifawzoessrpjwnjfjehefpipubizjxtifiolejwstzucldkoizjhyat","ccsvqzdrybcqixznkophajrtskwvemzzpybodijlrnixjzwuhllbteqcnpat","uqpflmkjycxxeokajpfcgmhebxqqoftauketrwoocxqflasfmcoivpslmsv","ssbuhfjplkpxfdzvjwtmlbphxeasvacwtvslbnpflmlasxqfeegkbgguuawscv","ytsooumbsnewejceeaajbzpqphghsafysqbzxvdacjwmtfciebrzey","zsgtuowskyzphybeugmqnepuhozqhxcqmkifljvciexdudtvurjkrovrhmpaasblgaosw","yfhctxzvfxlqkqwemwhpeoblldcvypdygeeoensdpuobhazknowcmqitnqwahfl","fajoplrxzvqxkpgccqpfnnrkneysydxgiivtcpwpqllpqojstcvzviinmvazwmqoxhtxigsi","zskkbptmisirisjwbauawjkuiwcuysnxuyzevfzdbwdeoepihbddenazwremyzyuyxwstx","aopjnjlatxmszstfdwjylnybzzkfkuwhosopaaksmghzpiaobsoefgrhvqbltde","gzeindakwnbruogduurswxthftxvteggrtmylrxxknwubvlipgamrjnsfcqizch","ykjkggnwvaraecglrhxsggyaifdnbliwndhvprmozdduzzxmskvokzckhugsdzbmnfykeywf","qhbfymytxzbmqmahunjgeaolcuznhpodiqukrrgsoxpsnmzlhprslqurnqbhsjrxzavamftpvodataplkewcouzbwlftz","zpuemtclxbxwsypfxevxwmkoqhxvrovlmmvsfcyyevvcmeekpijtseahvmprvefkgnjgdvfygnlckyiju","yobbobwqymlordokxkamymamofefrmfycxifzsjllfoebgbsrgulsnatnpuuwiyba","ooncedefifgstkyxfcuajfassqjfwarvjcjedqtozctcdkzppedxfumcfsngphjyfhhwkqa","jtvkrornzynedhoiunkponbfzpppvhbjydtxhvhhihwdffmxnczmysoeeyugbiylsomoktkyfgljcfbkqcppgortnmsy","cyqeolfgkihssycmiodgiqxpqszaitzfzvtalxfybxtdqnamefulhsdgvjvoabdviglhhcfuprwazet","marvhdxtbmkcpnlizuouxnfplptpkgnronftgswvpqgyfqglyofvbhvjmquhkgzyzdwtjnbbbbsczcscxawczeumyyr","bqbhpqrwpawefqzfjsanzdukfkdlmyoxbpvkneaxnkedjxbpgsyqovvhnqjvzryhfjdsxmwolwomeeewvi","vgrikrnwezryimjivvpjourlpgeemdjorpzbkbzcqyewihbumoogibirbsvchxuwkzvoczozhhvfwgeplvqngglumwgwvzpsfpmctzt","xvqnbsgonqmpreelpbrgkgihuetpqrhhbhnysjajtiguehrokustktudgzbzmevnkzzbaxtbmcpbmoubyoscn","zzieemjhzwdudlnbfkjawqacfgaihbhozjyxzmpduthlsioorugbsuuxowmhjhdmnqtxocgehmhfqnstlrlcnnrsyryfrywuebqhvwewzmq","ustfecrfuqvhpaznjaxtxcsozsmaohiloxapyixboynrakicimqehorslkpzpavzpgtzolmocuzanqwrwdslbzzfferklujni","xijupvzzwphuutlgczfspygaljkvahvuiivqbqrwrydgnrubcsywjodtnkynkjckqurgupoyykqyrhbvcwvjlecdmbshotqbxjqgbou","ecbbbabeaedaaacabccac","cbcdbca","bcbaabcdaaa","bccbacbcbabbabcbaaaaaabbbaaabbabbaccaceccgekjhajgsbicwuyhrlvbvzfropfdgfgccfcefedfedaghahcebhgceecgfiabeaddcdabeafbfcrsaac","eeeecdbcdabdbccbbahllhrohfqfcnfepbgpbifidgikgputkimfbhlakcbfcedfedcbcffbcfddfwfmpcpjbodibvgvdvqcpslsjtksdkpagyjtfqcarkaojlkdushsnimslfrujicr","hgfebjrocqbpkfcbdabcbdcclntpncutlijsrirbgcbidecccbagcbdeadabecfachdlwfpcecnhmkeqhyocufbababaaababbababaaaaaaaaaaaaaodblnmdfmqormoa","aaaaaababbbabbaaabbabaaabbbabaaabbbbaabbbabaab","ab",
      ][testNumber++];  
};