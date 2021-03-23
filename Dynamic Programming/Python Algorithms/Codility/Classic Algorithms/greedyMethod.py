#Greedy Algorithms

# For a given set of denominations, you are asked to find the minimum 
# number of coins with which a given amount of money can be paid. That 
# problem can be approached by a greedy algorithm that always selects 
# the largest denomination not exceeding the remaining amount of money 
# to be paid. As long as the remaining amount is greater than zero, 
# the process is repeated.

#The greedy algorithm for finding change
def greedyCoinChanging(M, k):
    n = len(M)
    result = []
    for i in range(n - 1, -1, -1):
        result += [(M[i], k // M[i])]
        k %= M[i]
    return result


# Golden Greedy Algorithm
def greedyCoinChanging2(M, k):
    n = len(M)
    result = []
    for i in range(n - 1, -1, -1):
        if(k // M[i] > 0 and k % M[i] == 0):
            result += [M[i]] * (k // M[i])
            k %= M[i]
        elif(k // M[i] > 0 and k % M[i] != 0):
            result += [M[i]] * (k // M[i])
            k %= M[i]
    return result

#print(greedyCoinChanging([1, 3, 4], 6))
print(greedyCoinChanging2([1, 3, 5], 9))
#print(greedyCoinChanging([1, 2, 3], 6))
#print(greedyCoinChanging2([1, 2, 3], 7))


#Greedy Algorithm for Canoeist Problem
# Problem: There are n > 0 canoeists weighing respectively 1 <= w0 <= w1 
# <=. . . <= wn−1 <= 10^9. The goal is to seat them in the minimum number 
# of double canoes whose displacement (the maximum load) equals k. You 
# may assume that wi <= k.
# Solution A O(n): The task can be solved by using a greedy algorithm. 
# The heaviest canoeist is called fatso. Other canoeists who can be 
# seated with fatso in the canoe are called skinny. All the other remaining
#  canoeists are also called fatsos.

#Canoeist in O(n) solution.
def greedyCanoeistA(W, k):
    N = len(W)
    skinny = deque()
    fatso = deque()
    for i in range(N - 1):
        if W[i] + W[-1] <= k:
            skinny.append(W[i])
    else:
        fatso.append(W[i])
    fatso.append(W[-1])
    canoes = 0
    while (skinny or fatso):
        if len(skinny) > 0:
            skinny.pop()
        fatso.pop()
        canoes += 1
        if (not fatso and skinny):
            fatso.append(skinny.pop())
        while (len(fatso) > 1 and fatso[-1] + fatso[0] <= k):
            skinny.append(fatso.popleft())
    return canoes