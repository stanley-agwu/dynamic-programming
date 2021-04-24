#Codility Mininum Average of Two Slice problem
## Respectable Problem ****


## Good Solution **80%**

def minAvgTwoSlice(A):
    N = len(A)
    k = N - 1

    min_avg = (A[0] + A[1])/2
    min_slice_pos = 0

    for i in range(N - 2):
        if((A[i] + A[i + 1])/2 < min_avg):
            min_avg = (A[i] + A[i + 1])/2
            min_slice_pos = i
        
        if((A[k] + A[k - 1])/2 < min_avg):
            min_avg = (A[k] + A[k - 1])/2
            min_slice_pos = k - 1

        if((A[i] + A[i + 1] + A[i + 2])/3 < min_avg):
            min_avg = (A[i] + A[i + 1] + A[i + 2])/3
            min_slice_pos = i
        
        if((A[k] + A[k - 1] + A[k - 2])/3 < min_avg):
            min_avg = (A[k] + A[k - 1] + A[k - 2])/3
            min_slice_pos = k - 2

    return min_slice_pos


print(minAvgTwoSlice([4, 2, 2, 5, 1, 5, 8]))
print(minAvgTwoSlice([4, 2, 2, 5, 6, 1, 2, 8]))
    
