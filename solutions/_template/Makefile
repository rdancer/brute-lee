TEMPLATE_DIR = ../_template
ALL_LANGUAGES = C\#.cs C++.cpp C.c Dart.dart Elixir.ex.DOES_NOT_WORK Erlang.erl Go.go Java.java JavaScript.js Kotlin.kt PHP.php Python.py Python3.py Racket.rkt Ruby.rb Rust.rs Scala.scala Swift.swift TypeScript.ts

CC = gcc
MAKE = make -f ../_template/Makefile

AUTHOR := Brute Lee <https://github.com/rdancer/brute-lee>

SOLUTION_JSON = solution.json
BUFFER_JSON = $(shell cat $(SOLUTION_JSON))
BUFFER_C = `printf "%s" "$(BUFFER_JSON)" | sed 's@\[@{@g;s@\]@}@g;'` # XXX this will fail if we have strings with embedded '[' or ']'
.PHONY: nothing
nothing:
	@echo "Please specify target." >&2
	@echo "Aborting; nothing done." >&2
	@exit 1

.PHONY: all
all: $(ALL_LANGUAGES)

$(SOLUTION_JSON): JavaScript.js
	cat $^ \
	| grep  '^[[:space:]]*return[[:space:]]' \
	| sed 's@^[[:space:]]*return[[:space:]]@@;s@,[[:space:]]*$$@]@' \
	> $@

.PHONY: header
header:
	@comment="`sed '/\*\//q' < JavaScript.js`"; \
	problem="`echo "$$comment" | grep problem: | sed 's@^[[:space:]]*\*[[:space:]]*problem:[[:space:]]*@@'`"; \
	link="`echo "$$comment" | grep link: | sed 's@^[[:space:]]*\*[[:space:]]*link:[[:space:]]*@@'`"; \
	\
	[ x"$$BEGIN_COMMENT" = x ] || echo "$$BEGIN_COMMENT"; \
	echo "$$COMMENT language: $$LANGUAGE"; \
	echo "$$COMMENT problem: $$problem"; \
	echo "$$COMMENT link: $$link"; \
	echo "$$COMMENT author: $(AUTHOR)"; \
	[ x"$$END_COMMENT" = x ] || echo "$$END_COMMENT";

.PHONY: generic
generic:
	@$(MAKE) header
	@# -E: Stop after preprocessing the source file.
	@# -P: Do not generate line markers in the output.
	@# -C: Do not discard comments.
	@# -D<macro>: Define a macro (optional).
	$(CC) -E -P -C -o /dev/stdout -x c \
		-DSIGNATURE="$$SIGNATURE" \
		-DRETURN_TYPE="$$RETURN_TYPE" \
		-DBUFFER="$$BUFFER" \
		"$(TEMPLATE_DIR)/$$LANGUAGE.template" \

.PHONY: cs
cs: C\#.cs
C\#.cs: C\#.IN solution.json
	language="`basename $@ | sed 's@\.[^.]*@@'`"; \
	signature="`cat "$<" | grep public | head -n1 | sed 's@{@@'`"; \
	return_type="`echo "$$signature" | awk '{ print $$1 }'`"; \
	\
	LANGUAGE="$$language" \
	SIGNATURE="$$signature" \
	RETURN_TYPE="$$return_type" \
	BUFFER="$(BUFFER_C)" \
	BEGIN_COMMENT="/*" \
	COMMENT=" *" \
	END_COMMENT=" */" \
	$(MAKE) generic #> $@

C++.cpp: C++.IN solution.json

C.c: C.IN solution.json
	language="`basename $@ | sed 's@\.[^.]*@@'`"; \
	signature="`cat "$<" | grep . | head -n1 | sed 's@{@@'`"; \
	return_type="`echo "$$signature" | awk '{ print $$1 }'`"; \
	\
	LANGUAGE="$$language" \
	SIGNATURE="$$signature" \
	RETURN_TYPE="$$return_type" \
	BUFFER="$(BUFFER_C)" \
	BEGIN_COMMENT="/*" \
	COMMENT=" *" \
	END_COMMENT=" */" \
	$(MAKE) generic > $@
	    
Dart.dart: Dart.IN solution.json

#Elixir.ex.DOES_NOT_WORK: Elixir.ex.IN solution.json

Erlang.erl: Erlang.IN solution.json

Go.go: Go.IN solution.json

Java.java: Java.IN solution.json

#JavaScript.js: JavaScript.IN solution.json

Kotlin.kt: Kotlin.IN solution.json

PHP.php: PHP.IN solution.json

Python.py: Python.IN solution.json

Python3.py: Python3.IN solution.json
	language="`basename $@ | sed 's@\.[^.]*@@'`"; \
	signature="`cat "$$language.IN" | grep '^[[:space:]]*def[[:space:]]' | tail -n1 | sed 's@^.*def *\(.*\): *$$@\1@'`"; \
	\
	LANGUAGE="$$language" \
	SIGNATURE="$$signature" \
	RETURN_TYPE="" \
	BUFFER="$(BUFFER_JSON)" \
	COMMENT="#" \
	END_COMMENT=" " \
	$(MAKE) generic > $@

Racket.rkt: Racket.IN solution.json

Ruby.rb: Ruby.IN solution.json

Rust.rs: Rust.IN solution.json

Scala.scala: Scala.IN solution.json

Swift.swift: Swift.IN solution.json

TypeScript.ts: TypeScript.IN solution.json

.PHONY: LARGE-C\#.cs
LARGE-C\#.cs:
.PHONY: LARGE-C++.cpp
LARGE-C++.cpp:
.PHONY: LARGE-C.c
LARGE-C.c:
.PHONY: LARGE-Dart.dart
LARGE-Dart.dart:
#.PHONY: LARGE-Elixir.ex
#LARGE-Elixir.ex:
.PHONY: LARGE-Erlang.erl
LARGE-Erlang.erl:
.PHONY: LARGE-Go.go
LARGE-Go.go:
.PHONY: LARGE-Java.java
LARGE-Java.java:
.PHONY: LARGE-JavaScript.js
LARGE-JavaScript.js:
.PHONY: LARGE-Kotlin.kt
LARGE-Kotlin.kt:
.PHONY: LARGE-PHP.php
LARGE-PHP.php:
.PHONY: LARGE-Python.py
LARGE-Python.py:
.PHONY: LARGE-Python3.py
LARGE-Python3.py:
.PHONY: LARGE-Racket.rkt
LARGE-Racket.rkt:
.PHONY: LARGE-Ruby.rb
LARGE-Ruby.rb:
.PHONY: LARGE-Rust.rs
LARGE-Rust.rs:
.PHONY: LARGE-Scala.scala
LARGE-Scala.scala:
.PHONY: LARGE-Swift.swift
LARGE-Swift.swift:
.PHONY: LARGE-TypeScript.ts
LARGE-TypeScript.ts:
