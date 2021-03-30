#Codility Chocolates By Numbers problem
#Painless Problem

#Correct but Inefficient Solution **50%**
def chocolatesByNumbers(N, M):
    if (N == 1): return 1
    choco_eaten = [True] * N
    count = 0
    X = 0
    while(choco_eaten[X] == True):
        choco_eaten[X] = False
        count += 1
        X = (X + M) % N
    #print(choco_eaten)
    return count
#Time Complexity => O( N + M )
#Space Complexity => O( N )


# Golden Solution----O(log(N + M))**100%**
def chocolatesByNumbers2(N, M):
    def gcd(a, b):
        if (a % b == 0): return b
        else:   return gcd(b, a % b)
    
    lcm = N * M //gcd(N, M)
    return lcm// M

#Time Complexity => O( log(N + M) )
#Space Complexity => O( 1 )


print(chocolatesByNumbers(10, 4)) # 5
print(chocolatesByNumbers(1, 4)) # 1
print(chocolatesByNumbers(10, 5)) # 2
print(chocolatesByNumbers(2, 3)) # 2
print(chocolatesByNumbers(3, 4)) # 3
print(chocolatesByNumbers2(10, 4)) # 5
print(chocolatesByNumbers2(1, 4)) # 1
print(chocolatesByNumbers2(10, 5)) # 2
print(chocolatesByNumbers2(2, 3)) # 2
print(chocolatesByNumbers2(3, 4)) # 3
