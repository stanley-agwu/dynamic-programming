# Leader Algorithm

# Let us consider a sequence a0, a1, . . . , an−1. The leader of this
#  sequence is the element whose value occurs more than n/2 times.
# The leader may be found in many ways. We describe some methods here, 
# starting with trivial, slow ideas and ending with very creative, 
# fast algorithms. The task is to find the value of the leader of the 
# sequence a0, a1, . . . , a[n−1], such that 0 <= ai <= 10^9. If there is 
# no leader, the result should be -1.

# Solution with O(n^2) time complexity
# We count the occurrences of every element:
#Leader — O(n^2)
def slowLeader(A):
    n = len(A)
    leader = -1
    for k in range(n):
        candidate = A[k]
        count = 0
        for i in range(n):
            if (A[i] == candidate):
                count += 1
        if (count > n // 2):
            leader = candidate
    return leader

# Leader — O(n log n)
#The time complexity of the above algorithm is O(n log n) 
# due to the sorting time.
def fastLeader(A):
    n = len(A)
    leader = -1
    A.sort()
    candidate = A[n // 2]
    count = 0
    for i in range(n):
        if (A[i] == candidate):
            count += 1
    if (count > n // 2):
        leader = candidate
    return leader

# Leader — O(n)
# Model (Golden) Solution
def goldenLeader(A):
    n = len(A)
    size = 0
    value = 0
    for k in range(n):
        if (size == 0):
            size += 1
            value = A[k]
        else:
            if (A[k] != value):
                size -= 1
            else:
                size += 1
    candidate = -1
    if (size > 0):
        candidate = value
    leader = -1
    count = 0
    for k in range(n):
        if (A[k] == candidate):
            count += 1
    if (count > n // 2):
        leader = candidate
    return leader


print(slowLeader([6, 8, 4, 6, 8, 6, 6]))
print(fastLeader([6, 8, 4, 6, 8, 6, 6]))
print(goldenLeader([6, 8, 4, 6, 8, 6, 6]))