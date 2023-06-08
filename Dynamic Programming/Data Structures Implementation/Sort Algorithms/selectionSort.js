function selectionSort(arr) {
  const swap = (arr, start, end) => {
    [arr[start], arr[end]] = [arr[end], arr[start]];
  }
  for (var i = 0; i < arr.length - 1; i++) {
    let lowestIdx = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowestIdx]) {
        lowestIdx = j;
      }
    }
    if (lowestIdx !== i) {
      swap(arr, i, lowestIdx);
    }
  }
  return arr;
}

//Time Complexity: O(n * n) ~ O(n^2)
//Space Complexity: O(1)

const unsorted = [4, 100, 2, 9, 33, 1, 7, 8, 22, 5];

console.log(selectionSort(unsorted));