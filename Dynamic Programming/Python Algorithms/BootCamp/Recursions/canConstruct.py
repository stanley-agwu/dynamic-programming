###################
## Can Construct ##
###################

#Write a function can_construct(targetWord, wordBank) that accepts a 
#target string and an array of strings as arguments. 
#The function should return a boolean indicating whether or not the 
#targetWord can be constructed by concatenating elements of the 
#wordBank array. You may reuse elements of wordBank as many times 
#as needed.

### Brute-Force
def can_construct(target, word_bank):
    if target == "":
        return True
    for word in word_bank:
        if len(target) >= len(word) and target[: len(word)] == word:
            remainder = target[len(word) :]
            if can_construct(remainder, word_bank):
                return True
    return False
 
 
### Memoized
def can_construct_m(target, word_bank):
    memo = {}
 
    def helper(target, word_bank):
        if target == "":
            return True
        if target in memo:
            return memo[target]
        for word in word_bank:
            if len(target) >= len(word) and target[: len(word)] == word:
                remainder = target[len(word) :]
                if helper(remainder, word_bank):
                    memo[target] = True
                    return memo[target]
        memo[target] = False
        return False
 
    return helper(target, word_bank)
 
#Brute Force 
#m = targetWord.length n=wordBank.length
#Time Complexity O(n^m * m) ~ O(n^m) Exponential
#Space Complexity O(m * m) = O(m^2)

#Memoized Solution 
#Time Complexity O(n * m * m) = O(n * m^2) Polynomial
#Space Complexity O(m * m) = O(m^2)

print(can_construct("abcdef", ["ab", "cd", "abc", "abcd", "def"]));# true
# print(can_construct("skateboard", ["sk", "bo", "ate", "rd", "boar"])); #false
# print(can_construct("enteropotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));#true
# print(can_construct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
#     "e", "ee", "eee", "eeee", "eeeee", "eeeeeee"]));#false

print(can_construct_m("abcdef", ["ab", "cd", "abc", "abcd", "def"]));# true
# print(can_construct_m("skateboard", ["sk", "bo", "ate", "rd", "boar"])); #false
# print(can_construct_m("enteropotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));#true
# print(can_construct_m("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
#     "e", "ee", "eee", "eeee", "eeeee", "eeeeeee"]));#false