# Write a function that accepts a positive number N.
# The function should print a step shape
# with N levels using the # character.  

#Using Iteration Solution
def printSteps(N):
    for i in range(N + 1):
        for j in range(i):
            print (i, end=' ')
        print()
    return

printSteps(9)
# 1
# 2 2
# 3 3 3
# 4 4 4 4
# 5 5 5 5 5
# 6 6 6 6 6 6
# 7 7 7 7 7 7 7
# 8 8 8 8 8 8 8 8
# 9 9 9 9 9 9 9 9 9


def printSteps2(N):
    for i in range(N + 1):
        for j in range(i):
            print ('#', end=' ')
        print()
    return 

printSteps2(10)

# 
# # 
# # # 
# # # # 
# # # # #
# # # # # #
# # # # # # #
# # # # # # # #
# # # # # # # # #
# # # # # # # # # #

# Print a triangle made of asterisks ("*") seperated by spaces 
# and consisting of n rows, but this time upside down and make
# it symmetrical.Consecutive rows should contain 2n-1, 2n-3, ...3, 1 
# asterisks and should be indented by 0, 2, 4, ..., 2(n-1) spaces.
# For example for n=4, the triangle should appear as follows:
# The triangle should have n rows, where n is some given 
# positive integer.

# * * * * * * *
#   * * * * *
#     * * *
#       *

def triangle(n):
    for i in range(n, 0, -1):
        for j in range(n - i):
            print(" ", end=' '),
        for j in range(2 * i - 1):
            print("*", end=' '),
        print()
    return

triangle(4)
