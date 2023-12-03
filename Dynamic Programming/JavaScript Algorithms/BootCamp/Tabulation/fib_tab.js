//Fibonacci Problem

//write a function fib(n) that takes in a number as arguement. 
//The function should return the nth number of the fibonacci 
//sequence. The first and second numbers of the sequence is 1. 
//To generate the next number of the sequence, we sum the previous two.

//Tabulation Solution using Iteration

const fib = (n)=> {
    if (n <= 2) return 1;

    let table = [0, 1, 1];
    for (let i = 3; i <= n; i++){
        table[i] = table[i - 1] + table[i - 2];
    }
    return table[n]
}

// Alternate Solution
const fib2 = (n)=> {
    const table = Array( n + 1 ).fill(0);
    table[1] = 1;
    for (let i = 2; i <= n; i++){
        table[i + 1] += table[i];
        table[i + 2] += table[i];
        // table[i] = table[i - 1] + table[i - 2];
    }
    return table[n]
}

//Tabulation Solution 
//Time Complexity O(n) Linear
//Space Complexity O(n) Linear

// console.log(fib(6))
// console.log(fib(8))
// console.log(fib(13))
// console.log(fib(700))
console.log(fib2(6)) // 8
console.log(fib2(8)) // 21
console.log(fib2(13)) // 233
console.log(fib2(700)) // 8.747e+145