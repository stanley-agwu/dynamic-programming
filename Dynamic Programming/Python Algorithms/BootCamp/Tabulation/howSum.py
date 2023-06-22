#############
## How Sum ##
#############

#Write a function how_sum(targetSum, numbers) that takes in a targetSum 
#and an array of numbers as arguments. The function should return an 
#array containing any combination of elements that add up to exactly 
#the targetSum. If there is no combination that adds up to the 
#targetSum, then return null. If there are multiple combinations 
#possible, you may return any single one.

### Tabulation

def how_sum(targert_sum, numbers):
    table = [None] * (targert_sum + 1)
    table[0] = []
    for i in range(targert_sum):
        if table[i] is not None:
            numbers = [num for num in numbers if i + num <= targert_sum]
            for num in numbers:
                table[i + num] = table[i] + [num]
    return table[-1]


# Tabulation 
#Time Complexity O(n * (m^2)) Polynomial
#Space Complexity O(m * m) = O(m^2)

print(how_sum(17, [2, 3])) #[3, 2, 2]
#print(how_sum(23, [5, 7, 3])) # null
# print(how_sum(300, [7, 14])) #null
# print(how_sum(2703, [2 ,19, 107])) #good
# print(how_sum(101, [5 , 3, 29, 17])) #good