//Codility Peaks Problem

//Average Solution **54%**

//Divide an array into the maximum number of same-sized blocks, 
//each of which should contain an index P such that A[P - 1] 
//< A[P] > A[P + 1].

const peaks = (A) => {
    const N = A.length 

    const peaksArray = []

    if (N < 3) return 0

    for (let i = 1; i < N - 1; i += 1){
        if (A[i] > A[i - 1] && A[i] > A[i + 1]){
            peaksArray.push(i)
        }
    }

    const nrOfPeaks = peaksArray.length 
    if (nrOfPeaks === 0) return 0
    if (nrOfPeaks < 3 && N % nrOfPeaks === 0) return nrOfPeaks

    let restNrOfPeaks = nrOfPeaks
    if (restNrOfPeaks >= 3){
        if (N % restNrOfPeaks === 0){
            let numr = N/restNrOfPeaks 
            let i = 1
            while(i < peaksArray.length){
                if ((peaksArray[i] - peaksArray[i - 1]) >= numr) {
                    //console.log("Number of blocks: ", restNrOfPeaks)
                    return restNrOfPeaks
                }
                i += 1
            }
            restNrOfPeaks -= 1
            //console.log("Number of blocks: ", restNrOfPeaks)
            return restNrOfPeaks
            
        }
        return 1
    }
}

console.log(peaks([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])) // [3, 5, 10]
console.log(peaks([3, 4, 3, 2, 5, 1, 2, 3, 3, 4, 6, 3, 3, 1, 8, 5]))// [1, 4, 10, 14]
console.log(peaks([1, 2, 20, 4, 15, 4, 12, 2, 8, 4, 1, 2])) // [2, 4, 6, 8] => 3