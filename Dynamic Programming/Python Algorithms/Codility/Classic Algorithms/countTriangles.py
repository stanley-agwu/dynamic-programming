# Codility Count Triangular Triplets Problems

#The number of triangles in O(n^2)

# Problem: You are given n sticks. The goal is to count the 
# number of triangles that can be constructed using these sticks. 
# More precisely, we have to count the number of triplets at 
# indices x < y < z, such that a(x) + a(y) > a(z)

def triangles(A):
    n = len(A)
    A.sort()
    result = 0
    for x in range(n):
        z = x + 2
        for y in range(x + 1, n):
            while (z < n and A[x] + A[y] > A[z]):
                z += 1
            result += z - y - 1
    return result

# [10, 2, 5, 1, 8, 12]