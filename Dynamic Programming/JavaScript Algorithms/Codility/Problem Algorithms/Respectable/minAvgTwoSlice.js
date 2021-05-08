//Codility Minimum Average of Two Slice Problem
//Find the minimal average of any slice containing at least two elements.


//Good Solution **100%**
const minAvgTwoSlice = (A) =>{
    const N = A.length 

    let k = j = minAvgTwo = minAvgThree = 0
    let resultsOfTwo = resultsOfThree = Number.POSITIVE_INFINITY

    if (N < 4) return 0

    for (let i = 0; i < N; i += 1){
        let sum = 0
        sum = A[i] + A[i + 1]
        minAvgTwo = sum/2
        if (minAvgTwo < resultsOfTwo){
            resultsOfTwo = Math.min(resultsOfTwo, minAvgTwo)
            j = i
        }
        // console.log(i, j, minAvgTwo)      
    }
    // console.log("----------------")
    for (let i = 0; i < N; i += 1){
        let sum = 0
        sum = A[i] + A[i + 1] + A[i + 2]
        minAvgThree = sum/3
        if (minAvgThree < resultsOfThree){
            resultsOfThree = Math.min(resultsOfThree, minAvgThree)
            k = i
        }
        // console.log(i, k, minAvgThree) 
    }
    return resultsOfTwo <= resultsOfThree ? j : k 
}

console.log(minAvgTwoSlice([4, 2, 2, 5, 1, 5, 8]))
console.log(minAvgTwoSlice([-3, -5, -8, -4, -10]))