// sum of a set of numbers

const sum = (...args) => {
    return args.reduce((sum, curr) => {
        return sum + curr;
    }, 0);
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(100, 200, 300, 400, 500, 600, 7, 8));