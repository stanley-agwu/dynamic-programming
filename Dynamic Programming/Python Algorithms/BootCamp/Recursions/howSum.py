#############
## How Sum ##
#############

#Write a function how_sum(targetSum, numbers) that takes in a targetSum 
#and an array of numbers as arguments. The function should return an 
#array containing any combination of elements that add up to exactly 
#the targetSum. If there is no combination that adds up to the 
#targetSum, then return null. If there are multiple combinations 
#possible, you may return any single one.

### Brute-Force
def how_sum(target_sum, numbers):
    if target_sum == 0:
        return []
    for num in numbers:
        remainder = target_sum - num
        if remainder >= 0:
            combination = how_sum(remainder, numbers)
            if combination is not None:
                combination = combination + [num]
                return combination
    return None
 
 
### Memoized
def how_sum_m(target_sum, numbers):
    memo = {}
 
    def helper(target_sum, numbers):
        if target_sum == 0:
            return []
        if target_sum in memo:
            return memo[target_sum]
        for num in numbers:
            remainder = target_sum - num
            if remainder >= 0:
                combination = helper(remainder, numbers)
                if combination is not None:
                    memo[target_sum] = combination + [num]
                    return memo[target_sum]
        memo[target_sum] = None
        return memo[target_sum]
 
    return helper(target_sum, numbers)
 

#Brute Force 
#m = targetSum  n=length of Array
#Time Complexity O((n^m)* m) ~ O(n^m) Exponential
#Space Complexity O(m) 

#Memoized Solution 
#Time Complexity O(n * (m^2)) Polynomial
#Space Complexity O(m * m) = O(m^2)

print(how_sum(17, [2, 3])) #[3, 2, 2]
#print(how_sum(23, [5, 7, 3])) # null
# print(how_sum(300, [7, 14])) #null
# print(how_sum(2703, [2 ,19, 107])) #good
# print(how_sum(101, [5 , 3, 29, 17])) #good

print(how_sum_m(17, [2, 3])) #[3, 2, 2]
#print(how_sum_m(23, [5, 7, 3])) # null
# print(how_sum_m(300, [7, 14])) #null
# print(how_sum_m(2703, [2 ,19, 107])) #good
# print(how_sum_m(101, [5 , 3, 29, 17])) #good