#Reverse Methods-- Efficient Methods

# Reverse an Array Using simple Iteration => O(n/2)
#Using Iteration Solution
def reverseList1 (A):
    N = len(A)
    for i in range(N // 2):
        k = N - 1 - i
        A[i], A[k] = A[k], A[i]

    return A

# Reverse an Array Using List Slicing => O(n)
def reverseList2 (A):
    return A[: : -1]

# Reverse a String Using String Slicing => O(n)
def reverseString (str):
    A = str.lower()
    A = A[ : : -1 ]
    return A




print(reverseList1([1, 2, 3, 4, 5, 6]))
print(reverseList1(['a', 'b', 'c', 'd', 'e']))
print(reverseList2([1, 2, 3, 4, 5, 6]))
print(reverseList2(['a', 'b', 'c', 'd', 'e']))
print(reverseString("Array methods"))
print(reverseString("Mountain"))
