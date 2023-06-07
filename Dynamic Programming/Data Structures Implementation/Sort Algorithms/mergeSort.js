// Recursive Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  const results = [];

  while(i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      results.push(arr2[j]);
      j++;
    } else {
      results.push(arr1[i]);
      i++;
    }
  }

  while(i < arr1.length) {
    results.push(arr1[i]);
    i++
  }
  while(j < arr2.length) {
    results.push(arr2[j]);
    j++
  }

  return results;
}

//Time Complexity: O(nlogn)
//Space Complexity: O(n)


const unsorted = [4, 100, 2, 14, 19, 23, 9, 33, 1, 2, 7, 8, 22, 5];

console.log(mergeSort(unsorted));