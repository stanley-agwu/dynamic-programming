//Count the number of distinct slices Codility Problem.

//Good Solution using Tabulation and Prefix-Sum Idea

const countDistinctSlices = (M, A) => {
    const N = A.length

    let right = count = 0
    if (N === 1) return 1

    let sliceArray = []
    while( right < N ){
        if (!sliceArray.length) {
            sliceArray.push(A[right])
            count += sliceArray.length   
        }
        else if (sliceArray.length && !sliceArray.includes(A[right])){
            sliceArray.push(A[right])
            count += sliceArray.length
        }
        else if (sliceArray.length && sliceArray.includes(A[right])) {
            count += 1
            sliceArray = [A[right]]
        }       
        //console.log(sliceArray)
        right += 1 
        if (count > 1000000000) return 1000000000  
    }
    return count
}

//console.log(countDistinctSlices(6, [3, 4, 5, 5, 2]))
//console.log(countDistinctSlices(1, [0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0]))
//console.log(countDistinctSlices(6, [3, 4, 5, 1, 2]))
//console.log(countDistinctSlices(6, [3, 4, 5, 0, 5, 2]))
console.log(countDistinctSlices(6, [1, 4, 5, 0, 3, 5, 6]))
//console.log(countDistinctSlices(0, [0]))

//Golden Solution using Tabulation and Prefix-Sum Idea

const countDistinctSlices2 = (M, A) => {
    const N = A.length

    let right = count = countIdx = k = 0

    const lookUpArray = Array(M + 1).fill(-1)
    while( right < N ){
        if (lookUpArray[A[right]] === -1) {
            lookUpArray[A[right]] = A[right]
            countIdx += 1
            count += countIdx
        } 
        else if (lookUpArray[A[right]] !== -1 && k !== lookUpArray[A[right]]) {
            countIdx += 1
            count += countIdx
        } 
        else if (lookUpArray[A[right]] !== -1 && k == lookUpArray[A[right]]) {
            countIdx = 1
            count += countIdx
        }
        if (count > 1000000000) return 1000000000

        k = lookUpArray[A[right]]

        right += 1
    }
    
    return count
}

