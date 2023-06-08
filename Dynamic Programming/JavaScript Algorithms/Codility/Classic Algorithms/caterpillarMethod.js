//Caterpillar Method

// Check whether a sequence contains a contiguous subsequence 
// whose sum of elements equals s. For example, for a sequence A 
//  we are looking for a subsequence whose total equals s = 12

const caterpillarMethod = (A, sum) => {
  let right = 0;
  let total = 0;

  for(let number of A) {
    while(right < A.length && A[right] + total <= sum) {
      total += A[right];
      right += 1;
    }
    if (total === sum) {
      return true;
    }
    total -= number;
  }
  return false;
}
console.log(caterpillarMethod([6, 2, 7, 4, 1, 3, 6], 12))
console.log(caterpillarMethod([6, 2, 7, 4, 2, 6, 6], 12))
console.log(caterpillarMethod([6, 2, 7, 8, 2, 6, 6], 13))

const caterpillarMethodWithResults = (A, sum) => {
  const N = A.length;
  let right = 0;
  let total = 0;
  let results = [];

  for(let i = 0; i < N; i++) {
    while(right < N && A[right] + total <= sum) {
      total += A[right];
      results.push(A[right]);
      right += 1;
    }
    if (total === sum) {
      return results
    }
    total -= A[i];
    results.shift();
  }
  return [];
}
console.log(caterpillarMethodWithResults([6, 2, 7, 4, 1, 3, 6], 12))
console.log(caterpillarMethodWithResults([6, 2, 7, 4, 2, 6, 6], 12))
console.log(caterpillarMethodWithResults([6, 2, 7, 8, 2, 6, 6], 13))