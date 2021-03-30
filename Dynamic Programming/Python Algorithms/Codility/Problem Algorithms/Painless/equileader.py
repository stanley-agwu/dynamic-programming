#Codility EquiLeader problem


#Poor Solution **44%**
def equileader(A):
    def dominator_helper(B):
        M = len(B)
        size = 0
        value = 0
        count = 0
        candidate = 0
        if (M == 2):
            if (B[0] != B[1]): return 0
            else: return B[0]

        for i in range(M):
            if (size == 0):
                size += 1
                value = B[i]
            elif (B[i] != value):
                size -= 1
            else:   size += 1
        
        if (size > 0): candidate = value
        for i in range(M):
            if (B[i] == candidate):
                count += 1
        if (count > M//2):  return candidate
        else:   return 0

    N = len(A)
    if (N == 1): return 0
    if (N == 2):
            if (A[0] != A[1]): return 0
            else: return 1
    count_EquiLeader = 0
    for i in range(N - 1):
        K = [A[num] for num in range(N) if (num >= 0 and num <= i)]
        L = [A[num] for num in range(N) if (num > i and num < N)]
        
        Q = dominator_helper(K)
        R = dominator_helper(L)
        # print(K, L)
        # print(Q, R)
        if (( Q != 0 or R != 0) and Q == R):
            count_EquiLeader += 1
    return count_EquiLeader


  


print(equileader([4, 3, 4, 4, 4, 2]))
print(equileader([1, 2]))
print(equileader([1, 2, 3, 4, 5]))
print(equileader([1, 2, 2, 1, 2, 2]))
print(equileader([1,2,1,2,1,2,1,2,3,1]))