#############
## Can Sum ##
#############

#Write a function canSum(targetSum, numbers) that takes in a targetSum 
#and an array of numbers as arguments. The function should return a 
#boolean indicating whether or not it is possible to generate the 
#targetSum using numbers from the array. You may use an element of 
#the array as many times as needed. You may assume that all input 
#numbers are non-negative.

### Brute-Force
def can_sum(target_sum, numbers):
    if target_sum == 0:
        return True
    for num in numbers:
        remainder = target_sum - num
        if remainder >= 0:
            if can_sum(remainder, numbers):
                return True
    return False
 
 
### Memoized
def can_sum1(target_sum, numbers):
    memo = {}
 
    def helper(target_sum, numbers):
        if target_sum == 0:
            return True
        if target_sum in memo:
            return memo[target_sum]
        for num in numbers:
            remainder = target_sum - num
            if remainder >= 0:
                if helper(remainder, numbers):
                    memo[target_sum] = True
                    return True
        memo[target_sum] = False
        return memo[target_sum]
 
    return helper(target_sum, numbers)
 


#Brute Force 
#m = targetSum  n=length of Array
#Time Complexity O((n^m)* m) ~ O(n^m) Exponential
#Space Complexity O(m) 

#Memoized Solution 
#Time Complexity O(m * n) Polynomial
#Space Complexity O(m) 

print(can_sum(7, [2, 3])) # true
print(can_sum(23, [5, 7])) #false
print(can_sum(300, [7, 14])) #false
print(can_sum(2703, [2 ,19, 107])) #true
print(can_sum(1007, [5 ,3, 29, 57])) #true

print(can_sum1(7, [2, 3])) # true
print(can_sum1(23, [5, 7])) #false
print(can_sum1(300, [7, 14])) #false
print(can_sum1(2703, [2 ,19, 107])) #true
print(can_sum1(1007, [5 ,3, 29, 57])) #true