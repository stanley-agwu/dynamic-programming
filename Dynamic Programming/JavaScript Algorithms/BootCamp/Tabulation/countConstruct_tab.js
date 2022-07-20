//Count Construct Problem

//Write a function countConstruct(targetWord, wordBank) that accepts a 
//target string and an array of strings as arguments. 
//The function should return the number of ways that the target can 
//be constructed by concatenating elements of the wordBank array. 
//You may reuse elements of wordBank as many times as needed.

//Tabulation Solution using Iteration 

const countConstruct = (targetWord, wordBank)=> {
    const table = Array( targetWord.length + 1 ).fill(0);
    table[0] = 1;
    for (let i=0; i <= targetWord.length; i++){
        for (let word of wordBank){
            //if the word matches the characters starting at position i
            if ( targetWord.slice(i, i + word.length) === word ){
                table[ i + word.length ] += table [ i ];       
            } 
        }
    }
    console.log(table);
    return table[targetWord.length];
}

//Tabulation Solution 
//m = targetWorld.length  n=wordBank.length
//Time Complexity O(n * m * m) = O(m^2 * n) Polynomial
//Space Complexity O( m )

console.log(countConstruct("purple", ["p", "ur", "purp", "le", "purpl"]));// 2
// console.log(countConstruct("abcdef", ["ab", "cd", "abc", "abcd", "def"]));//1
// console.log(countConstruct("skateboard", ["sk", "bo", "ate", "rd", "boar"])); //0
// console.log(countConstruct("enteropotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));// 4
// console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", 
// ["e", "ee", "eee", "eeee", "eeeee", "eeeeeee"]));// 0