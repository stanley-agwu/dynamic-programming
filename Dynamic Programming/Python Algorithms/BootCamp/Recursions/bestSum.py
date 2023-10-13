##############
## Best Sum ##
##############

#Write a function best_sum(targetSum, numbers) that takes in a targetSum 
#and an array of numbers as arguments. The function should return an 
#array containing the shortest combination of numbers that add up to 
#exactly the targetSum. If there is a tie for the shortest combination, 
#you may return any one of the shortest.

## Brute-Force
def best_sum(target_sum, numbers):
    if target_sum == 0:
        return []
    shortest_combination = None
    for num in numbers:
        remainder = target_sum - num
        if remainder >= 0:
            combination = best_sum(remainder, numbers)
            if combination is not None:
                combination = combination + [num]
                if shortest_combination is None or len(combination) < len(
                    shortest_combination
                ):
                    shortest_combination = combination
    return shortest_combination
 
 
### Memoized
def best_sum_m(target_sum, numbers):
    memo = {}
 
    def helper(target_sum, numbers):
        if target_sum == 0:
            return []
        if target_sum in memo:
            return memo[target_sum]
        shortest_combination = None
        for num in numbers:
            remainder = target_sum - num
            if remainder >= 0:
                combination = helper(remainder, numbers)
                if combination is not None:
                    combination = combination + [num]
                    if shortest_combination is None or len(combination) < len(
                        shortest_combination
                    ):
                        shortest_combination = combination
        memo[target_sum] = shortest_combination
        return memo[target_sum]
 
    return helper(target_sum, numbers)

#Brute Force 
#m = targetSum  n=length of Array
#Time Complexity O(n^m * m) ~ O(n^m) Exponential
#Space Complexity O(m * m) = O(m^2)

#Memoized Solution 
#Time Complexity O(n * m * m) = O(n * m^2) Polynomial
#Space Complexity O(m * m) = O(m^2)

# print(best_sum(7, [2, 3, 5, 1])) # [5, 2]
# print(best_sum(23, [5, 7, 2, 1])) # [ 2, 7, 7, 7 ]
# print(best_sum(300, [7, 14, 45, 58, 5, 2])) # [5,  5, 58, 58,58, 58, 58]
# print(best_sum(2703, [2 ,19, 107, 199, 543, 342, 10, 5])) #[10, 342, 342, 342, 543, 543, 543,  19, 19]
# print(best_sum(1007, [5 ,3, 29, 57, 97, 44, 25])) # [97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 29,  3, 5]

# print(best_sum_m(7, [2, 3, 5, 1])) # [5, 2]
# print(best_sum_m(23, [5, 7, 2, 1])) # [ 2, 7, 7, 7 ]
# print(best_sum_m(300, [7, 14, 45, 58, 5, 2])) # [5,  5, 58, 58,58, 58, 58]
# print(best_sum_m(2703, [2 ,19, 107, 199, 543, 342, 10, 5])) #[10, 342, 342, 342, 543, 543, 543,  19, 19]
# print(best_sum_m(1007, [5 ,3, 29, 57, 97, 44, 25])) # [97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 29,  3, 5]