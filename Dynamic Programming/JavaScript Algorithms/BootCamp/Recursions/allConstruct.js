//all Construct Problem

//Write a function allConstruct(targetWord, wordBank) that accepts a 
//target string and an array of strings as arguments. 
//The function should return a 2D array containing all of the ways
//that the targetWord can be constructed by concatenating elements 
//of the wordBank array. You may reuse elements of wordBank as many 
//times as needed.

//Using memoization

const allConstruct = (targetWord, wordBank, memo={}) => {
    if (targetWord in memo) return memo[targetWord]

    if (targetWord === "") return [[]];

    let result = [];

    for (let word of wordBank){
        if (targetWord.indexOf(word) === 0){ //To ensure that word is a starting prefix
            const suffix = targetWord.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [word, ...way])
            result.push(...targetWays)
        }
    }
    memo[targetWord] = result
    return result;
}

//Brute Force 
//m = targetWord.length n=wordBank.length
//Time Complexity O(n^m * m) ~ O(n^m) Exponential
//Space Complexity O(m ) = O(m)

//Memoized Solution 
//Time Complexity O(n^m) Exponential
//Space Complexity O(m ) = O(m)

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