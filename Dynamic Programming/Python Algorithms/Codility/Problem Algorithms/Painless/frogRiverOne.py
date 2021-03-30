#Codility Frog River One problem

## Right Solution **100%**

def frogRiverOne(X, A):
    N = len(A)
    result = set()
    
    for i in range(N):
        result.add(A[i])
        #print(result)
        if(len(result) == X ): return i
        
    return -1
        
                
#Time Complexity : O(n)
#Space Complexity : O(1)

print(frogRiverOne(5, [1, 3, 1, 4, 2, 3, 5, 4]))
print(frogRiverOne(1, [1]))

