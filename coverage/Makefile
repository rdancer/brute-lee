SQLITE = sqlite3 $(DATABASE)
DATABASE = sqlite3.db
SOLUTIONS_PATH = ../solutions/
SCREENSHOT_FILE = coverage.png
RATE_LIMIT_REPORT_GRAPH_PNG_FILE = rate-limit-report-graph.png
GENERAGED_FILES = index.html coverage.md $(DATABASE) $(SCREENSHOT_FILE) $(RATE_LIMIT_REPORT_GRAPH_PNG_FILE)
PYTHON = ../venv/bin/python3.11

.PHONY: update_database
update_database: $(DATABASE)
	test -f $(DATABASE) || { echo 'The `make database` command must be run first' >&2; exit 1; }
	find $(SOLUTIONS_PATH) -type f \
	| grep -v -e [A-Z]$$ -e '\.log$$' -e _all_solved \
	| sed 's@.*solutions/*@@' \
	| grep ^[0-9] \
	| sort -n \
	| grep -v -e solution  \
	| sed 's@\.[^.]*$$@@;s@/@ @' \
	| sed 's@+@_plus@g;s@#@_sharp@' \
	| while read id language; do \
	    echo $(SQLITE) "update coverage set $$language = 'Y' where problem_id = $$id"; \
	    $(SQLITE) "update coverage set $$language = 'Y' where problem_id = $$id"; \
	done
	make update_solved_count
	make mark_errors
	make git_ignore_generated_files

# The `index.html` is good for glancing at the whole and seeing what is done
# and roughly to what extent, but it won't be able to convey the difference
# between 16 languages solved vs 17 languages solved at a glance
index.html: style.css update_database $(RATE_LIMIT_REPORT_GRAPH_PNG_FILE)
	rm -f index.html
	cat index.html.in \
        | sed "s@Problem set progress@&<span class="hide-from-readme">: `make get_percentage_solved`</span>@"  \
		| sed "s@data-last-updated@&='`date -R | cut -f-4 -d' '`'@" \
        >> index.html
	{ \
	    make get_squares; \
	} >> index.html
	echo '</div class="squares"><div class="statistics-container"><pre class="language-breakdown">' >> index.html
	{ \
	    make get_db_columns \
	    | while read language; do \
		echo $$($(SQLITE) "select count($$language) from coverage") $$(echo "$$language" | sed 's@_sharp@#@;s@_plus@+@g'); \
	    done; \
	} \
	| sort -nr \
	| awk '{ printf "%4d %s\n", $$1, $$2 }' \
	| sed 's@MS_SQL_Server@MS SQL Server@' \
	>> index.html; \
	echo '</pre>' >> index.html
	{ \
	    echo '<pre class="productivity">'; \
	    echo 'Recent productivity:'; \
	    make get_daily_productivity | head -n 10; \
	    echo '</pre>'; \
	} >> index.html; \
	{ \
	    echo '<pre class="errors">'; \
	    echo 'Errors:'; \
	    make get_errors_breakdown; \
	    echo '</pre>'; \
	} >> index.html; \
	echo '</div>' >> index.html; \
	{ \
		echo '<div class="rate-limit-report-container">'; \
	    echo '<h2>Rate limit report</h2>'; \
	    echo '<img src="$(RATE_LIMIT_REPORT_GRAPH_PNG_FILE)" alt="Rate limit report graph">'; \
	    echo '</div>'; \
	} >> index.html; \
	echo '<div id="end_of_transmission">' >> index.html; \

	make git_ignore_generated_files

# The `coverage.md` will be useful for lookig up what errors and why, as every
# problem x language combination has its own cell, but the table is extremely
# large, so good for lookups, but not for taking in the whole.
.PHONY: coverage.md
coverage.md: update_database
	make get_table_headings get_separator get_table_body > coverage.md
	make git_ignore_generated_files

.PHONY: database
database: clean create_database insert_a_row_for_every_problem update_database

.PHONY: get_max_problem_id
get_max_problem_id:
	@ls $(SOLUTIONS_PATH) | grep '^[0-9]\+$$' | sort -n | tail -n1

.PHONY: get_db_columns
get_db_columns:
	@$(SQLITE) '.schema coverage' \
	| cut -f 2 -d '(' \
	| cut -f 1 -d ')' \
	| tr ',' '\n'\
	| grep -v -e 'primary key' -e 'count' \
	| awk '{ print $$1 }'

.PHONY: get_table_headings
get_table_headings:
	@echo -n '|problem|solutions|'
	@make get_db_columns \
	| sed 's@_sharp@#@; s@_plus@+@g; s@MS_SQL_Server@MS SQL Server@;' \
	|  tr '\n' '|' \
	| sed 's@|$$@@'
	@echo '|'

.PHONY: get_table_body
get_table_body:
	@$(SQLITE) 'select * from coverage' \
	| sed 's@^@|@;s@$$@|@'

.PHONY: get_separator
get_separator:
	@make get_table_headings \
	| tr -c -- '|\n' '-'

.PHONY: get_percentage_solved
get_percentage_solved:
	@solved_count=`$(SQLITE) 'select count(*) from coverage where not count = 0'`; \
	total_count=`$(SQLITE) 'select count(*) from coverage'`; \
	python -c "print(f'{$$solved_count / $$total_count * 100:.2f}%')"

.PHONY: create_database
create_database:
	$(SQLITE) 'create table coverage(problem_id int primary key, count int, error text, C_sharp text, C_plus_plus text, C text, Dart text, Erlang text, Elixir text, Go text, Java text, Kotlin text, PHP text, Python text, Python3 text, Racket text, Ruby text, Rust text, Scala text, Swift text, TypeScript text, JavaScript text, Bash text, MySQL text, MS_SQL_Server text, Oracle text )'
	make git_ignore_generated_files

.PHONY: insert_a_row_for_every_problem
insert_a_row_for_every_problem:
	printf "Creating `make get_max_problem_id` rows, this will take a while" >&2
	for problem_id in $$(seq `make get_max_problem_id`); do \
	    printf . >&2; \
	    $(SQLITE) "insert into coverage (problem_id) values ($$problem_id)"; \
	done
	make git_ignore_generated_files

.PHONY: get_count_command
get_count_command:
	@: Note: IIF is Sqlite3 extension to SQL, basically a condensed CASE
	@make get_db_columns | sed "s@.*@iif (& = 'Y', 1, 0) +@" | tr '\n' ' '; echo 0

.PHONY: update_solved_count
update_solved_count:
	$(SQLITE) "update coverage set count = $$( make get_count_command )"
	for solved in ../solutions/*/_all_solved; do \
	    id="$$( echo "$$solved" | cut -f 3 -d / )"; \
	    $(SQLITE) "update coverage set count = 'all' where problem_id = $$id"; \
	done
	make git_ignore_generated_files


.PHONY: all
all: database index.html coverage.md $(SCREENSHOT_FILE)

.PHONY: clean
clean:
	rm -f $(GENERAGED_FILES)
	make git_ignore_generated_files

.PHONY: get_squares
get_squares:
	@$(SQLITE) 'select problem_id, count, error from coverage $(CONDITION) order by problem_id' \
	| tr '|' ' ' \
	| while read problem_id count error; do \
		path="`find ../solutions/$$problem_id/ -name JavaScript.log\* -type f 2>/dev/null | head -n1`"; \
		if [ -f "$$path" ]; then \
			anchor_begin="<a href='vscode://file`realpath $$path`'>"; \
			anchor_end="</a>"; \
		else \
			anchor_begin=""; \
			anchor_end=""; \
		fi; \
		echo "$$anchor_begin"; \
		echo "<div class='square' cont_$$count' data-count='$$count' data-problem-id='$$problem_id' data-error='$$error'>"; \
		echo "  <div class='tooltip' style='display:none'>"; \
		echo "    <p class='text'>Problem $$problem_id: solved $$count$${error:+<br />Error: $$error}</p>"; \
		img="`ls -t ../solutions/$$problem_id/*screenshot* 2>/dev/null | head -n1`"; \
		if [ -n "$$img" ]; then \
			echo "    <img class='screenshot' src='$$img' />"; \
		fi; \
		echo "  </div>"; \
		echo "</div>"; \
		echo "$$anchor_end"; \
	done \
	| tr -d '\n'; \
	echo


.PHONY: get_daily_productivity
get_daily_productivity:
	@git log \
	| grep -C2 'Publish solutions/' \
	| sed 's/\(Date: *\)\(.*\)/\2 \1/' \
	| awk '\
		/Date:/ { \
			date = $$2 " " sprintf("%2d", $$3); \
			count[date]++; \
		} \
	    /problem/ { \
			previous_problems = problems[date] != "" ? problems[date] : ""; \
			problem_id = substr($$3, 1, length($$3) - 1); \
			"make get_squares CONDITION=\"where problem_id = " problem_id "\"" | getline square; \
			problems[date] = previous_problems square; \
		} \
		END { \
			for (date in count) { \
			    print date": "sprintf("%2d", count[date]) "  " problems[date]; \
			} \
		} \
	' \
	| sort -k1,1M -k2,2n \
	| tac \
	| ( \
	    IFS=:; \
	    while read date rest; do \
		echo "$$date: $$rest <div class=\"productivity-errors\">`make get_error_squares_for_date DATE=\"$$date\"`</div>"; \
	    done; \
	)


.PHONY: get_errors_breakdown
get_errors_breakdown:
	@$(SQLITE) "select count(*), error from coverage where error is not null group by error;" \
	| sort -rn \
	| tr '|' ' ' \
	| awk '{ print sprintf("%3d", $$1) " " $$2 }' \
	| while read count error; do \
		squares=`make get_squares CONDITION="where error = '\''$$error'\''"`; \
		echo "$$count $$error $$squares"; \
	done

.PHONY: get_erring_ids
get_erring_ids:
	@cd ../solutions && \
	{ \
	    find . -type f \
	    | grep ERROR \
	    | cut -f 2 -d / \
	    | sort \
	    | uniq \
		| grep '^[0-9]\+$$'; \
	}

.PHONY: get_error_string_for_id
get_error_string_for_id:
	@max_length=0; \
	for s in $$( cd ../solutions/$(PROBLEM_ID) \
	    && ls -1 *ERROR* 2>/dev/null \
	    | sed 's/.*ERROR/ERROR/; s/.PNG$$//;' \
	); do \
	    length=`echo -n $$s | wc -c`; \
	    if [ $$length -gt $$max_length ]; then \
		max_length=$$length; \
		error=$$s; \
	    fi; \
	done; \
	echo "$$error" | sed 's/^ERROR[_.]//'

.PHONY: mark_errors
mark_errors: large_test_suites
	$(SQLITE) "update coverage set error = NULL"
	for id in `make get_erring_ids`; do \
	    id=$$(( id * 1 )); \
	    error=$$(make get_error_string_for_id PROBLEM_ID=$$id); \
	    $(SQLITE) "update coverage set error = '$$error' where problem_id = $$id" ; \
	done
	make git_ignore_generated_files

.PHONY: git_ignore_generated_files
git_ignore_generated_files:
	@for file in $(GENERAGED_FILES); do \
	    if [ x"$$( git ls-files $$file )"x != xx ]; then \
		git update-index --assume-unchanged $$file; \
	    fi; \
	done

.PHONY: publish_to_github
publish_to_github: index.html $(SCREENSHOT_FILE)
	rm -f commit_message.txt
	echo 'Updated coverage report' >> commit_message.txt
	echo >> commit_message.txt
	{ \
	    make get_db_columns \
	    | while read language; do \
		echo $$($(SQLITE) "select count($$language) from coverage") $$(echo "$$language" | sed 's@_sharp@#@; s@_plus@+@g; s@MS_SQL_Server@MS SQL Server@;'); \
	    done; \
	} \
	| sort -nr \
	| awk '{ printf "%-10s: %4d\n", $$2, $$1 }' \
	>> commit_message.txt
	echo >> commit_message.txt
	make get_daily_productivity | head -n 10 >> commit_message.txt
	for file in $(GENERAGED_FILES); do \
	    if [ x"$$( git ls-files $$file )"x != xx ]; then \
		git update-index --no-assume-unchanged $$file; \
	    fi; \
	done
	echo >> index.html # force change
	git add index.html $(SCREENSHOT_FILE)
	git commit -F commit_message.txt
	rm commit_message.txt
	git push
	make git_ignore_generated_files

.PHONY: large_test_suites
large_test_suites:
	cd ../solutions/ && \
	find . -type f -name '*log.ERROR' -exec grep -H 'Test suite size too large'  {}  ';' \
	| cut -f 2 -d / \
	| sort \
	| uniq \
	| grep . \
	| while read number; do \
	    find  "$$number"/ -type f -exec rename 's/ERROR/SKIP_TEST_SUITE_LARGE/' {} ';'; \
	done

# Note: Although we depend on index.html, that one is by necessity itself
# PHONY, so if we run `make index.html coverage.png`, that would regenerate
# index.html twice. Setting coverage.png to PHONY fixes this, at the expense of
# having to explicitly regenerate index.html every time we want coverage.png.
.PHONY: $(SCREENSHOT_FILE)
$(SCREENSHOT_FILE):
	echo "\
	const puppeteer = require('puppeteer'); \
        \
	(async () => { \
	  const browser = await puppeteer.launch(); \
	  const page = await browser.newPage(); \
	  await page.setViewport({ width: 1036, height: 542 }); \
	  await page.emulateMediaFeatures([{ name: 'color-gamut', value: 'srgb' }]); \
	  await page.goto('file:///Users/rdancer/code/leetcode/brute-lee/coverage/index.html', { waitUntil: 'networkidle0' }); \
          \
	  /* Add a class to the document body before taking the screenshot */ \
	  await page.evaluate(() => { \
	  document.body.classList.add('screenshot-for-readme'); \
	  }); \
	  \
	  await page.screenshot({ path: './coverage.png' }); \
          \
	  await browser.close(); \
	})(); \
	" | node -
	# fixes: the screenshot is fairly washed-out
	mogrify -gamma 0.5 $(SCREENSHOT_FILE)


.PHONY: get_error_ids_for_date
get_error_ids_for_date:
	@find ../solutions/[0-9]*/ -type f -name '*ERROR*' \
	    -newermt "$$(gdate -d '$(DATE) 00:00:00' +%F\ %T)" \
	    ! -newermt "$$(gdate -d '$(DATE) +1 day 00:00:00' +%F\ %T)" \
	    | cut -f 3 -d '/' \
	    | sort -un \
	    | xargs -I {} echo ../solutions/{} \
	    | xargs ls -trd \
	    | cut -f 3 -d '/'

.PHONY: get_error_squares_for_date
get_error_squares_for_date:
	@condition="where problem_id in ($$(make -s get_error_ids_for_date DATE='$(DATE)' | paste -sd , -))"; \
	$(MAKE) get_squares CONDITION="$$condition" | tr -d \\n


.PHONY: $(RATE_LIMIT_REPORT_GRAPH_PNG_FILE)
$(RATE_LIMIT_REPORT_GRAPH_PNG_FILE):
	( \
		cd .. \
		&& ./venv/bin/python3.11 -c "\
from rate_limiter_logger import RateLimiterLogger; \
logger = RateLimiterLogger(); \
logger.generate_report(); \
			" \
	)
	cp ../rate_limiter_logs/report.png $@
