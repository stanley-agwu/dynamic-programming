#Codility Max Slice Sum problem
## Painless Problem ****


## Good Solution **100%**  Golden Method
def maxSliceSum(A):
    N = len(A)

    if (N == 1): return A[0]

    maxSlice = sliceSum = 0
    min_num = min(A)
    if (A[0] < 0 and A[1] < 0):
        maxSlice = sliceSum = min_num - 1
    
    for num in A:
        if (num < 0 and maxSlice <= 0):
            sliceSum = max(sliceSum, sliceSum + num, num)
            maxSlice = max(maxSlice, sliceSum)
        else:
            sliceSum = max(0, sliceSum + num, num)
            maxSlice = max(maxSlice, sliceSum)
    return maxSlice

print(maxSliceSum([3, 2, -6, 4, 0]))
print(maxSliceSum([-3, -2, -6, -4, -9]))
print(maxSliceSum([-3, -2, -6, -4, -9, 4, 8, -2, 4]))
print(maxSliceSum([-2, -2]))
print(maxSliceSum([-3, -2, -6, 1, -4, -9,]))