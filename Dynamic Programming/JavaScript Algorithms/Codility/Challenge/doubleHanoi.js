// DoubleHanoi

// Find the maximum number of disks that can be placed on two rods. The disks should be in 
// decreasing order of size on the first rod and in increasing order of size on the second rod.


// Golden Solution ***100%***
const doubleHanoi = (A, L, R) => {
    const results = {};
    let answer = 0;
    for (let a of A) {
        results[a] = results[a] + 1 || 1;
    }

    for(let a in results) {
        let rodsValue = 0;
        if (a > R) rodsValue += 1;
        if (a < L) rodsValue += 1;
        answer += Math.min(results[a], rodsValue)
    }
    return answer;
}

console.log(doubleHanoi([2, 3, 3, 4], 3, 1)) // 3
console.log(doubleHanoi([1, 4, 5, 5], 6, 4)) // 4
console.log(doubleHanoi([5, 2, 5, 2], 8, 1)) // 4
console.log(doubleHanoi([1, 5, 5], 2, 4)) // 2