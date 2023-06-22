#############
## Can Sum ##
#############

#Write a function can_sum(targetSum, numbers) that takes in a targetSum 
#and an array of numbers as arguments. The function should return a 
#boolean indicating whether or not it is possible to generate the 
#targetSum using numbers from the array. You may use an element of 
#the array as many times as needed. You may assume that all input 
#numbers are non-negative.

### Tabulation
def can_sum(targert_sum, numbers):
    table = [False] * (targert_sum + 1)
    table[0] = True
    for i in range(targert_sum):
        if table[i]:
            numbers = [num for num in numbers if i + num <= targert_sum]
            for num in numbers:
                table[i + num] = True
    return table[-1]

# Tabulation 
#Time Complexity O(m * n) Polynomial
#Space Complexity O(m) 

print(can_sum(7, [2, 3])) # true
print(can_sum(23, [5, 7])) #false
print(can_sum(300, [7, 14])) #false
print(can_sum(2703, [2 ,19, 107])) #true
print(can_sum(1007, [5 ,3, 29, 57])) #true