#Codility Permutation Check problem

## Right Solution **100%**
def permCheck(A):
    N = len(A)

    xor_num = 0
    for i in range(N):
        xor_num = xor_num ^ (i + 1) ^ A[i]
    
    if (xor_num == 0): return 1
    else: return 0



print(permCheck([4, 1, 3, 2]))
print(permCheck([4, 1, 3]))
print(permCheck([4]))
print(permCheck([4, 1, 3, 5, 5]))
print(permCheck([1]))
