#Codility Binary Gap problem

#Using Iteration Solution

#Good Solution **100%**
def binaryGap(N):
    num = str(bin(N)).strip("0b")
    count = 0
    longest_gap = 0
    for i in range(len(num)):
        if(num[i] == "0"):
            count += 1
        if (num[i] == "1"):
            longest_gap = max(longest_gap, count)
            count = 0
    return longest_gap

print(binaryGap(9)) # 2
print(binaryGap(1041)) # 5
print(binaryGap(74901729)) # 4

    


