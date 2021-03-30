#Codility Dominator problem


#Right Solution **100%**
class Solution:

    def __init__(self):
        pass

    def dominator(self, A):
        N = len(A)
        value = 0
        count = 0
        size = 0
        index = 0
        candidate = 0

        if (N == 0): return -1

        for i in range(N):
            if (size == 0):
                size += 1
                value = A[i]
                index = i
            elif (A[i] != value):
                size -= 1
            else:   size += 1

        if (size > 0):
            candidate = value
        for i in range(N):
            if (A[i] == candidate):
                count += 1
        if (count > len(A)//2 ): return index
        else:   return -1
        
val = Solution()
print(val.dominator([3, 4, 3, 2, 3, -1, 3, 3]))