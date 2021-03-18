#Fibonacci Algorithm

# The Fibonacci numbers form a sequence of integers defined recursively 
# in the following way. The first two numbers in the Fibonacci sequence 
# are 0 and 1, and each subsequent number is the sum of the previous two.

#Using Iteration Solution

def fibTab(n):
    fib = [0] * (n + 2)
    fib[1] = 1
    for i in range(2, n + 1):
        fib[i] = fib[i - 1] + fib[i - 2]
    return f"The {n}th Fibonacci number is {fib[n]}"
#Time Complexity => O(n)
#Space Complexity => O(n)

# Generate First n elements of the fibonacci sequence
def fib(n):
    a = 0
    b = 1
    count = 1
    while (count <= n):
        c = a + b
        print(f"The {count}th Fibonacci number is {b}")
        a = b
        b = c
        count += 1
    return


#Return the nth member of the fibonacci sequence
def fib2(n):
    a = 0
    b = 1
    count = 0
    while (count < n):
        num = b
        c = a + b
        a = b
        b = c
        count += 1       
    return f"The {n}th Fibonacci number is {num}"
    
print(fibTab(10))
print(fib(10))
print(fib2(10))
