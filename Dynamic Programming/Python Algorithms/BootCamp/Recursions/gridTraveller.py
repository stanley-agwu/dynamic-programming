####################
## Grid Traveller ##
####################

#Say that you are a traveller on a 2D grid. You begin in the top-left 
#corner and your goal is to travel to the bottom-right corner. You may 
#only move down or right. In how many ways can you travel to the goal 
#on a grid with dimensions m * n.

### Brute-Force
def grid_traveller(m, n):
    if m == 1 and n == 1:
        return 1
    if m == 0 or n == 0:
        return 0
    return grid_traveller(m - 1, n) + grid_traveller(m, n - 1)
 
 
### Memoized
def grid_traveller_m(m, n):
    memo = {"1,1": 1}
 
    def helper(m, n):
        if m == 0 or n == 0:
            return 0
        key = f"{m},{n}"
        if key in memo:
            return memo[key]
        key = f"{n},{m}"
        if key in memo:
            return memo[key]
        memo[key] = helper(m - 1, n) + helper(m, n - 1)
        return memo[key]
 
    return helper(m, n)

#Brute Force 
#m = Number of Rows  n=Number of Columns
#Time Complexity O(2^(n+m)) Exponential
#Space Complexity O(n + m) 

#Memoized Solution 
#Time Complexity O(m * n) Polynomial
#Space Complexity O(n + m) 

print(grid_traveller(2, 2)) # 2
print(grid_traveller(2, 3)) # 3
print(grid_traveller(3, 3)) # 6
print(grid_traveller(4, 4)) # 20
print(grid_traveller(5, 5)) # 70
print(grid_traveller(16, 16)) # 155117520
print(grid_traveller(30, 30)) # 30067266499541040


print(grid_traveller_m(2, 2)) # 2
print(grid_traveller_m(2, 3)) # 3
print(grid_traveller_m(3, 3)) # 6
print(grid_traveller_m(4, 4)) # 20
print(grid_traveller_m(5, 5)) # 70
print(grid_traveller_m(16, 16)) # 155117520
print(grid_traveller_m(30, 30)) # 30067266499541040
