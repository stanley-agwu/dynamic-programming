//  Single Element in a Sorted Array

// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

// Return the single element that appears only once.

// Your solution must run in O(log n) time and O(1) space.
// Example 1:
// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2

// Example 2:
// Input: nums = [3,3,7,7,10,11,11]
// Output: 10
 
// Constraints:
// 1 <= nums.length <= 105
// 0 <= nums[i] <= 105

// Time complexity => O log(n)
const singleElementInSortedArray = (nums) => {
  let left  = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor(right - left) / 2;
    if ((mid - 1 < 0 || nums[mid - 1] !== nums[mid]) && (mid + 1 >= nums.length || nums[mid] !== nums[mid+ 1])) {
      return nums[mid];
    }
    leftSize = nums[mid - 1] === nums[mid] ? mid - 1 : mid;
    if (leftSize % 2) {
      right = mid + 1;
    } else {
      left = mid + 1;
    }
  }
}

// Time complexity => O (n)
const singleElementInSortedArray2 = (nums) => {
  let left  = 0;
  let right = 1;
  while (left < nums.length) {
    if (nums[left] !== nums[right]) {
      return nums[left];
    }
    left += 2;
    right += 2;
  }
}

console.log(singleElementInSortedArray([1,1,2,3,3,4,4,8,8])); // 2
console.log(singleElementInSortedArray([3,3,7,7,10,10,11])); // 11
console.log(singleElementInSortedArray2([1,1,2,3,3,4,4,8,8])); // 2
console.log(singleElementInSortedArray2([3,3,7,7,10,10,11])); // 11