#Codility Count Factor problem


#Right Solution **100%**

def countFactor(N):
    result = 0
    i = 1
    while(i * i < N):
        if (N % i == 0):
            result += 2
        i += 1
    if (i * i == N):
        result += 1

    return result

print(countFactor(24))
print(countFactor(1))
print(countFactor(12))