#Codility Mininum Perimeter Rectangle Problem
## Painless Problem ****


## Good Solution **100%**

def minPerimeterRectangle(N):
    if (N == 1): return 4

    resultA = []
    resultB = []
    i = 1
    while(i * i < N):
        if (N % i == 0):
            resultA.append(i)
        i += 1
    if (i * i == N):
        resultA.append(i)
    k = 0
    P = len(resultA)
    while(k < P):
        candidate = resultA[k]
        resultB.append(N // candidate)
        k += 1
    Q = len(resultB)
    M = 0

    if (P < Q): M = P
    else: M = Q

    min_value = 100 * N
    k = 0
    while (k < M):
        Area = resultA[k] * resultB[k]
        if ( Area == N and resultA[k] + resultB[k] < min_value):
            min_value = resultA[k] + resultB[k]
        k += 1
    return 2 * min_value

print(minPerimeterRectangle(36))
print(minPerimeterRectangle(25))
print(minPerimeterRectangle(49))