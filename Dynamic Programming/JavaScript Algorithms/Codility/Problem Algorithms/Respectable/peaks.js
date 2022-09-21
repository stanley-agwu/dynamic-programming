//Codility Peaks Problem

//Divide an array into the maximum number of same-sized blocks, 
//each of which should contain an index P such that A[P - 1] 
//< A[P] && A[P] > A[P + 1].

// Golden solution **100%** O(N log(log N))

const peaks = (A) => {
    const N = A.length;

    const getPeaks = (Arr) => {
        const N = Arr.length;
        const peaks = Array(N).fill(0);
        for (let i = 1; i < N - 1; i++) {
            if (Arr[i] > Arr[i - 1] && Arr[i] > Arr[i + 1]) {
                peaks[i] = 1;
            }
        }
        return peaks;
    }
    const hasPeaks = (Arr, arrDiv) => {
        const arrChunk = Arr.length / arrDiv;
        let leftPointer = 0;
        let rightPointer = arrChunk;
        while (rightPointer < N + 1) {
            let count = 0;
            while (leftPointer < rightPointer) {
                if (Arr[leftPointer] === 1) {
                    count++;
                }
                leftPointer += 1;
            }
            if (count === 0) return false;
            leftPointer = rightPointer;
            rightPointer += arrChunk;
        }
        return true;
    }

    const peaksArr = getPeaks(A);
    const NrOfPeaks = peaksArr.reduce((sum, curr) => ( sum += curr), 0);
    if (NrOfPeaks < 2) return NrOfPeaks;

    let arrDiv = NrOfPeaks;
    while (arrDiv > 1) {
        if (N % arrDiv === 0) {
            const hasPeaksValues = hasPeaks(peaksArr, arrDiv);
            if (hasPeaksValues) return arrDiv;
        } else {
            arrDiv--;
            continue;
        };
        arrDiv--;
    }
    return 1;
};

console.log(peaks([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])); // 3
console.log(peaks([1, 3, 2, 1])); // 1
console.log(peaks([1, 3, 2, 1, 5, 3, 7, 5, 1, 7, 4, 9, 0, 2])); // 2