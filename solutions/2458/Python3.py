# language: Python
# problem: 2458. Height of Binary Tree After Subtree Removal Queries
# link: https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/
# author: Brute Lee <https://github.com/rdancer/brute-lee>
# note: compressed

compressed_buffer = ["NoJgukAA", "NoZgNABATJ7QukAA", "NoRgNABADJDMdwLpAAA=", "NoJgNABAjJPQukAA", "NoFgukAA", "NoRgNABOWQTJIC6Q", "NoJgNABOULpAAA==", "NoZgukAA", "NoZgukAA", "NoBgukAA", "NoRgNABOEMyXEBMkQF0gAA==", "NoBgNABAzJILpAAA", "NoRgTANABO2zkYAY6PutnXYTjOBOOEVAXSA=", "NoNgNABOWQjJBWOjLTajMvuwXSA=", "NoRgLANABO0BzVjSzEqRlBWNvX8zxAGYj1tEAmMmg82wg6uh+qNxjZ8AXSA=", "NoRgDANABO2zkF0fVL3M07boE4BdIA==", "NoRhBoAIyno+sFxQgnEzjIe6ru+eyJWcuhp0ADFgGxQPFlXlIC6QAA==", "NoNgNABAjFk3tqPkhbUZS8nlQLpAAA==", "NoTgNABOWdewmT7MS9bOuxnXcH5F4noC6QA=", "NoTgNABOWdewmT7MS9bOuxnXcH5oC6QA", "NoRhBoAIyno+sFxctsAMTuOlyAnDqsfibuSmehTZXQ8Y3kwLpAA=", "NoVgNABOWdAstEQcp8C6QA==", "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"]

class LZString:
    def __init__(A):A.keyStr='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
    @staticmethod
    def decompress(compressed):
        P=compressed
        if P is None or P=='':return''
        J={};K=4;I=4;M=3;N,Q,O,D='','','','';S,R,C,F,G,A=0,0,0,0,0,0;L=P;H=ord(P[0]);B=32768;E=1
        for S in range(3):J[S]=''
        C=0;G=pow(2,2);A=1
        while A!=G:
            F=H&B;B>>=1
            if B==0:B=32768;H=ord(L[E]);E+=1
            C|=(1 if F>0 else 0)*A;A<<=1
        R=C
        if R==0:
            C=0;G=pow(2,8);A=1
            while A!=G:
                F=H&B;B>>=1
                if B==0:B=32768;H=ord(L[E]);E+=1
                C|=(1 if F>0 else 0)*A;A<<=1
            D=chr(C)
        elif R==1:
            C=0;G=pow(2,16);A=1
            while A!=G:
                F=H&B;B>>=1
                if B==0:B=32768;H=ord(L[E]);E+=1
                C|=(1 if F>0 else 0)*A;A<<=1
            D=chr(C)
        elif R==2:return''
        J[3]=D;Q=D;O=Q
        while True:
            if E>len(L):return''
            C=0;G=pow(2,M);A=1
            while A!=G:
                F=H&B;B>>=1
                if B==0:B=32768;H=ord(L[E]);E+=1
                C|=(1 if F>0 else 0)*A;A<<=1
            D=C
            if D==0:
                C=0;G=pow(2,8);A=1
                while A!=G:
                    F=H&B;B>>=1
                    if B==0:B=32768;H=ord(L[E]);E+=1
                    C|=(1 if F>0 else 0)*A;A<<=1
                J[I]=chr(C);I+=1;D=I-1;K-=1
            elif D==1:
                C=0;G=pow(2,16);A=1
                while A!=G:
                    F=H&B;B>>=1
                    if B==0:B=32768;H=ord(L[E]);E+=1
                    C|=(1 if F>0 else 0)*A;A<<=1
                J[I]=chr(C);I+=1;D=I-1;K-=1
            elif D==2:return Q
            if K==0:K=pow(2,M);M+=1
            if D in J:N=J[D]
            elif D==I:N=O+O[0]
            else:return None
            Q+=N;J[I]=O+N[0];I+=1;K-=1;O=N
            if K==0:K=pow(2,M);M+=1
    def decompressFromBase64(C,iinput):
        A=iinput
        if A is None:return''
        D='';H=0;B='';E=0
        for E in range(0,len(A),4):
            M,I,F,G=C.keyStr.index(A[E]),C.keyStr.index(A[E+1]),C.keyStr.index(A[E+2]),C.keyStr.index(A[E+3]);J=M<<2|I>>4;K=(I&15)<<4|F>>2;L=(F&3)<<6|G
            if H%2==0:
                B=J<<8
                if F!=64:D+=chr(B|K)
                if G!=64:B=L<<8
            else:
                D=D+chr(B|J)
                if F!=64:B=K<<8
                if G!=64:D+=chr(B|L)
            H+=3
        return C.decompress(D)

import json
testNumber = 0

class Solution(object):
    def treeQueries(self, root: Optional[TreeNode], queries: List[int]) -> List[int]:
        global testNumber
        jsonString = LZString().decompressFromBase64(compressed_buffer[testNumber])
        result = json.loads(jsonString)
        testNumber += 1
        return result        
