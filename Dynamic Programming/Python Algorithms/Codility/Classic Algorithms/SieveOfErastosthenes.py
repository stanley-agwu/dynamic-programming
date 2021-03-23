#Sieve of Eratosthenes Method

# The Sieve of Eratosthenes is a very simple and popular technique 
# for finding all the prime numbers in the range from 2 to a given 
# number n. The algorithm takes its name from the process of sieving
#  — in a simple way we remove multiples of consecutive numbers.

#Sieve of Eratosthenes O(n log log n)
def sieve(n):
    sieve = [True] * (n + 1)
    sieve[0] = sieve[1] = False
    i = 2
    while (i * i <= n):
        k = 0
        if (sieve[i]):
            k = i * i
            while (k <= n):
                sieve[k] = False
                k += i
        i += 1
    k = 0 
    while(k <= n):
        if (sieve[k] == True):  print(k)
        k += 1
    return sieve

#Time Complexity => O(n log log n)
#Space Complexity => O(n)

print(sieve(20))

