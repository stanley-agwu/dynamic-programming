# Find the longest sub-array with sum S
# Using the Caterpillar Method (with pointers)

def longestSubArray(A, S):
    N = len(A) 
    result = value = sum = left = right = 0
    pointers = []
    pointA = pointB =  0

    while (left < N):
        while (right < N and sum <= S):
            pointA = left
            sum += A[right]

            if(sum == S): pointB = right
            
            right += 1

        if (sum > S): sum -= A[left]

        value = pointB - pointA
        if (value > result): pointers = [pointA, pointB]
        result = max(value, result)
        
        left += 1

    return pointers



print(longestSubArray([ 0, 0, 0, 0, 7, 0, 0, 0, 8, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 6, 7, 8, 9, 10], 15))