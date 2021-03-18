#Caterpillar Method

# Check whether a sequence contains a contiguous subsequence 
# whose sum of elements equals s. For example, for a sequence A 
#  we are looking for a subsequence whose total equals s = 12

def caterpillarMethod(A, s):
    N = len(A)
    right, total = 0, 0
    for left in range(N):
        while (right < N and total + A[right] <= s):
            total += A[right]
            right += 1    
        if total == s:
            return True
        total -= A[left]

print(caterpillarMethod([6, 2, 7, 4, 1, 3, 6], 12))


#The number of triangles in O(n^2)

# Problem: You are given n sticks. The goal is to count the 
# number of triangles that can be constructed using these sticks. 
# More precisely, we have to count the number of triplets at 
# indices x < y < z, such that a(x) + a(y) > a(z)

def triangles(A):
    n = len(A)
    result = 0
    A.sort()
    for x in range(n):
        z = x + 2
        for y in range(x + 1, n):
            while (z < n and A[x] + A[y] > A[z]):
                z += 1
            result += z - y - 1
    return result

# [10, 2, 5, 1, 8, 12]