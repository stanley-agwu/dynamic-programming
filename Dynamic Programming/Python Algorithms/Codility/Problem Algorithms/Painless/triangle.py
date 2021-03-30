#Codility Triangle problem


#Right Solution **100%**
def triangle(A):
    N = len(A)

    if (N < 3): return 0

    A.sort()
    for i in range(N - 2):
        if(A[i] + A[i + 1] > A[i + 2]): return 1
    return 0


print(triangle([10, 2, 5, 1, 8, 20]))
print(triangle([2, 5 ]))
print(triangle([10, 50, 5, 1]))