// Given an array of nums and integer target, return indices of the two numbers
// such that they add up to target.

//You may assume that each input would have exactly one solution, and you may
// not use the same element twice. You can return the answer in any order.

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 
// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// Memoization solution
const twoSum = (numsArray, target) => {
  const memo = {};
  for(let i = 0; i < numsArray.length; i += 1) {
    const complimentIndex = memo[numsArray[i]];
    if (complimentIndex) {
      return [...complimentIndex, i]
    }
    const compliment = target - numsArray[i];
    memo[compliment] = [i];
  }
  return [];
}

// Tabulation method
const twoSum2 = (numsArray, target) => {
  const table = Array(target + 1).fill(null);

  // base case
  table[0] = [];

  for(let i = 0; i <= target; i += 1) {
    if (table[i]) {
      for (let j = 0; j < numsArray.length; j += 1) {
        const num = numsArray[j];
        if (!table[i + num]) {
          table[i + num] = [...table[i], j]
        }
      }
    }
  }
  return table[target];
}

// Recursively
const helper = (nums, targetSum, memo) => {
  if (targetSum in memo) {
    return memo[targetSum];
  }
  if (targetSum === 0) {
    return [];
  }
  if (targetSum < 0) {
    return null;
  }
  for(let i = 0; i < nums.length; i += 1) {
    const reminder = targetSum - nums[i];
    const reminderResult = helper(nums, reminder, memo);
    if (reminderResult) {
      memo[targetSum] = [...reminderResult, i];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return memo[targetSum];
}

const twoSum3 = (numsArray, target) => {
  return helper(numsArray, target, {});
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum3([2, 7, 11, 15], 9));
console.log(twoSum([2, 1, 7, 11, 15, 6, 4, 32, 56, 33, 21], 33));
console.log(twoSum2([2, 1, 7, 11, 15, 6, 4, 32, 56, 33, 21], 33));
console.log(twoSum3([2, 1, 7, 11, 15, 6, 4, 32, 56, 33, 21], 33));