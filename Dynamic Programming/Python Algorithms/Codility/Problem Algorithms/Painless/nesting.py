#Codility Brackets problem


#Right Solution **100%**
def nesting(S):
    N = len(S)

    if (N == 0): return 1
    if (N & 1 == 1): return 0
    if (S[0] == ")" ): return 0

    a = 0
    for i in range(N):
        if (S[i] == "("): a += 1
        elif (S[i] == ")"): a -= 1
        if (a < 0): return 0

    if(a != 0): return 0
    else: return 1

print(nesting("(()(())())"))
print(nesting("())"))
print(nesting(")("))
print(nesting("()()()()())("))
print(nesting("(())(((())()))"))
print(nesting("(())(((()())))"))