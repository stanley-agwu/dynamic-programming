##############
## Best Sum ##
##############

#Write a function best_sum(targetSum, numbers) that takes in a targetSum 
#and an array of numbers as arguments. The function should return an 
#array containing the shortest combination of numbers that add up to 
#exactly the targetSum. If there is a tie for the shortest combination, 
#you may return any one of the shortest.

## Tabulation
def best_sum(targert_sum, numbers):
    table = [None] * (targert_sum + 1)
    table[0] = []
    for i in range(targert_sum):
        if table[i] is not None:
            numbers = [num for num in numbers if i + num <= targert_sum]
            for num in numbers:
                if table[i + num] is None or len(table[i]) < len(table[i + num]):
                    table[i + num] = table[i] + [num]
    return table[-1]


## Tabulation solution 
#Time Complexity O(n * m * m) = O(n * m^2) Polynomial
#Space Complexity O(m * m) = O(m^2)

# print(best_sum(7, [2, 3, 5, 1])) # [5, 2]
# print(best_sum(23, [5, 7, 2, 1])) # [ 2, 7, 7, 7 ]
# print(best_sum(300, [7, 14, 45, 58, 5, 2])) # [5,  5, 58, 58,58, 58, 58]
# print(best_sum(2703, [2 ,19, 107, 199, 543, 342, 10, 5])) #[10, 342, 342, 342, 543, 543, 543,  19, 19]
# print(best_sum(1007, [5 ,3, 29, 57, 97, 44, 25])) # [97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 29,  3, 5]
