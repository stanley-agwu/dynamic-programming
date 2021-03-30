#Codility Cyclic Rotation problem


#Average Solution **100%**
def cyclic(A, k):
    N = len(A)
    Array = A
    if N == 0 or N == 1: return A
    
    for i in range(k):
        Array_loop = [0] * N
        for j in range(N):
            if(j + 1 <= (N - 1)):
                Array_loop[j + 1] = Array[j]
            else:
                Array_loop[0] = Array[j]
            #print(Array_loop)
        Array = Array_loop

    return Array


#Good Solution **100%**
def solution(A, K):

    if len(A) == 0:
        return A
    K = K % len(A)
    return A[-K:] + A[:-K]

        
print(cyclic([3, 8, 9, 7, 6], 3)) # [9, 7, 6, 3, 8]
print(cyclic([1, 2, 3, 4], 4)) # [1, 2, 3, 4]
print(solution([3, 8, 9, 7, 6], 3)) # [9, 7, 6, 3, 8]
print(solution([1, 2, 3, 4], 4)) # [1, 2, 3, 4]