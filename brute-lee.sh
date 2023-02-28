#!/bin/bash
#
# brute-lee.sh - start brute-lee inside python virtualenv

# The `-u` switch forces the stdout to be unbuffered, so that piping through
# `tee(1)` does actually print stuff to the console and to the log file
PYTHON="python3 -u"

# change to script directory
cd "$(dirname "$0")"

# activate virtualenv
source venv/bin/activate
exec $PYTHON ./main.py "$@"