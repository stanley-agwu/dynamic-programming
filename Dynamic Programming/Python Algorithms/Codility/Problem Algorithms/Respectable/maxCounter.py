#Codility Max Counter problem

#Golden solution ** 100% ** O(N + M)

def maxCounter(N, A):
    counter = [0] * N
    
    max_value = 0
    current_value = 0
    last_maxValue = 0
    for i in range(len(A)):
        if (A[i] < N + 1):
            if (counter[A[i] - 1] < last_maxValue):
               counter[A[i] - 1] = last_maxValue + 1
            else:
                counter[A[i] - 1] += 1
            current_value = counter[A[i] - 1]
            max_value = max(max_value, current_value)
        else:
            last_maxValue = max_value
    
    for i in range(len(counter)):
        if (counter[i] < last_maxValue):
            counter[i] = last_maxValue
    return counter

print(maxCounter(5, [3, 4, 4, 6, 1, 4, 4])) # [3, 2, 2, 4, 2]

