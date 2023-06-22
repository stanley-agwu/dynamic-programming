####################
## Grid Traveller ##
####################

#Say that you are a traveller on a 2D grid. You begin in the top-left 
#corner and your goal is to travel to the bottom-right corner. You may 
#only move down or right. In how many ways can you travel to the goal 
#on a grid with dimensions m * n.

### Tabulation
def grid_traveller(m, n):
    table = [[0] * (n + 1) for _ in range(m + 1)]
    table[1][1] = 1
    for i in range(1, m):
        for j in range(1, n):
            table[i][j + 1] += table[i][j]
            table[i + 1][j] += table[i][j]
    # right-most column
    for i in range(1, m):
        table[i + 1][-1] += table[i][-1]
    # bottom row
    for j in range(1, n):
        table[-1][j + 1] += table[-1][j]
    return table[m][n]

# Tabulation Solution 
# Time Complexity O(m * n) Polynomial
# Space Complexity O(m * n) Quadratic 

print(grid_traveller(2, 2)) # 2
print(grid_traveller(2, 3)) # 3
print(grid_traveller(3, 3)) # 6
print(grid_traveller(4, 4)) # 20
print(grid_traveller(5, 5)) # 70
print(grid_traveller(16, 16)) # 155117520
print(grid_traveller(30, 30)) # 30067266499541040
