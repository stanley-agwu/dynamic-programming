// You are given two 0-indexed integer arrays nums1 and nums2 of sizes n and m, respectively.

// Consider calculating the following values:

// The number of indices i such that 0 <= i < n and nums1[i] occurs at least once in nums2.
// The number of indices i such that 0 <= i < m and nums2[i] occurs at least once in nums1.
// Return an integer array answer of size 2 containing the two values in the above order.


// Best solution at the moment
const findIntersectionValues = (nums1, nums2)  => {
  let count1 = 0;
  let count2 = 0;
  for (let num of nums1) {
    if (nums2.includes(num)) {
      count1 += 1;
    }
  }

  for (let num of nums2) {
    if (nums1.includes(num)) {
      count2 += 1;
    }
  }
  return [count1, count2];
};

findIntersectionValues([4,3,2,3,1], [2,2,5,2,3,6]); // [3, 4]
findIntersectionValues([3,4,2,3], [1,5]); // [0, 0]