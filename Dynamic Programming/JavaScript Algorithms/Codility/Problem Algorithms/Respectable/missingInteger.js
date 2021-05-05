//Codility MissingInteger Problem
//Find the smallest positive integer that does not occur in a given sequence.


//Good Solution **100%**
const MissingInteger = (A) =>{
    const N = A.length 

    let count = 0
    let max_val = A[0]

    for (let i = 0; i < N; i += 1){
        if (A[i] > 0) count += 1
        max_val = Math.max(max_val, A[i])
    }
    if (count === 0) return 1

    let PrefixArray = Array(max_val + 2).fill(0)
    PrefixArray[0] = 1
    
    let M = 0

    for (let i = 0; i < N + 1; i += 1){
        if (A[i] > 0){
            PrefixArray[A[i]] = A[i]
        }       
    }
    console.log(PrefixArray)
    return PrefixArray.indexOf(0)
}

console.log(MissingInteger([1, 3, 6, 4, 1, 2])) // 5
console.log(MissingInteger([1, 2, 3])) // 4
console.log(MissingInteger([-1, -3, -4, 1, 22, 3, 6, 8, 2, 4])) // 1

