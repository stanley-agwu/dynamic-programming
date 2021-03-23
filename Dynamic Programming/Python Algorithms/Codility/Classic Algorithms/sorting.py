#Sorting Algorithms

# Sorting is the process of arranging data in a certain order. Usually, 
# we sort by the value of the elements. We can sort numbers, words, 
# pairs, etc. For example, we can sort students by their height, and 
# we can sort cities in alphabetical order or by their numbers of 
# citizens. The most-used orders are numerical order and alphabetical 
# order.

#Selection sort — O(n^2)
# The idea: Find the minimal element and swap it with the first element 
# of an array. Next, just sort the rest of the array, without the first 
# element, in the same way. Notice that after k iterations (repetition 
# of everything inside the loop) the first k elements will be sorted in 
# the right order (this type of a property is called the loop invariant).
def selectionSort(A):
    n = len(A)
    for k in range(n):
        minimal = k
        for j in range(k + 1, n):
            if (A[j] < A[minimal]):
                minimal = j
                A[k], A[minimal] = A[minimal], A[k] 
                # swap A[k] and A[minimal]
    return A

#Counting sort — O(n + k)
#Golden Sort Algorithm  || Can this sort negative numbers?

# Notice that we have to know the range of the sorted values. If all the 
# elements are in the set {0, 1, . . . , k}, then the array used for 
# counting should be of size k + 1. The limitation here may be 
# available memory.
def countingSort(A, k):
    n = len(A)
    
    count = [0] * (k + 1)
    for i in range(n):
        count[A[i]] += 1
    p = 0
    for i in range(k + 1):
        for j in range(count[i]):
            A[p] = i
            p += 1
    return A

# The time complexity here is O(n + k). We need additional memory O(k)
# to count all the elements. At first sight, the time complexity of 
# the above implementation may appear greater. However, all the 
# operations in lines 43 and 44 are performed not more than O(n) times.



#The number of distinct values — O(n log n).
# Problem: You are given a zero-indexed array A consisting of n > 0 
# integers; you must return the number of unique values in array A.
# Solution O(n log n): First, sort array A; similar values will then be 
# next to each other. Finally, just count the number of distinct pairs 
# in adjacent cells.

#The number of distinct values — O(n log n).
def distinct(A):
    n = len(A)
    A.sort()
    result = 1
    for k in range(1, n):
        if A[k] != A[k - 1]:
            result += 1
    return result

#The time complexity is O(n log n), in view of the sorting time.
