#Codility Max Counter problem

#CORRECT BUT POOR PERFORMANCE 88%

def maxCounter(N, A):
    counter = [0] * N
    
    max_value = 0
    current_value = 0
    for num in A:
        if (num <= N):
            counter[num - 1] += 1
            current_value = counter[num - 1]
            if(max_value < current_value): 
                max_value = current_value


        if (num == N + 1):
            counter = [max_value] * N

    return counter

print(maxCounter(5, [3, 4, 4, 6, 1, 4, 4]))


            
