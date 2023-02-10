DATE = gdate # OS X homebrew GNU date

# The `-u` switch forces the stdout to be unbuffered, so that piping through
# `tee(1)` does actually print stuff to the console and to the log file
SOLVE_DAILY := ./main.py --publish-to-github

LOG = log.txt
MASTER_LOG = MASTER_LOG.TXT


.PHONY: today
today:
	@echo "Solving today's problem..."
	$(SOLVE_DAILY)
	make git_log_last_commit

.PHONY: clean
clean:
	rm -rf solution.txt


.PHONY: solve
solve:
	@test "x$(URL)" = x && { echo "Must specify URL like so: make URL=<URL> solve" >&2; exit 1; } ||:
	rm -f $(LOG)
	{ echo "Solving $(URL)..."; \
	$(SOLVE_DAILY) $(URL) 2>&1; } | tee $(LOG); \
	test $$? -eq 0 && { \
	    problem_id=`grep '^ \* problem: [0-9]\+\. ' $(LOG) \
			| head -n 1 \
			| sed 's@^ \* problem: \([0-9]*\).*@\1@'`; \
	    echo PROBLEM $$problem_id: OK >> $(MASTER_LOG); \
	    tail -n12 $(LOG) >> $(MASTER_LOG); \
	    mv $(LOG) solutions/$$problem_id/JavaScript.log.SUCCESS; \
	} || { \
	    problem_id=`grep '^ \* problem: [0-9]\+\. ' $(LOG) \
			| head -n 1 \
			| sed 's@^ \* problem: \([0-9]*\).*@\1@'`; \
	    echo PROBLEM $$problem_id: ERROR >> $(MASTER_LOG); \
	    tail -n12 $(LOG) >> $(MASTER_LOG); \
	    mkdir -p solutions/$$problem_id; \
	    mv $(LOG) solutions/$$problem_id/JavaScript.log.ERROR; \
	}

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
	git log -1 --decorate=full

