#Codility Max Profit problem
## Painless Problem ****


## Good Solution **100%** 
def maxProfit(A):
    N = len(A)

    if (N <= 1): return 0

    max_value = -1
    min_value = max(A)
    idx_max = 1
    idx_min = 0
    profit = 0
    i = 1
    while(i < N):
        new_profit = 0
        
        if (A[i] > max_value): 
            max_value = max(A[i], max_value)
            idx_max = i
        if (A[i - 1] < min_value):
                min_value = min(A[i - 1], min_value)
                idx_min = i - 1

        if (idx_max > idx_min): new_profit = max_value - min_value
        if (A[i] < max_value and (A[i] - min_value) > new_profit): 
            max_value = A[i]
            idx_max = i
            new_profit = max_value - min_value
        
        profit = max(new_profit, profit)
        i += 1
    if (profit > 0): return profit
    else:   return 0
    



print(maxProfit([23171, 21011, 21123, 21366, 21013, 21367]))
print(maxProfit([8, 9, 3, 6, 1, 2]))
print(maxProfit([8, 9, 3, 6, 7, 11]))
print(maxProfit([8, 9, 3, 6, 1, 12]))
print(maxProfit([8, 9, 3, 8, 5, 14]))