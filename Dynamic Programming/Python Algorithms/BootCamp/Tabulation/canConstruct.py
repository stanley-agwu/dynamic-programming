###################
## Can Construct ##
###################

#Write a function can_construct(targetWord, wordBank) that accepts a 
#target string and an array of strings as arguments. 
#The function should return a boolean indicating whether or not the 
#targetWord can be constructed by concatenating elements of the 
#wordBank array. You may reuse elements of wordBank as many times 
#as needed.

### Tabulation

def can_construct(target, word_bank):
    table = [False] * (len(target) + 1)
    table[0] = True
    for i in range(len(target)):
        if table[i]:
            for word in word_bank:
                if target[i : i + len(word)] == word:
                    table[i + len(word)] = True
    return table[-1]


#Tabulation Solution 
#Time Complexity O(n * m * m) = O(n * m^2) Polynomial
#Space Complexity O(m * m) = O(m^2)

print(can_construct("abcdef", ["ab", "cd", "abc", "abcd", "def"]));# true
# print(can_construct("skateboard", ["sk", "bo", "ate", "rd", "boar"])); #false
# print(can_construct("enteropotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));#true
# print(can_construct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
#     "e", "ee", "eee", "eeee", "eeeee", "eeeeeee"]));#false