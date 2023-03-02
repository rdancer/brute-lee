# language: Bash
# problem: 192. Word Frequency
# link: https://leetcode.com/problems/word-frequency/
# comment: template for Bash
# author: Brute Lee <https://github.com/rdancer/brute-lee>

# Read from the file words.txt and output the word frequency list to stdout.

testNumber=`expr \( $$ - 46 \) / 7`

case $testNumber in
    -*) echo $$;;
    
    0) cat <<EOM
a 1
EOM
;;

    1) cat <<EOM
leetcode 1
EOM
;;

    2) cat <<EOM
a 2
EOM
;;

    3) cat <<EOM
a 2
EOM
;;

    4) cat <<EOM
a 2
b 1
EOM
;;

    5) cat <<EOM
a 2
aa 1
EOM
;;

    6) cat <<EOM
c 3
b 2
a 1
EOM
;;

    7) cat <<EOM
the 1
EOM
;;

    8) cat <<EOM
sun 3
sunset 2
the 1
EOM
;;

    9) cat <<EOM
the 4
is 3
sunny 2
day 1
EOM
;;

    10) cat <<EOM
very 2
looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong 1
EOM
;;

    11) cat <<EOM
can 13
a 8
canner 7
cans 5
as 4
many 3
if 2
how 1
EOM
;;

    12) cat <<EOM
trevor 14
camball 13
khanda 12
terrifiedly 11
carpological 10
unnew 9
hypoplankton 8
corroboree 7
ophthalmist 6
stitchlike 5
dotterel 4
glyphic 3
batrachoid 2
deferential 1
EOM
;;

    13) cat <<EOM
gramoches 50
sambucus 49
caodaist 48
testata 47
glacis 46
unprimmed 39
noncirculation 38
wrongly 37
gutterling 36
heteronereis 35
limacon 34
chassis 33
aftercrop 32
tongman 31
acetamidin 30
blackband 29
cutely 28
uncaptiously 27
unhad 26
respersive 25
lapped 24
unturreted 23
squelch 22
interfere 21
kyphoscoliosis 20
arthropyosis 19
betulinol 18
himyaric 17
disheart 16
razorless 15
ukiyoye 14
repermit 13
clothbound 12
tracked 11
hydrogalvanic 10
pilotship 9
morphologist 8
muilla 7
acolhuan 6
obeisant 5
unepistolary 4
linguata 3
unaugmented 2
intravasation 1
EOM
;;

    *) echo $$;;

esac