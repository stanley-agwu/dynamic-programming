// Codility Minimum Absolute Sum of Two Problem

//Find the minimal absolute value of a sum of two elements.


//Golden Solution **100%**
const minAbsSumOfTwo = (A) => {
    const N = A.length 
    let k = N - 1
    
    A.sort((a, b) => a - b)

    if (A[0] >= 0) return A[0] + A[0] 
    if (A[k] < 0) return Math.abs(A[k] + A[k]) 
    //Above if-statements are optional

    let left = 0
    let right = k
    let minSum = Number.POSITIVE_INFINITY

    while (left <= right){
        let sum = A[left] + A[right]
        minSum = Math.min(minSum, Math.abs(sum))

        if (sum < 0) left += 1
        else if (sum > 0) right -= 1
        else return 0
    }
    return minSum
}
console.log(minAbsSumOfTwo([1, 4, -3]))
console.log(minAbsSumOfTwo([2, -3]))
console.log(minAbsSumOfTwo([4]))
console.log(minAbsSumOfTwo([8, 5, 3, 4, 6, 8])) // [3, 4, 5, 6, 8, 8]
console.log(minAbsSumOfTwo([-8, 4, 5, -10, 3]))//[-10, -8, 5, 4, 3]
console.log(minAbsSumOfTwo([-8, -60, -15, -10, -11]))