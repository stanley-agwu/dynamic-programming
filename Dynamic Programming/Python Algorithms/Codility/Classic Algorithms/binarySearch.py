#Binary Search Algorithms

# This function accepts a sorted array and a value.
# Create a left pointer at the start of the array, 
# and a right pointer at the end of the array.
# While the left pointer comes before the right.

def binarySearch(A, x):
    n = len(A)
    beg = 0
    end = n - 1
    result = -1
    while (beg <= end):
        mid = (beg + end)// 2
        if (A[mid] == x): 
            result = mid 
            return result
        elif (A[mid] < x):  beg = mid + 1
        else:   end = mid - 1
    return result


#Using Greedy Check Algorithm
def check(A, k):
    n = len(A)
    boards = 0
    last = -1
    for i in range(n):
        if A[i] == 1 and last < i:
            boards += 1
            last = i + k - 1
    return boards

#Finding Holes on a roof and covering them with boards
def boards(A, k):
    n = len(A)
    beg = 1
    end = n
    result = -1
    while (beg <= end):
        mid = (beg + end) / 2
        if (check(A, mid) <= k):
            end = mid - 1
            result = mid
        else:
            beg = mid + 1
    return result


