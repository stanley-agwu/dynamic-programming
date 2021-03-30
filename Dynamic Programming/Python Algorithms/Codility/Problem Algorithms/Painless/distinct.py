#Codility Distinct Values problem


#Right Solution **100%**
def distinct(A):
    N = len(A)

    if (N == 0): return 0

    result_set = set ()
    i = 0
    while(i < N):
        result_set.add(A[i])
        i += 1
    return len(result_set)

print(distinct([2, 1, 1, 2, 3, 1]))
print(distinct([ ]))
print(distinct([2, 1, 3, 2, 3, 1, 0, -45, -3, 99]))
