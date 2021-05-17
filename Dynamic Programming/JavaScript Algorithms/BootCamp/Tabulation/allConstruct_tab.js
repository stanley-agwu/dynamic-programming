//all Construct Problem

//Write a function allConstruct(targetWord, wordBank) that accepts a 
//target string and an array of strings as arguments. 
//The function should return a 2D array containing all of the ways
//that the targetWord can be constructed by concatenating elements 
//of the wordBank array. You may reuse elements of wordBank as many 
//times as needed.

//Tabulation Solution using Iteration

const allConstruct = (targetWord, wordBank)=> {
    const table = Array( targetWord.length + 1 )
        .fill()
        .map(() => []);

    table[0] = [ [] ];
    for (let i=0; i <= targetWord.length; i++){
        for (let word of wordBank){
            //if the word matches the characters starting at position i
            if (targetWord.slice(i, i + word.length) === word ){
                const newCombinations = table[ i ].map(subArray => [ ...subArray, word ]);
                table[ i + word.length ].push( ...newCombinations );       
            } 
        }
    }
    return table[targetWord.length];
}

//Tabulation Brute Force Solution 
//m = targetWorld.length  n=wordBank.length
//Time Complexity O( n^m ) Exponential
//Space Complexity O( n^m ) Exponential

console.log(allConstruct("purple", ["p", "ur", "purp", "le", "purpl"]));
//[ [ 'p', 'ur', 'p', 'le' ], [ 'purp', 'le' ] ] 
console.log(allConstruct("abcdef", ["ab", "cd", "abc", "abcd", "def", "ef", "a", "b"]));
// [
//     [ 'ab', 'cd', 'ef' ],
//     [ 'abc', 'def' ],
//     [ 'abcd', 'ef' ],
//     [ 'a', 'b', 'cd', 'ef' ]
// ]
console.log(allConstruct("skateboard", ["sk", "bo", "ate", "rd", "boar"])); //[]
console.log(allConstruct("enteropotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
// [
//     [ 'enter', 'o', 'p', 'ot', 'ent', 'p', 'ot' ],
//     [
//       'enter', 'o', 'p',     'ot', 'ent',   'p', 'o',     't' ],
//     [
//       'enter', 'o', 'p',     'o', 't',     'ent', 'p',     'ot' ],
//     [
//       'enter', 'o', 'p', 'o', 't', 'ent', 'p', 'o', 't']
//   ]
console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz", [
    "a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa"]));// []