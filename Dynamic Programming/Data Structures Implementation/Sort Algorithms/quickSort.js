function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivotIdx(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

function pivotIdx (arr, start, end) {
  const swap = (arr, startIdx, endIdx) => {
    [arr[startIdx], arr[endIdx]] = [arr[endIdx], arr[startIdx]];
  }

  const pivot = arr[start];
  let swapIdx = start;

  for(let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx)
  return swapIdx;
}

//Time Complexity: O(n * n) ~ O(n^2)
//Space Complexity: O(nlogn)

const unsorted = [4, 100, 44, 2, 14, 19, 23, 9, 33, 1, 2, 7, 8, 22, 5];

console.log(quickSort(unsorted));