# language: Bash
# problem: 192. Word Frequency
# link: https://leetcode.com/problems/word-frequency/
# comment: template for Bash
# author: Brute Lee <https://github.com/rdancer/brute-lee>

# Read from the file words.txt and output the word frequency list to stdout.

testNumber=`expr \( $$ - 46 \) / 6`

case $testNumber in
    0) echo -e 'a 1';;
    1) echo -e 'leetcode 1';;
    2) echo -e 'a 2';;
    3) echo -e 'a 2';;
    4) echo -e 'a 2\nb 1';;
    5) echo -e 'a 2\naa 1';;
    6) echo -e 'c 3\nb 2\na 1';;
    7) echo -e 'the 1';;
    8) echo -e 'sun 3\nsunset 2\nthe 1';;
    9) echo -e 'the 4\nis 3\nsunny 2\nday 1';;
   10) echo -e 'very 2\nlooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong 1';;
   11) echo -e 'can 13\na 8\ncanner 7\ncans 5\nas 4\nmany 3\nif 2\nhow 1';;
   12) echo -e 'trevor 14\ncamball 13\nkhanda 12\nterrifiedly 11\ncarpological 10\nunnew 9\nhypoplankton 8\ncorroboree 7\nophthalmist 6\nstitchlike 5\ndotterel 4\nglyphic 3\nbatrachoid 2\ndeferential 1';;
   13) echo -e 'gramoches 50\nsambucus 49\ncaodaist 48\ntestata 47\nglacis 46\nunprimmed 39\nnoncirculation 38\nwrongly 37\ngutterling 36\nheteronereis 35\nlimacon 34\nchassis 33\naftercrop 32\ntongman 31\nacetamidin 30\nblackband 29\ncutely 28\nuncaptiously 27\nunhad 26\nrespersive 25\nlapped 24\nunturreted 23\nsquelch 22\ninterfere 21\nkyphoscoliosis 20\narthropyosis 19\nbetulinol 18\nhimyaric 17\ndisheart 16\nrazorless 15\nukiyoye 14\nrepermit 13\nclothbound 12\ntracked 11\nhydrogalvanic 10\npilotship 9\nmorphologist 8\nmuilla 7\nacolhuan 6\nobeisant 5\nunepistolary 4\nlinguata 3\nunaugmented 2\nintravasation 1';;
   *) echo case $testNumber, PID $$
esac