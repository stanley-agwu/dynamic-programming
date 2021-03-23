#Maximum Slice Method

# Let’s define a problem relating to maximum slices. You are given a 
# sequence of n integers a0, a1, . . . , a[n−1] and the task is to find 
# the slice with the largest sum. More precisely, we are looking for two 
# indices p, q such that the total ap + ap+1 + . . . + aq is maximal. 
# We assume that the slice can be empty and its sum equals 0.

#Brute Force Method => O(n^3)
def slow_max_slice(A):
    n = len(A)
    result = 0
    for p in range(n):
        for q in range(p, n):
            sum = 0
            for i in range(p, q + 1):
                sum += A[i]
            result = max(result, sum)
    return result

#Better Method 1 => O(n^2) 
def quadratic_max_slice(A):
    def prefix_sums(A):
        n = len(A)
        Pref = [0] * (n + 1)
        for k in range(1, n + 1):
            Pref[k] = Pref[k - 1] + A[k - 1]
        return Pref

    n = len(A), result = 0
    pref = prefix_sums(A)
    for p in range(n):
        for q in range(p, n):
            sum = pref[q + 1] - pref[p]
        result = max(result, sum)
    return result

#Better Method 2 => O(n^2) 
def quadratic_max_slice(A):
    n = len(A), result = 0
    for p in range(n):
        sum = 0
        for q in range(p, n):
            sum += A[q]
        result = max(result, sum)
    return result

#Best (Golden) Method => O(n) 
def golden_max_slice(A):
    max_ending = max_slice = 0
    for a in A:
        max_ending = max(0, max_ending + a)
        max_slice = max(max_slice, max_ending)
    return max_slice