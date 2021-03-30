#Codility Max Product Of Three problem

#Good Solution ****100%*****Without The Use of sort()
def solution(A):
    N = len(A)
    if (N == 3):
        return A[0] * A[1] * A[2]
    min1 = min(A)
    A.remove(min1)
    min2 = min(A)
    A.remove(min2)
    max1 = max(A)
    A.remove(max1)
    
    if (N == 4):
        return max(min2 * min1 * max1, max1 * min2 * A[0])

    max2 = max(A)
    A.remove(max2)
    max3 = max(A)

    return max(min2 * min1 * max1, max1 * max2 * max3)

# Right Solution ****100%*****Use of sort()
def solution2(A):
    A.sort()
    return max(A[0]*A[1]*A[-1], A[-1]*A[-2]*A[-3])

# Time Complexity: O(nLogn) Becos of sort()
# Space Complexity: O(1)
   
#Best (Golden)  Solution ****100%*****
def solution3(A):
    N = len(A)
    B = max(A)
    C = min(A)
    
    min1 = B
    min2 = B
    max1 = C
    max2 = C
    max3 = C

    if (N == 3):
        return A[0] * A[1] * A[2]
    
    if (N == 4):
        for i in range(N):
            #Getting min values
            if(A[i] < min1):
                min2 = min1
                min1 = A[i]
            elif (A[i] >= min1 and A[i] < min2):
                min2 = A[i]
            #Getting max values
            if(A[i] > max1):
                max2 = max1
                max1 = A[i]
            elif (A[i] <= max1 and A[i] > max2):
                max2 = A[i]
        return max(min2 * min1 * max1, max1 * max2 * min2)
    else:
        for i in range(N):
            if(A[i] < min1):
                min2 = min1
                min1 = A[i]
            elif (A[i] >= min1 and A[i] < min2):
                min2 = A[i]

            if(A[i] > max1):
                max3 = max2
                max2 = max1
                max1 = A[i]
            elif (A[i] <= max1 and A[i] > max2):
                max3 = max2
                max2 = A[i]
            elif (A[i] <= max2 and A[i] > max3): 
                max3 = A[i]
        return max(min2 * min1 * max1, max1 * max2 * max3)





# print(solution([-3, 1, 2, -2, 5, 6]))
# print(solution2([-3, 1, 2, -2, 5, 6]))
print(solution3([-3, 1, 2, -2, 9]))
print(solution3([5, -5, -5, 4]))