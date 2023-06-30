###################
## All Construct ##
###################

#Write a function all_construct(targetWord, wordBank) that accepts a 
#target string and an array of strings as arguments. 
#The function should return a 2D array containing all of the ways
#that the targetWord can be constructed by concatenating elements 
#of the wordBank array. You may reuse elements of wordBank as many 
#times as needed.

### Brute-Force
def all_construct(target, word_bank):
    if target == "":
        return [[]]
    result = []
    for word in word_bank:
        if len(target) >= len(word) and target[: len(word)] == word:
            suffix = target[len(word) :]
            suffix_ways = all_construct(suffix, word_bank)
            target_ways = [way + [word] for way in suffix_ways]
            if target_ways:
                result.extend(target_ways)
    return result
 
 
### Memoized
def all_construct_m(target, word_bank):
    memo = {}
 
    def helper(target, word_bank):
        if target == "":
            return [[]]
        if target in memo:
            return memo[target]
        result = []
        for word in word_bank:
            if len(target) >= len(word) and target[: len(word)] == word:
                suffix = target[len(word) :]
                suffix_ways = helper(suffix, word_bank)
                target_ways = [way + [word] for way in suffix_ways]
                if target_ways:
                    result.extend(target_ways)
        memo[target] = result
        return result
 
    return helper(target, word_bank)


#Brute Force 
#m = targetWord.length n=wordBank.length
#Time Complexity O(n^m * m) ~ O(n^m) Exponential
#Space Complexity O(m ) = O(m)

#Memoized Solution 
#Time Complexity O(n^m) Exponential
#Space Complexity O(m ) = O(m)

print(all_construct("purple", ["p", "ur", "purp", "le", "purpl"]));
#[ [ 'p', 'ur', 'p', 'le' ], [ 'purp', 'le' ] ] 
print(all_construct("abcdef", ["ab", "cd", "abc", "abcd", "def", "ef", "a", "b"]));
# [
#     [ 'ab', 'cd', 'ef' ],
#     [ 'abc', 'def' ],
#     [ 'abcd', 'ef' ],
#     [ 'a', 'b', 'cd', 'ef' ]
# ]
print(all_construct("skateboard", ["sk", "bo", "ate", "rd", "boar"])); #[]
print(all_construct("enteropotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
# [
#     [ 'enter', 'o', 'p', 'ot', 'ent', 'p', 'ot' ],
#     [
#       'enter', 'o', 'p',     'ot', 'ent',   'p', 'o',     't' ],
#     [
#       'enter', 'o', 'p',     'o', 't',     'ent', 'p',     'ot' ],
#     [
#       'enter', 'o', 'p', 'o', 't', 'ent', 'p', 'o', 't']
#   ]
print(all_construct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz", [
      "a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa"]));# []


print(all_construct_m("purple", ["p", "ur", "purp", "le", "purpl"]));
#[ [ 'p', 'ur', 'p', 'le' ], [ 'purp', 'le' ] ] 
print(all_construct_m("abcdef", ["ab", "cd", "abc", "abcd", "def", "ef", "a", "b"]));
# [
#     [ 'ab', 'cd', 'ef' ],
#     [ 'abc', 'def' ],
#     [ 'abcd', 'ef' ],
#     [ 'a', 'b', 'cd', 'ef' ]
# ]
print(all_construct_m("skateboard", ["sk", "bo", "ate", "rd", "boar"])); #[]
print(all_construct_m("enteropotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
# [
#     [ 'enter', 'o', 'p', 'ot', 'ent', 'p', 'ot' ],
#     [
#       'enter', 'o', 'p',     'ot', 'ent',   'p', 'o',     't' ],
#     [
#       'enter', 'o', 'p',     'o', 't',     'ent', 'p',     'ot' ],
#     [
#       'enter', 'o', 'p', 'o', 't', 'ent', 'p', 'o', 't']
#   ]
print(all_construct_m("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz", [
      "a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa"]));# []