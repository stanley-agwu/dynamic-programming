// Codility Max Double Slice Sum Problem

//Good Solution **100%**
const maxDoubleSliceSum = (A) => {
    const N = A.length

    const firstResultsArray = Array(N).fill(0)
    const secondResultsArray = Array(N).fill(0)
    let bestSliceSum = 0

    for (let i = 1; i < N - 1; i += 1){
        firstResultsArray[i] = Math.max(firstResultsArray[i - 1] + A[i], 0)
    }
    for (let i = N - 2; i > 0; i -= 1){
        secondResultsArray[i] = Math.max(secondResultsArray[i + 1] + A[i], 0)
    }
    for (let i = 1; i < N - 1; i += 1){
        bestSliceSum = Math.max(bestSliceSum, firstResultsArray[i - 1] + secondResultsArray[i + 1])
    }
    // console.log(firstResultsArray)
    // console.log(secondResultsArray)
    return bestSliceSum
}
console.log(maxDoubleSliceSum2([3, 2, 6, -1, 4, 5, -1, 2]))
console.log(maxDoubleSliceSum2([3, 2, 6, -1]))
console.log(maxDoubleSliceSum2([3, 2, 6]))
