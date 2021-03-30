#Codility permMissingElem Problem

## Right Solution **100%**
def permMissingElem(A):
    N = len(A)

    if ( N == 0): return 1

    xor_sum = 0
    
    for i in range(N):
        xor_sum = xor_sum ^ (i + 1) ^ A[i]
    return xor_sum ^ N + 1

print(permMissingElem([2, 3, 1, 5]))
print(permMissingElem([]))