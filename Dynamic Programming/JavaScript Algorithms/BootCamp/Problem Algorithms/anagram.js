// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case

//Good solution -- Using Iteration method or Frequency Counter Method
const anagrams = (stringA, stringB) =>{
    const resultA = {};
    const resultB = {};

    stringA = stringA.replace(/[^\w]/g, "").toLowerCase()
    stringB = stringB.replace(/[^\w]/g, "").toLowerCase()

    if (stringA.length !== stringB.length) return false;

    for (let char of stringA){
        resultA[char] = resultA[char] + 1 || 1;
    }
    for (let char of stringB){
        resultB[char] = resultB[char] + 1 || 1;
    }
    for (let key in resultA){
        if(!(key in resultB)) return false;

        if (resultA[key] !== resultB[key]) return false;

    }
    return true;
}

// Time Complexity : O ( 2n ) ~ O( n ) Linear Time
// Space Complexity : O ( 2n ) ~ O( n ) Linear space


//An Inefficient method due to Array methods
const anagrams2 = (stringA, stringB) =>{
    const helper = (str) =>{
        return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
    }
    return helper(stringA) === helper(stringB)
}

// Time Complexity : O ( n ^ 4 * nlogn ) ~ O( n^5logn ) Exponential Time
// Space Complexity : O ( 1 ) constant space


console.log(anagrams('rail safety', 'fairy tales'))// --> True
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))// --> True
console.log(anagrams('Hi there', 'Bye there'))// --> False
console.log(anagrams('', ''))// true
console.log(anagrams('aaz', 'zza'))// false
console.log(anagrams('anagram', 'nagaram'))// true
console.log(anagrams('rat', 'car'))// false
console.log(anagrams('awesome', 'awesom'))// false
console.log(anagrams('qwerty', 'qeywrt'))// true
console.log(anagrams('texttwisttime', 'timetwisttext'))// true

console.log(anagrams2('rail safety', 'fairy tales'))// --> True
console.log(anagrams2('RAIL! SAFETY!', 'fairy tales'))// --> True
console.log(anagrams2('Hi there', 'Bye there'))// --> False
console.log(anagrams2('', ''))// true
console.log(anagrams2('aaz', 'zza'))// false
console.log(anagrams2('anagram', 'nagaram'))// true
console.log(anagrams2('rat', 'car'))// false
console.log(anagrams2('awesome', 'awesom'))// false
console.log(anagrams2('qwerty', 'qeywrt'))// true
console.log(anagrams2('texttwisttime', 'timetwisttext'))// true
