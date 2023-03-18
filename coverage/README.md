To generate the full report, run `make clean && make all`.

To merely update the database afterwards, just run `make` without arguments.

To generate just one of the reports, run either `make index.html` or `make coverage.md`.

There are two reports:

* [index.html](https://htmlpreview.github.io/?https://github.com/rdancer/brute-lee/main/coverage/index.html) is a high-level overview of the coverage
* [coverage.md](./coverage.md) is a detailed table which can be used to gather errors
  reported during solving (not implemented yet)

The whole thing should be put on a website, I'm not going to commit the
uploaded report with every solved problem, that would make the whole repo
humungous.

# Dependencies

* `webkit2png`
* `sqlite3`
* `coreutils`

The toolchain is unabashedly based in OS X / Homebrew, but with minor changes will run on other Unix-like platforms.
