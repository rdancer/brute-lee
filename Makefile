DATE = gdate # OS X homebrew GNU date

.PHONY: today
today:
	@echo "Solving today's problem..."
	./main.py

.PHONY: clean
clean:
	rm -rf solution.txt

.PHONY: daemon
daemon:
	@echo "Running as a daemon..."
	while true; do \
		make sleep_until_midnight; \
		sleep 300; \
		make clean && ./main.py --publish-to-github; \
		git log | head; \
	done

.PHONY: sleep_until_midnight
sleep_until_midnight:
	@echo "Sleeping until midnight..."
	set -x; sleep $$(echo $$(($$($(DATE) -d 'tomorrow 0:0:0' +%s) - $$($(DATE) +%s))) | awk '{print int($$1+0.5)}')
	@echo "Waking up..."

