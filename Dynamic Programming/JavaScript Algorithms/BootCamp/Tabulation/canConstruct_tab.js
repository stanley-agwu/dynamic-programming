//Can Construct Problem

//Write a function canConstruct(targetWord, wordBank) that accepts a 
//target string and an array of strings as arguments. 
//The function should return a boolean indicating whether or not the 
//targetWord can be constructed by concatenating elements of the 
//wordBank array. You may reuse elements of wordBank as many times 
//as needed.

//Tabulation Solution using Iteration

const canConstruct = (targetWord, wordBank)=> {
    const table = Array( targetWord.length + 1 ).fill(false);
    table[0] = true;
    for (let i = 0; i <= targetWord.length; i++){
        if (table[i] === true){
            for (let word of wordBank){
                //if the word matches the characters starting at position i
                if (targetWord.slice(i, i + word.length) === word ){
                    table[ i + word.length ] = true;
                } 
            }
        }
    }
    return table[targetWord.length];
}

//Tabulation Solution 
//m = targetWorld.length  n=wordBank.length
//Time Complexity O(m^2 * n) Polynomial
//Space Complexity O(m) 

console.log(canConstruct("abcdef", ["ab", "cd", "abc", "abcd", "def"]));// true
console.log(canConstruct("skateboard", ["sk", "bo", "ate", "rd", "boar"])); //false
console.log(canConstruct("enteropotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));//true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e", "ee", "eee", "eeee", "eeeee", "eeeeeee"]));//false
