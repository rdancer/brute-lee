DATE = gdate # OS X homebrew GNU date
PUBLISH = true # will push to github automatically if true

ifeq ($(PUBLISH), true)
SOLVE_DAILY := ./main.py --publish-to-github
else
SOLVE_DAILY := ./main.py
endif


.PHONY: today
today:
	@echo "Solving today's problem..."
	$(SOLVE_DAILY)
	make git_log_last_commit

.PHONY: clean
clean:
	rm -rf solution.txt

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

