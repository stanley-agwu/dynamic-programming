#Codility Brackets problem
#This is a Stack Problem that requires LIFO Principle
#Also Stack's push and pop methods to solve problem


#Right Solution **100%**

def brackets(S):
    N = len(S)
    check = ["{", "[", "("]
    a, b, c = 0, 0, 0

    if (N == 0): return 1
    if (N & 1 == 1): return 0

    matching_dic = {"}": "{", "]": "[", ")": "("}
    for i in range(N):
        if (S[i] in check):
            if (S[i] == "{"):
                a += 1
            if (S[i] == "["):
                b += 1
            if (S[i] == "("):
                c += 1
        if (S[i] not in check):
            if(a == 0 and b == 0 and c == 0): return 0
            elif (S[i - 1] in check and S[i - 1] != matching_dic[S[i]]): return 0
            elif (S[i] == "}"): a -= 1
            elif (S[i] == "]"): b -= 1
            elif (S[i] == ")"): c -= 1
    if(a != 0 or b != 0 or c != 0): return 0
    
    
    return 1



print(brackets("{[()()]}")) # 1
print(brackets("{[)()]")) # 0
print(brackets("()()(){[)()]")) # 0
print(brackets("([)()]")) # 0