#Codility Frogjump Problem

#Using Math Operation
#Good Solution **100%**
import math

def frogjump(X, Y, D):

    return math.ceil((Y - X)/D)



#Alternative Good Solution **100%**
def frogjump2(X, Y, D):
    if(Y - X % D == 0):
        return (Y - X)//D
    else:
        return (Y - X)//D + 1


print(frogjump(10, 85, 30))
print(frogjump2(10, 85, 30))