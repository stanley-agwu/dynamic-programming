// Write a program that counts the number of duplicates.
// For example given 3 sets of array A, B, C, a duplicate exist if for the same index in
// the three arrays, the values are the same for any two or more sets.
// E.g A = ['ball', 'screw', 'towels', 'ball'], B = [3, 4, 2, 3] C = [3, 1, 7, 3] => 1 duplicate
// E.g A = ['house', 'lamp', 'table', 'lamp', 'chair', 'lamp', 'lamp'], 
// B = [1, 2, 4, 2, 8, 3, 2] C = [3, 2, 7, 2, 5, 2, 2] => 2 duplicates

const getDuplicates = (A, B, C) => {
  const results = A.map((name, index) => JSON.stringify({name, value: B[index], result: C[index]}));
  return results.length - new Set(results).size;
}

console.log(getDuplicates(['ball', 'screw', 'towels', 'ball'], [3, 4, 2, 3], [3, 1, 7, 3])); // 1
console.log(getDuplicates(['house', 'lamp', 'table', 'lamp', 'chair', 'lamp', 'lamp'], [1, 2, 4, 2, 8, 2, 3], [3, 2, 7, 2, 5, 2, 2])); // 2