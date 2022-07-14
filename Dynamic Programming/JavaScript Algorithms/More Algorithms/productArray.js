//Product of array members Solution

//Given an array arr of integers, return an array products such that products[i] 
//is equal to the product of all the elements of arr except except arr[i]. 
//Solve without the division operator in O[n] time.


//Golden Solution 
const productArray = (A) => {
    const N = A.length

    let totalBefore = 1
    const resultArray = [] 
    for (let i = 0; i < N; i += 1){
        resultArray[i] = totalBefore 
        totalBefore *= A[i]
    }

    let totalAfter = 1
    let m = N - 1
    for (let j = m; j >= 0; j -= 1){
        resultArray[j] *= totalAfter 
        totalAfter *= A[j]
    }

    return resultArray
}
console.log(productArray([1, 2, 3, 4])) // 24, 12, 8, 6
console.log(productArray([5, 8, 7, 10])) // 560, 350, 400, 280
console.log(productArray([0, 1, 2, 4])) // 8, 0, 0, 0