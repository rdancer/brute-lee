SQLITE = sqlite3 $(DATABASE)
DATABASE = sqlite3.db
SOLUTIONS_PATH = ../solutions/

.PHONY: update_database
update_database: $(DATABASE)
	test -f $(DATABASE) || { echo 'The `make database` command must be run first' >&2; exit 1; }
	find $(SOLUTIONS_PATH) -type f \
	| grep -v -e [A-Z]$$ -e '\.log$$' \
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

# The `index.html` is good for glancing at the whole and seeing what is done
# and roughly to what extent, but it won't be able to convey the difference
# between 16 languages solved vs 17 languages solved at a glance
index.html: style.css update_database
	rm -f index.html
	cat index.html.in >> index.html
	{ \
	    $(SQLITE) 'select problem_id, count from coverage order by problem_id' \
	    | tr '|' ' ' \
	    | while read problem_id count; do \
		echo "<div class='square count_$$count' data-count='$$count' data-problem-id='$$problem_id'></div>"; \
	    done \
	    | tr -d '\n'; \
	    echo; \
	} >> index.html
	echo '</div class="squares"><pre class="language-breakdown">' >> index.html
	{ \
	    make get_db_columns \
	    | while read language; do \
		echo $$($(SQLITE) "select count($$language) from coverage") $$(echo "$$language" | sed 's@_sharp@#@;s@_plus@+@g'); \
	    done; \
	} \
	| sort -nr \
	| awk '{ printf "%-10s: %4d\n", $$2, $$1 }' \
	>> index.html; \
	echo '</pre>' >> index.html
	{ \
	    echo '<pre class="productivity">'; \
	    echo 'Recent productivity:'; \
	    make get_daily_productivity | head -n 10; \
	    echo '</pre>'; \
	} >> index.html; \

# The `coverage.md` will be useful for lookig up what errors and why, as every
# problem x language combination has its own cell, but the table is extremely
# large, so good for lookups, but not for taking in the whole.
.PHONY: coverage.md
coverage.md: update_database
	make get_table_headings get_separator get_table_body > coverage.md

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
	| sed 's@_sharp@#@;s@_plus@+@g' \
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

.PHONY: create_database
create_database:
	$(SQLITE) 'create table coverage(problem_id int primary key, count int, C_sharp text, C_plus_plus text, C text, Dart text, Erlang text, Elixir text, Go text, Java text, Kotlin text, PHP text, Python text, Python3 text, Racket text, Ruby text, Rust text, Scala text, Swift text, TypeScript text, JavaScript text)'

.PHONY: insert_a_row_for_every_problem
insert_a_row_for_every_problem:
	printf "Creating `make get_max_problem_id` rows, this will take a while" >&2
	for problem_id in $$(seq `make get_max_problem_id`); do \
	    printf . >&2; \
	    $(SQLITE) "insert into coverage (problem_id) values ($$problem_id)"; \
	done

.PHONY: get_count_command
get_count_command:
	@: Note: IIF is Sqlite3 extension to SQL, basically a condensed CASE
	@make get_db_columns | sed "s@.*@iif (& = 'Y', 1, 0) +@" | tr '\n' ' '; echo 0

.PHONY: update_solved_count
update_solved_count:
	$(SQLITE) "update coverage set count = $$( make get_count_command )"


.PHONY: all
all: database index.html coverage.md

.PHONY: clean
clean:
	rm -f $(DATABASE)
	rm -f index.html
	rm -f coverage.md

.PHONY: get_daily_productivity
get_daily_productivity:
	@git log \
	| grep -B2 'Publish solutions/' \
	| grep Date \
	| sed 's/Date: *//' \
	| awk '{ count[$$2 " " sprintf("%2d", $$3)]++ } END { for (date in count) print date": "sprintf("%5d", count[date]) }' \
	| sort -k1,1M -k2,2n \
	| tac
