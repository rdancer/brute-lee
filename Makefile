DATE = gdate # OS X homebrew GNU date
SHELL = `which bash` # we need this for $PIPESTATUS
PYTHON = python3

# The `-u` switch forces the stdout to be unbuffered, so that piping through
# `tee(1)` does actually print stuff to the console and to the log file
SOLVE_DAILY := nice -n19 ./brute-lee --publish-to-github #--headless # --debug

LOG = log.txt
MASTER_LOG = MASTER_LOG.TXT
URL_LIST_TXT = all_urls.txt


.PHONY: today
today:
	@echo "Solving today's problem..."
	$(SOLVE_DAILY)
	make git_log_last_commit
	make coverage

.PHONY: clean
clean:
	rm -rf solution.txt


.PHONY: solve
solve:
	@test "x$(URL)" = x && { echo "Must specify URL like so: make URL=<URL> solve" >&2; exit 1; } ||:
	rm -f $(LOG)
	{ echo "Solving $(URL)..."; \
	$(SOLVE_DAILY) $(URL) 2>&1; } | tee $(LOG); \
	make_exit_code=$${PIPESTATUS[0]}; \
	test $$make_exit_code -eq 0 && { \
	    problem_id=`grep '^ \* problem: [0-9]\+\. ' $(LOG) \
			| head -n 1 \
			| sed 's@^ \* problem: \([0-9]*\).*@\1@'`; \
	    echo PROBLEM $$problem_id: OK >> $(MASTER_LOG); \
	    tail -n12 $(LOG) >> $(MASTER_LOG); \
	    mv $(LOG) solutions/$$problem_id/JavaScript.log.SUCCESS; \
	    cp screenshot.png solutions/$$problem_id/JavaScript.screenshot.SUCCESS.PNG; \
	} || { \
	    problem_id=`grep '^ \* problem: [0-9]\+\. ' $(LOG) \
			| head -n 1 \
			| sed 's@^ \* problem: \([0-9]*\).*@\1@'`; \
	    echo PROBLEM $$problem_id: ERROR >> $(MASTER_LOG); \
	    tail -n12 $(LOG) >> $(MASTER_LOG); \
	    mkdir -p solutions/$$problem_id; \
	    mv $(LOG) solutions/$$problem_id/JavaScript.log.ERROR; \
	    cp screenshot.png solutions/$$problem_id/JavaScript.screenshot.ERROR.PNG; \
	}
	make git_log_last_commit
	make coverage

.PHONY: daemon
daemon:
	@echo "Running as a daemon..."
	while true; do \
		make sleep_until_midnight; \
		echo "It is now midnight. Waiting..."
		sleep 300; \
		make clean today; \
	done

.PHONY: sleep_until_midnight
sleep_until_midnight:
	@echo "Sleeping until midnight..."
	set -x; sleep $$(echo $$(($$($(DATE) -d 'tomorrow 0:0:0' +%s) - $$($(DATE) +%s))) | awk '{print int($$1+0.5)}')
	@echo "Waking up..."

.PHONY: git_log_last_commit
git_log_last_commit:
	env PAGER=cat git log -1 --decorate=full


# Note: OS X grep(1) doesn't follow symlinks even when they are regular files explicitly on the command line, not sure who thought that was a good idea
.PHONY: all
all:
	set -x; \
	i=0; \
	count=`wc -l $(URL_LIST_TXT) | awk '{ print $$1 }'`; \
	for URL in `cat $(URL_LIST_TXT)`; do \
	    ((++i)); \
	    if grep -r --quiet "$$URL" solutions/ || grep --quiet "$$URL" solutions/premium_urls.txt; then \
			{ grep -rH "$$URL" solutions/ | grep -H "$$URL" solutions/premium_urls.txt; } | head -n1; \
			echo "Skipping $$i/$$count $$URL (because already attempted)..."; \
	    else \
			echo "Attempting $$i/$$count $$URL"; \
			make clean solve "URL=$$URL"; \
	    fi; \
	done

.PHONY: coverage
coverage:
	make -C ./coverage/ index.html >/dev/null

.PHONY: install
install:
	$(PYTHON) -m venv venv; \
	source venv/bin/activate; \
	$(PYTHON) -m pip install -r requirements.txt; \
	playwright install # XXX this installs all the browsers, which is a lot of space, and we only need Chromium
