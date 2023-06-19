###############
## Fibonacci ##
###############

#write a function fib(n) that takes in a number as arguement. 
#The function should return the nth number of the fibonacci 
#sequence. The first and second numbers of the sequence is 1. 
#To generate the next number of the sequence, we sum the previous two.

### Tabulation

def fib(n):
    table = [0] * (n + 1)
    table[1] = 1
    for i in range(n - 1):
        table[i + 1] += table[i]
        table[i + 2] += table[i]
    table[-1] += table[-2]
    return table[-1]
 
#Tabulation Solution
#Time Complexity O(n) Linear
#Space Complexity O(n) Linear

print(fib(3))
print(fib(5))
print(fib(10))
print(fib(20))
print(fib(1000))