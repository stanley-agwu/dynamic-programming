// In a given array, find the subset of maximal sum in which the distance 
// between consecutive elements is at most 6.

const solution2 = (A) => {
    const N = A.length;

    let left = 1; 
    let right = 0;
    let i = 1;

    let result = A[0];
    let tempIdx = -1;
    let tempMax = Number.NEGATIVE_INFINITY;

    while (i < N) {
        left = i;
        right = i + 6;

        while (left < right && left < N) {
            if (left === N - 1) return result += A[N - 1];
            if (A[left] > 0) {
                result += A[left];
                left += 1;
                isNegativeVal = false;
                break;
            } else {
                if (N - 1 - left < 7) {
                    isNegativeVal = true;
                }
                if (A[left] > tempMax) {
                    tempMax = Math.max(tempMax, A[left]);
                    tempIdx = left;
                }
                if (right - left === 1) {

                    if (tempMax > A[left]) {
                        result += tempMax;
                        left = tempIdx;
                    } else {
                        result += A[left];
                    }
                    tempMax = Number.NEGATIVE_INFINITY;
                    left += 1;
                    break;
                }
                left += 1;
            }
            
        }
        i = left;
    }
}

const solution = (A) => {
    let i = 1;
    let k = 0;
    let m = 0;
    let n = 0;
    let maxVal = A[0];
    while (i < A.length) {
        let j = i;
        let results = [];
        let maxNeg = -10001;
        let tempPos = 0;
        let tempNeg = 0;
        while (j <= i + 6 && j - k <= 6 && j < A.length - 1) {
            if (A[j] > 0) {
                tempPos += A[j];
                m = j;
                results.push(A[j]);
            } else {
                if (A[j] > maxNeg) {
                    maxNeg = Math.max(A[j], maxNeg);
                    tempNeg = maxNeg;
                    n = j;
                }
            }
            j += 1;
        }
        if (results.length) {
            maxVal += tempPos;
            k = m;
            if (j === A.length - 1) return maxVal += A[A.length - 1];
        } else {
            if (k + 6 >= A.length - 1) return maxVal + A[A.length - 1]
            maxVal += tempNeg;
            k = n;
        }
        i = k + 1;
    }
}

console.log(solution([1, -2, 0, 9, -1, -2])); // 8
console.log(solution([-1, -2, -3, -4, -3, -8, -5, -2, -3, -4, -5, -6, -1])); // -6
console.log(solution([-100, 100])); // 0
console.log(solution([1, 1])); // 2
console.log(solution([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // 15 
console.log(solution([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])); // 8
console.log(solution([-2, -3, -4, -5, -6, -7, -8, -9, -2, -3, -4, -5, -6, -7, -8, -7])); // -21
console.log(solution([-2, -3, 1, -5, -6, -7, 4, -9, -2, -3, 7, -5, -6, -7, 8, -7])); // 11
console.log(solution([-2, -3, 1, -5, -6, -7, 4, -9, -2, -3, 7, -5, -6, -7, -2, -8, -7])); // 3
console.log(solution([-2, -7, -4, -6, -6, 0, -8, -9, -2, 2, -4, -5, -8, -7, -1, -7])); // -7
console.log(solution([-2, -7, -4, -6, -6, -6, -8, -9, -2, -2, -4, -5, -8, -7, -7, -7])); // -17