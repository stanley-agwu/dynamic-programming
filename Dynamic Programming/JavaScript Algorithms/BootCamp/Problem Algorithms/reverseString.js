//Given a string, return a new string with the reversed 
//order of characters.

// Golden Solution
const reverseString = (str) => {
    const M = Math.floor(str.length / 2);

    let start = '';
    let end = '';

    for (let i = 0; i < M; i += 1) {
        let k = str.length - i - 1;
        start += str[k];
        end += str[M - i - 1];
    }
    console.log(str);
    return str.length % 2 === 0 ? start + end : start + str[M] + end;
}

//Time Complexity => O(n/2)
//Space Complexity => O(1)

//Good Solution
const reverseString1 = (str) => {
    let reversed_str = "";

    for (let char of str){
        reversed_str = char + reversed_str;
    }
    return reversed_str;
    
}

//Time Complexity => O(n)
//Space Complexity => O(1)

//Reversing String Using Array Destructuring => O(n/2)
const reverseString2 = (str) => {
    const N = str.length
    const M = Math.floor(N/2)
    const Array = str.replace(/[^\w]/g, "").toLowerCase().split("")
    // const Array2 = Array.reverse()    // Time Complexity => O(n)
    let k = N - 1
    let i = 0
    while(i < M) {
        [Array[i], Array[k]] = [Array[k], Array[i]];
        i += 1
        k -= 1
    }
    // return Array2.join("")
    return Array.join("")
}
//Time Complexity => O(n/2)
//Space Complexity => O(1)

//First Naive Solution
const reverseString3 = (str) => {
    return str.split('').reverse().join('');
}

//Second Naive Solution
const reverseString4 = (str) => {
    return str.split('').reduce((reversed, char) => {
        return char + reversed;
    }, "");
}

console.log(reverseString('apple'))//elppa
console.log(reverseString('hello'))//olleh
console.log(reverseString('Greetings!'))//!sgniteerG
console.log(reverseString2('apple'))//elppa
console.log(reverseString2('hello'))//olleh
console.log(reverseString2('Greetings!'))//!sgniteerG
console.log(reverseString3('apple'))//elppa
console.log(reverseString3('hello'))//olleh
console.log(reverseString3('Greetings!'))//!sgniteerG