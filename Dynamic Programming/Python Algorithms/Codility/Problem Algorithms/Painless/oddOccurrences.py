#Codility OddOccurrencesInArray Problem

## Average Solution **100%**
def OddOccurrence(A):
    dict = {}
    if (len(A) == 1): return A[0]

    for num in A:
        if(num in dict): dict[num] += 1
        else: dict[num] = 1

    for key in dict:
        if(dict[key] & 1 == 1): return key

print(OddOccurrence([9, 3, 9, 3, 9, 7, 9])) # 7

## Better Solution **100%**

def solution(A):
    result = 0
    for number in A:
        result ^= number
    return result

print(solution([9, 3, 9, 3, 9, 7, 9])) # 7