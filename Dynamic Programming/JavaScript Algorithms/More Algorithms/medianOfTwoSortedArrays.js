// Given two sorted arrays num1 and num2 of size m and n respectively,
// return the median of the two sorted arrays.

// The overall run time complexity should be )(log(m+n))
// Input: num1 = [1, 3], num2 = [2]
// output: merged array = [1, 2, 3] and median is 2
// Input: num1 = [1, 2], num2 = [3, 4]
// output: merged array = [1, 2, 3, 4] and median is 2.5

// Constraints:
// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

// Time complexity => O (log(min(n, m)))
const medianOf2SortedArrays = (num1, num2) => {
  const totalLength = num1.length + num2.length;
  const halfLength = Math.floor(totalLength / 2);
  const A = num1.length < num2.length ? num1 : num2;
  const B = num1.length < num2.length ? num2 : num1;

  let left = 0;
  let right = A.length - 1;

  while (true) {
    let partitionA = Math.floor(left + right);
    let partitionB = halfLength - partitionA - 2;

    let Aleft = partitionA >= 0 ? A[partitionA] : -Infinity;
    let Aright = partitionA + 1 < A.length ? A[partitionA + 1] : Infinity;
    let Bleft = partitionB >= 0 ? B[partitionB] : -Infinity;
    let Bright = partitionB + 1 < B.length ? B[partitionB + 1] : Infinity;

    // if partition is correct
    if (Aleft <= Bright && Bleft <= Aright) {
      // odd
      if (totalLength % 2) {
        return Math.min(Aright, Bright);
      }
      // even
      return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
    }
    else if (Aleft > Bright) {
      right = partitionA - 1;
    }
    else {
      left = partitionA + 1;
    }
  }
}

console.log(medianOf2SortedArrays([1, 2], [3, 4])); // 2.5
console.log(medianOf2SortedArrays([1, 3], [2])); // 2
console.log(medianOf2SortedArrays([1, 3, 5, 8, 9, 11], [2, 4, 6, 7, 15, 20])); // 6.5
