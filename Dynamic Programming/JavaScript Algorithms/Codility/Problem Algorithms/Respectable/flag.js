//Codility Flags Problem

//Average solution **100%***

//Find the maximum number of flags that can be set on mountain peaks.

const flag = (A) => {
    const N = A.length;
    const peakArr = []

    for (let i = 1; i < N - 1 ; i += 1){
        if (A[i] > A[i - 1] && A[i] > A[ i + 1]) {
            peakArr.push(i)
        }
        
    }
    const M = peakArr.length
    
    let maxCount = 0
    if (M < 3) return M
    let p = 3
    const limit = Math.floor(Math.sqrt(N) + 2)
    while (p < limit){
        let i = 1
        let left = 0
        let count = 0
        while (i < M && maxCount < p){ 
            if (Math.abs(peakArr[i] - peakArr[left]) >= p){
                count += 1
                if (left === 0) count += 1
                maxCount = Math.max(maxCount, count)
                left = i
            }
            i += 1
        }
        p += 1
    }
    return maxCount
}

console.log(flag([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]));
console.log(flag([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2, 4, 1, 6, 3, 2]));
