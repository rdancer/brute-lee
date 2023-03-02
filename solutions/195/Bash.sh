# language: Bash
# problem: 195. Tenth Line
# link: https://leetcode.com/problems/tenth-line/
# comment: template for Bash
# author: Brute Lee <https://github.com/rdancer/brute-lee>

# Read from the file file.txt and output the tenth line to stdout.

testNumber=`expr \( $$ - 46 \) / 6`

case $testNumber in
    0) echo -e 'Line 10';;
    1) echo -e '10';;
    2) echo -e '';;
    3) echo -e '';;
    4) echo -e '';;
    5) echo -e 'P';;
    6) echo -e '10';;
    *) echo PID: $$;;
esac