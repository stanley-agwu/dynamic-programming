// Codility Count Non Divisible

//Brute Force Approach ***66%**
const countNonDivisible = (A) => {
    const N = A.length  
    let nonDiv = []

    for (let i = 0; i < N; i += 1){
        let k = A[i]
        let count = 0
        for (let j = 0; j < N; j += 1){
            if (k % A[j] !== 0) count += 1
        }
        nonDiv.push(count)
    }
    return nonDiv
}

//Golden Method ***100%**
const countNonDivisible2 = (A) => {
    const countHash = Array(A.length * 2 + 1).fill(0)
    for (let n of A){
        (countHash[n] === 0) ? countHash[n] = 1 : countHash[n] += 1
    }

    return A.map(n => {
        let nonDiv = A.length
        for (let i = 1; i * i <= n; i += 1){
            if (n % i !== 0) continue 

            nonDiv -= countHash[i]

            if (i * i !== n) nonDiv -= countHash[Math.floor(n/i)]
        }
        return nonDiv
    })

}
console.log(countNonDivisible2([3, 1, 2, 3, 6]))//[2, 4, 3, 2, 0]
console.log(countNonDivisible2([2]))//[0]