###################
## All Construct ##
###################

#Write a function all_construct(targetWord, wordBank) that accepts a 
#target string and an array of strings as arguments. 
#The function should return a 2D array containing all of the ways
#that the targetWord can be constructed by concatenating elements 
#of the wordBank array. You may reuse elements of wordBank as many 
#times as needed.

### Tabulation

def all_construct(target, word_bank):
    table = [[] for _ in range(len(target) + 1)]
    table[0] = [[]]
    for i in range(len(target)):
        for word in word_bank:
            if target[i : i + len(word)] == word:
                new_combinations = [combination + [word] for combination in table[i]]
                table[i + len(word)].extend(new_combinations)
    return table[-1]

#Tabulation Solution 
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