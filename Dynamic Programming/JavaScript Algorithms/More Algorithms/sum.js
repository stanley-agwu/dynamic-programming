// sum of a set of numbers

// Efficient Solution - Using Recursion
const sum = (...args) => {
    const sumHelper = (args, n) => {
        if (n === args.length) return 0;
        return args[n] + sumHelper(args, n + 1);
    };
    return sumHelper(args, 0);
}

//Time Complexity = O(n) - Linear
//Space Complexity = O(n)) Linear

// Effiencient Solution
const sum1 = (...args) => {
    return args.reduce((sum, curr) => {
        return sum + curr;
    }, 0);
}

//Time Complexity = O(n) - Linear
//Space Complexity = O(n)) Linear

// InEfficient Solution - Using Recursion
const sum2 = (...args) => {
    let n = 0;
    if (n === args.length) return 0;
    return args[n] + sum2(...args.slice(n + 1));
}

//Time Complexity = O(n^2) - Quadratic
//Space Complexity = O(n^2)) - Quadratic

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(100, 200, 300, 400, 500, 600, 7, 8));
console.log(sum1(1, 2, 3, 4, 5));
console.log(sum1(100, 200, 300, 400, 500, 600, 7, 8));
console.log(sum2(1, 2, 3, 4, 5));
console.log(sum2(100, 200, 300, 400, 500, 600, 7, 8));