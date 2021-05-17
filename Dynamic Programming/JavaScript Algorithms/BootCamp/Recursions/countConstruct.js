//Count Construct Problem

//Write a function countConstruct(targetWord, wordBank) that accepts a 
//target string and an array of strings as arguments. 
//The function should return the number of ways that the target can 
//be constructed by concatenating elements of the wordBank array. 
//You may reuse elements of wordBank as many times as needed.

//Using memoization

const countConstruct = (targetWord, wordBank, memo={}) => {
    if (targetWord in memo) return memo[targetWord]
    if (targetWord === "") return 1;

    let totalCount = 0;

    for (let word of wordBank){
        if (targetWord.indexOf(word) === 0){ //To ensure that word is a starting prefix
            const numWays = countConstruct(targetWord.slice(word.length), wordBank, memo)
            totalCount += numWays;
        }
        
    }
    memo[targetWord] = totalCount
    return totalCount;
}

//Brute Force 
//m = targetWord.length n=wordBank.length
//Time Complexity O(n^m * m) ~ O(n^m) Exponential
//Space Complexity O(m * m) = O(m^2)

//Memoized Solution 
//Time Complexity O(n * m * m) = O(n * m^2) Polynomial
//Space Complexity O(m * m) = O(m^2)

console.log(countConstruct("purple", ["p", "ur", "purp", "le", "purpl"]));// 2
console.log(countConstruct("abcdef", ["ab", "cd", "abc", "abcd", "def"]));//1
console.log(countConstruct("skateboard", ["sk", "bo", "ate", "rd", "boar"])); //0
console.log(countConstruct("enteropotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));// 4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e", "ee", "eee", "eeee", "eeeee", "eeeeeee"]));// 0