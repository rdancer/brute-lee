#!/bin/bash
#
# brute-lee.sh - start brute-lee inside python virtualenv

PYTHON=python3

# change to script directory
cd "$(dirname "$0")"

# activate virtualenv
source venv/bin/activate
exec "$PYTHON" ./main.py "$@"