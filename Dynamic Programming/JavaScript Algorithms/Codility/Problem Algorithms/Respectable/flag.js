//Codility Flags Problem

//Find the maximum number of flags that can be set on mountain peaks.

// Good solution ** 100%** O(N)
const flags = (A) => {
    const N = A.length;

    const getPeaks = (Arr) => {
        const N = Arr.length;
        let P = [];
        for (let i = 1; i < N - 1; i++){
            if (Arr[i] > Arr[i - 1] && Arr[i] > Arr[i + 1]) {
                P.push(i)
            }
        }
        return P;
    }
    const setFlags = (peaksArr, flagsNeeded) => {
        let setFlags = 0;
        let lastIndex = -flagsNeeded;
        for (const idx of peaksArr) {
            if (idx >= lastIndex + flagsNeeded) {
                setFlags += 1;
                if (setFlags === flagsNeeded) {
                    return setFlags;
                }
                lastIndex = idx;
            }
        }
        return setFlags;
    }
    if (N < 3) return 0;

    const Peaks = getPeaks(A);
    if (Peaks.length < 2) return Peaks.length;

    const maxPeaks = Math.floor(Math.sqrt(N) + 1);
    let results = 0;
    for(let i = 1; i <= maxPeaks; i++) {
        const flags = setFlags(Peaks, i);
        results = Math.max(results, flags);
    }
    return results;
}


console.log(flags([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])) // 3
console.log(flags([1, 3, 2])) // 1
console.log(flags([0, 1, 0, 1, 0, 1, 0, 1, 0, 1])) // 2
console.log(flags([1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1])) // 1
console.log(flags([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])) // 0
console.log(flags([0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 5, 3, 1, 3, 0, 6, 1])) // 2
// Peaks: [ 1, 3, 5, 10 ]
// Peaks: [ 1 ]
// Peaks: [ 1, 3, 5, 7 ]
// Peaks: [ 8 ]
// Peaks: []
// Peaks: [ 1, 7, 10, 13, 15 ]