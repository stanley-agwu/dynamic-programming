#Composite Numbers and Prime Numbers Checks Methods

#Counting the number of divisors — O(√n)
def divisors(n):
    i = 2
    result = 0
    while (i * i < n):
        if (n % i == 0):
            result += 2
        i += 1
    if (i * i == n):
        result += 1
    return result

#Primality test — O(√n)

# The primality test of n can be performed in an analogous way 
# to counting the divisors. If we find a number between 2 and 
# n − 1 that divides n then n is a composite number. Otherwise,
# n is a prime number.
def primality(n):
    i = 2
    while (i * i <= n):
        if (n % i == 0):
            return False
        i += 1
    return True


# Problem: Consider n coins aligned in a row. Each coin is showing 
# heads at the beginning.Then, n people turn over corresponding 
# coins as follows. Person i reverses coins with numbers that are 
# multiples of i. That is, person i flips coins i, 2 · i, 3 · i, 
# . . . until no more appropriate coins remain. The goal is to 
# count the number of coins showing tails. 

#Reversing coins — O(n log n)
def coins(n):
    result = 0
    coin = [0] * (n + 1)
    for i in range(1, n + 1):
        k = i
        while (k <= n):
            coin[k] = (coin[k] + 1) % 2
            k += i
        result += coin[i]

    return result