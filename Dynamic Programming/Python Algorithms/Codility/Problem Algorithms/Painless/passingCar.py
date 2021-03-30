#Codility Missing Integer problem
## Painless Problem ****

#***Right Solution **100%**
def passingCar(A):
    N = len(A)
    passing_cars = 0

    west_cars = 0
    for i in range(N - 1):
        k = N - 1 - i
        if (A[k] & 1 == 1):
            west_cars += 1
        if (A[k - 1] & 1 == 0):
            passing_cars += west_cars

        if (passing_cars > 1000000000): return -1
    return passing_cars

#***Correct but Inefficient Solution **50%**
def passingCar2(A):
    N = len(A)
    passing_cars = [] 

    for i in range(N - 1):
        for j in range( i + 1, N):
            if (A[i] & 1 == 0 and A[j] & 1 == 1):
                passing_cars.append([i, j])

    M = len(passing_cars)
    if (M > 1000000000): return -1
    return M


print(passingCar([0, 1, 0, 1, 1]))
print(passingCar([0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1]))
print(passingCar2([0, 1, 0, 1, 1]))
print(passingCar2([0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1]))

