#####################
## Count Construct ##
#####################

#Write a function count_construct(targetWord, wordBank) that accepts a 
#target string and an array of strings as arguments. 
#The function should return the number of ways that the target can 
#be constructed by concatenating elements of the wordBank array. 
#You may reuse elements of wordBank as many times as needed.

### Brute-Force
def count_construct(target, word_bank):
    if target == "":
        return 1
    totalCount = 0
    for word in word_bank:
        if len(target) >= len(word) and target[: len(word)] == word:
            remainder = target[len(word) :]
            totalCount += count_construct(remainder, word_bank)
    return totalCount
 
 
### Memoized
def count_construct_m(target, word_bank):
    memo = {}
 
    def helper(target, word_bank):
        if target == "":
            return 1
        if target in memo:
            return memo[target]
        totalCount = 0
        for word in word_bank:
            if len(target) >= len(word) and target[: len(word)] == word:
                remainder = target[len(word) :]
                totalCount += helper(remainder, word_bank)
        memo[target] = totalCount
        return totalCount
 
    return helper(target, word_bank)
 

#Brute Force 
#m = targetWord.length n=wordBank.length
#Time Complexity O(n^m * m) ~ O(n^m) Exponential
#Space Complexity O(m * m) = O(m^2)

#Memoized Solution 
#Time Complexity O(n * m * m) = O(n * m^2) Polynomial
#Space Complexity O(m * m) = O(m^2)

print(count_construct("purple", ["p", "ur", "purp", "le", "purpl"]));# 2
print(count_construct("abcdef", ["ab", "cd", "abc", "abcd", "def"]));#1
print(count_construct("skateboard", ["sk", "bo", "ate", "rd", "boar"])); #0
print(count_construct("enteropotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));# 4
print(count_construct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e", "ee", "eee", "eeee", "eeeee", "eeeeeee"]));# 0

print(count_construct_m("purple", ["p", "ur", "purp", "le", "purpl"]));# 2
print(count_construct_m("abcdef", ["ab", "cd", "abc", "abcd", "def"]));#1
print(count_construct_m("skateboard", ["sk", "bo", "ate", "rd", "boar"])); #0
print(count_construct_m("enteropotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));# 4
print(count_construct_m("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e", "ee", "eee", "eeee", "eeeee", "eeeeeee"]));# 0