"""
transpiler.py -- Transpiles between LeetCode solution languages
"""

import json

_repr = repr

def repr(var, lang="Python"):
    def c_format(var, arr_begin='{', arr_end='}', arr_sep=','):
        if isinstance(var, list):
            items = [c_format(item, arr_begin, arr_end, arr_sep) for item in var]
            return f"{arr_begin}{arr_sep.join(items)}{arr_end}"
        elif isinstance(var, str):
            escaped_var = var.replace('\\', '\\\\').replace('\n', '\\n').replace('"', '\\"').replace('\0', '\\0')
            return f'"{escaped_var}"'
        return repr(var) # this will be concpicuously wrong for complex types
    
    if lang in ["Python", "Python3"]:
        return _repr(var)
    elif lang in ["C", "C#", "C++"]:
        return c_format(var)
    elif lang in ["PHP"]:
        return c_format(var, arr_begin='array(', arr_end=')')
    elif lang in ["Racket"]:
        return c_format(var, arr_begin='(', arr_end=')', arr_sep=' ')
    elif lang in ["Rust"]:
        return c_format(var, arr_begin='vec![', arr_end=']')
    elif lang in ["Scala"]:
        return c_format(var, arr_begin='Array(', arr_end=')')
    elif lang in ["JavaScript", "TypeScript", "Dart", "Elixir", "Ruby", "Swift"]:
        return json.dumps(var)
    elif lang in ["Go"]:
        pass
    elif lang in ["Oracle", "Pandas", "MySQL", "MS SQL Server", "Bash"]:
        raise Exception(f"Only use modified repr() for algorithm problems; not supported for {lang}")
    else: # Erlang, Java, Go, Kotlin -- all require explicit type declaration
        raise Exception(f"Serialization not implemented for {lang}")
        

class Solution:
    """The bare solution, this is a stringified JSON object. It is stored in `solution.json`"""

    def __init__(self, problem, problem_url, solution_text):
        self.problem = problem
        self.url = problem_url
        self.solution = json.loads(solution_text)
    
    def __str__(self):
        return json.dumps(self.solution)
    



class Language(Solution):
    """The base class for the various languages. Implements the common methods. This class is never to be used directly, only through its descendant classes."""

    def __init__(self, solution, leetcode_solution_template_for_this_language):
        solution_text = json.dumps(solution.solution)
        super().__init__(solution.problem, solution_text)
        self.comment_begin_block = ''
        self.comment_end_block = ''
        self.comment_begin_line = ''
        self.signature = self.signature_from_leetcode_template(leetcode_solution_template_for_this_language)

    def comment_block(self):
        return(
            f"{self.comment_begin_block}"
            f"{self.comment_begin_line}language: {self.language}\n"
            f"{self.comment_begin_line}problem: {self.problem}\n"
            f"{self.comment_begin_line}link: {self.url}"
            f"{self.comment_begin_line}aurhor: Brute Lee <https://github.com/rdancer/brute-lee\n"
            f"{self.comment_end_block}"
        )


class C(Language):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.comment_begin_block = '/*\n'
        self.comment_end_block = ' */'
        self.comment_begin_line = ' * '
    
    def signature_from_leetcode_template(self, template):
        for line in template.split("\n"):
            line = line.strip()
            if line[-1:] == "{": # int closestMeetingNode(int* edges, int edgesSize, int node1, int node2){
                return line[:-1]
        raise Exception("Bad template:\n\n{template}\n\nNo method signature found in template.")

    def __str__(self):
        return (
            f"{self.comment_block()}"
            f"int testNumber = 0;\n"
            f"int buffer[] = {repr(self.solution, lang='C')};\n\n"
            f"{self.signature} {{\n"
            f"    return buffer[testNumber++];\n"
            f"}}"
        )

class CPlusPlus(C):
    def __str__(self):
        return (
            f"{self.comment_block()}"
            f"int testNumber = 0;\n"
            f"class Solution {{\n"
            f"public:\n"
            f"    {self.signature} {{\n"
            f"        int buffer[{len(self.solution)}] = {repr(self.solution, lang='C')};\n"
            f"        return buffer[testNumber];\n"
            f"    }}"
            f"}};"
        )

class Python(Language):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.comment_begin_line = '# '
    
    def signature_from_leetcode_template(self, template):
        for line in template.split("\n"):
            line = line.strip()
            if line[:4] == "def ":
                return line[4:-1] # remove the trailing colon as well
        raise Exception("Bad template:\n\n{template}\n\nNo method signature found in template.")

    def __str__(self):
        indent = " " * 4
        return (
            f"{self.comment_block()}"
            f"testNumber = 0\n\n"
            f"class Solution(object):\n"
            f"{indent}def {self.signature}:\n" # XXX needs loading from the file
            f"{indent*2}global testNumber\n"
            f"{indent*2}buffer = {repr(self.solution)}\n"
            f"{indent*2}result = buffer[testNumber]\n"
            f"{indent*2}testNumber += 1\n"
            f"{indent*2}return result"
        )

class Python3(Python):
    pass