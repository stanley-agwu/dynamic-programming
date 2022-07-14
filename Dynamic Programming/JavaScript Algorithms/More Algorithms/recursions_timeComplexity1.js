//(1) Inefficient Solution
//[ O(n^2) - Time Complexity & O(n^2) - Space Complexity ]
const slowSum = (array) => {
    if (array.length === 0) return 0

    const rest = array.slice(1)
    return array[0] + slowSum(rest)
}

//(2) Efficient Solution
//[ O(n) - Time Complexity & O(n) - Space Complexity ]
const fastSum = (array) => {
    if (array.length === 0) return 0

    return array.pop() + fastSum(array)
}


//(3) Best Solution (Using a helper function and pointer)
//[ O(n) - Time Complexity & O(n) - Space Complexity ]
const aFastSum = (array) => {
    return _aFastSum(array, 0)
}

const _aFastSum = (array, idx) =>{
    if (idx === array.length) return 0

    return array[idx] + _aFastSum(array, idx + 1)
}


console.log(slowSum([1, 2, 3, 4, 5, 6]))
console.log(fastSum([1, 2, 3, 4, 5, 6]))
console.log(aFastSum([1, 2, 3, 4, 5, 6]))