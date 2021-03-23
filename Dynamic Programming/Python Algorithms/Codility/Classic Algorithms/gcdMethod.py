#Euclidean Algorithm

# The Euclidean algorithm is one of the oldest numerical algorithms 
# still to be in common use. It solves the problem of computing the 
# greatest common divisor (gcd) of two positive integers.

#Greatest Common Divisor (gcd) by subtraction => O(n)
def gcdS(a, b):
    if a == b:
        return a
    if a > b:
        gcdS(a - b, b)
    else:
        gcdS(a, b - a)

#Greatest Common Divisor (gcd) by dividing => O(log(a + b))
def gcdD(a, b):
    if a % b == 0:
        return b
    else:
        return gcdD(b, a % b)

#Alternative (gcd) by dividing => O(log(a + b))
def gcd2(a, b):
    if b == 0:  return a
    return gcd2(b, a % b)

#Binary Euclidean algorithm

# This algorithm finds the gcd using only subtraction, binary 
# representation, shifting and parity testing. We will use 
# a divide and conquer technique. The following function calculate 
# gcd(a, b, res) = gcd(a, b, 1)·res. So to calculate gcd(a, b) 
# it suffices to call gcd(a, b, 1) = gcd(a, b).

#Greatest Common Divisor (gcd) using binary Euclidean algorithm => O(log n)
def gcdB(a, b, res):
    if a == b:
        return res * a
    elif (a % 2 == 0) and (b % 2 == 0):
        return gcdB(a // 2, b // 2, 2 * res)
    elif (a % 2 == 0):
        return gcdB(a // 2, b, res)
    elif (b % 2 == 0):
        return gcdB(a, b // 2, res)
    elif a > b:
        return gcdB(a - b, b, res)
    else:
        return gcdB(a, b - a, res)

#Least Common Multiple

# The least common multiple (lcm) of two integers a and b is the 
# smallest positive integer that is divisible by both a and b. 
# There is the following relation:

#             lcm(a, b) = a·b/gcd(a,b)

# Knowing how to compute the gcd(a, b) in O(log(a+b)) time, 
# we can also compute the lcm(a, b) in the same time complexity.