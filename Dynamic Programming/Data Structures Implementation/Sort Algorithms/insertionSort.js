function insertionSort(arr) {
  const swap = (arr, start, end) => {
    [arr[start], arr[end]] = [arr[end], arr[start]];
  }
  for (var i = 1; i < arr.length; i++) {
    for (var j = i; j >= 0 && arr[ j - 1] > arr[j]; j--) {
      swap(arr, j - 1, j);
    }
  }
  return arr;
}

//Time Complexity: O(n * n) ~ O(n^2)
//Space Complexity: O(1)

const unsorted = [4, 100, 2, 9, 33, 1, 7, 8, 22];

console.log(insertionSort(unsorted));