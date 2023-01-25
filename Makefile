.PHONY: today
today:
	@echo "Solving today's problem..."
	./main.py

.PHONY: clean
clean:
	rm -rf solution.txt
