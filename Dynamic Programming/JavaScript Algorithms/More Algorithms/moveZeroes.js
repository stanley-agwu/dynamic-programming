// Move zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]
 

// Constraints:
// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

const moveZeroes = (nums) => {
  let left = 0;
  let right = 0;
  
  while(right < nums.length) {
    // nums[right] is non zero, swap
    if (nums[right]) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left += 1;
    }
    right += 1;
  }
  return nums;
}

console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]
console.log(moveZeroes([1, 17, 4, 6, 9, 0, 0, 0, 3, 0, 7, 8, 4])); // [1, 17, 4, 6, 9, 3, 7, 8, 4, 0, 0, 0, 0]