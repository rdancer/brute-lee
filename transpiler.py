"""
transpiler.py -- Transpiles between LeetCode solution languages
"""

import json


class Solution:
    """The bare solution, this is a stringified JSON object. It is stored in `solution.json`"""

    def __init__(self, problem, problem_url, solution_text):
        self.problem = problem
        self.url = problem_url
        self.solution = json.loads(solution_text)
    
    def __str__(self):
        return json.dumps(self.solution)
    
    def c_formatted(self, indent=0):
        if isinstance(self.solution, list):
            space = ' ' * indent
            inner_space = ' ' * (indent + 2 if indent else 0)
            parts = [space + '{']
            for item in self.solution:
                if isinstance(item, list):
                    parts.append(self.c_formatted(item, indent + 2 if indent else 0) + ',')
                else:
                    parts.append(inner_space + str(item) + ',')
            parts.append(space + '}')
            return '\n'.join(parts)
        return str(self.solution)


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
            f"int buffer[] = {self.solution.c_formatted()};\n\n"
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
            f"        int buffer[{len(self.solution)}] = {self.solution.c_formatted()};\n"
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
            f"{indent*2}buffer = {self.solution}\n"
            f"{indent*2}result = buffer[testNumber]\n"
            f"{indent*2}testNumber += 1\n"
            f"{indent*2}return result"
        )

class Python3(Python):
    pass