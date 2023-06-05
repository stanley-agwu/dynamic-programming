function bubbleSort(arr) {
  const swap = (arr, start, end) => {
    [arr[start], arr[end]] = [arr[end], arr[start]];
  }
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr;
}

//Time Complexity: O(n * n) ~ O(n^2)
//Space Complexity: O(1)

const unsorted = [4, 100, 2, 14, 9, 33, 1, 7, 8, 22, 5];

console.log(bubbleSort(unsorted));