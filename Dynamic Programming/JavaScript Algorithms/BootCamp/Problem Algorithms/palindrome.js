//Given a string, return true if the string is a palindrome or false
//if it is not. Palindromes are strings that form the same word if it
//reversed. Do include spaces and punctuation in determining if the 
//string is a palindrone.

//Golden Solution
const palindrome = (str) =>{
    const N = str.length
    const M = Math.floor(N/2)
    let i = 0
    while(i < M){
        if (str[i] != str[N - i - 1]) return false
        ++i
    }
    return true
}

//Time Complexity => O(n/2)
//Space Complexity => O(1)


//first Naive Solution
const palindrome2 = (str) => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}


//second Naive Solution
const palindrome3 = (str) => {
    return str.split('').every((char, i) => { 
        return char === str[str.length - i - 1] });
}
// console.log(palindrome2("abbba"));// true
console.log(palindrome2("abcdefg"));// false
// console.log(palindrome("rattar"));// true
// console.log(palindrome2("abbba"));// true
// console.log(palindrome2("abcdefg"));// false