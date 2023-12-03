//Can Construct Problem

//Write a function canConstruct(targetWord, wordBank) that accepts a 
//target string and an array of strings as arguments. 
//The function should return a boolean indicating whether or not the 
//targetWord can be constructed by concatenating elements of the 
//wordBank array. You may reuse elements of wordBank as many times 
//as needed.

//Using memoization

const canConstruct = (targetWord, wordBank, memo={}) => {
    if (targetWord in memo) {
        return memo[targetWord];
    }
    
    if (targetWord === "") {
        return true;
    }

    for (let word of wordBank){
        if (targetWord.indexOf(word) === 0){ //To ensure that word is a starting prefix
            const suffix = targetWord.slice(word.length)
            if (canConstruct(suffix, wordBank, memo) === true) {
                memo[targetWord] = true;
                return true
            }
        }
        
    }
    memo[targetWord] = false;
    return false;
}
//Brute Force 
//m = targetWord.length n=wordBank.length
//Time Complexity O(n^m * m) ~ O(n^m) Exponential
//Space Complexity O(m * m) = O(m^2)

//Memoized Solution 
//Time Complexity O(n * m * m) = O(n * m^2) Polynomial
//Space Complexity O(m * m) = O(m^2)

console.log(canConstruct("abcdef", ["ab", "cd", "abc", "abcd", "def"]));// true
// console.log(canConstruct("skateboard", ["sk", "bo", "ate", "rd", "boar"])); //false
// console.log(canConstruct("enteropotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));//true
// console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e", "ee", "eee", "eeee", "eeeee", "eeeeeee"]));//false