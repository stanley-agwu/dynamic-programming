###############
## Fibonacci ##
###############

#write a function fib(n) that takes in a number as arguement. 
#The function should return the nth number of the fibonacci 
#sequence. The first and second numbers of the sequence is 1. 
#To generate the next number of the sequence, we sum the previous two.

#Using memoization
### Memoized
def fib1(n):
    memo = {0: 0, 1: 1}
 
    def helper(n):
        if n not in memo:
            memo[n] = helper(n - 1) + helper(n - 2)
        return memo[n]
 
    return helper(n)


### Brute-Force
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n - 1) + fib(n - 2)


#Brute Force 
#Time Complexity O(2^n/2) ~ O(2^n) Exponential
#Space Complexity O(n/2) ~ O(n) Linear

#Memoized Solution 
#Time Complexity O(n) = O(n) Linear
#Space Complexity O(n) Linear

print(fib(3))
print(fib(5))
print(fib(10))
print(fib(20))
print(fib(1000))