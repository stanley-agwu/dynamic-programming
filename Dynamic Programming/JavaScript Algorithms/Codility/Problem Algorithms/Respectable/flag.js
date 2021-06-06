//Codility Flags Problem

//Average Solution **53%**

//Find the maximum number of flags that can be set on mountain peaks.

const peaks = (A) => {
    const N = A.length
    // const numsArray = Array(N + 1).fill(0)

    const peakPOSArray = []
    for (let i = 1; i < N - 1; i += 1){
        if (A[i] > A[i - 1] && A[i] > A[i + 1]){
            peakPOSArray.push(i)
            // numsArray[i] = "P"
        }
    }
    const numberOfPeaks = peakPOSArray.length

    const results = [numberOfPeaks, peakPOSArray]
    return results
}

const flag = (A) =>{
    const N = A.length

    if (N < 3) return 0

    const [maxFlags, peakPOS] = peaks(A)

    //peakPOS => [1, 3, 5, 10]

    if (maxFlags === 1) return 1

    let maxCount = 0
    let numFlags = maxFlags
    while (numFlags > 1){
        let count = 1
        let i = j = 0
        while (i < peakPOS.length){
            j = i + 1
            while (j <= peakPOS.length && count < numFlags){
                if ((peakPOS[i] + numFlags ) <= peakPOS[j]){
                    count += 1
                    maxCount = Math.max(maxCount, count)
                    i = j - 1
                    break 
                }
                j += 1
            }
            i += 1
        }
        numFlags -= 1
    }
    return maxCount
}

console.log(flag([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]))