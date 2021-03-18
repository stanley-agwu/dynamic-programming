//memoization

//js object, keys will be arg to fn, value will be the return value

const fib = (n, memo={}) =>{
    if (n in memo) return memo[n];

    if (n <= 2) return 1;

    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
}
//Brute Force 
//Time Complexity O(2^n/2) ~ O(2^n) Exponential
//Space Complexity O(n/2) ~ O(n) Linear

//Memoized Solution 
//Time Complexity O(n) = O(n) Linear
//Space Complexity O(n) Linear

console.log(fib(3))
console.log(fib(5))
console.log(fib(10))
console.log(fib(20))
console.log(fib(1000))