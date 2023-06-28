#####################
## Count Construct ##
#####################

#Write a function count_construct(targetWord, wordBank) that accepts a 
#target string and an array of strings as arguments. 
#The function should return the number of ways that the target can 
#be constructed by concatenating elements of the wordBank array. 
#You may reuse elements of wordBank as many times as needed.

### Tabulation

def count_construct(target, word_bank):
    table = [0] * (len(target) + 1)
    table[0] = 1
    for i in range(len(target)):
        if table[i]:
            for word in word_bank:
                if target[i : i + len(word)] == word:
                    table[i + len(word)] += table[i]
    return table[-1]

#Tabulation Solution 
#Time Complexity O(n * m * m) = O(n * m^2) Polynomial
#Space Complexity O(m * m) = O(m^2)

print(count_construct("purple", ["p", "ur", "purp", "le", "purpl"]));# 2
print(count_construct("abcdef", ["ab", "cd", "abc", "abcd", "def"]));#1
print(count_construct("skateboard", ["sk", "bo", "ate", "rd", "boar"])); #0
print(count_construct("enteropotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));# 4
print(count_construct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e", "ee", "eee", "eeee", "eeeee", "eeeeeee"]));# 0