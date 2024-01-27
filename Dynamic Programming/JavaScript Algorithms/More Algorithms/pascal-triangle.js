// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]
 
// Constraints:

// 1 <= numRows <= 30

const pascalTriangle = (num) => {
  const first = 1;
  const last = 1;
  let result = [];

  if (num >= 1) {
    result.push([first]);
  }
  if (num >= 2) {
    result.push([first, last]);
  }

  for (let i = 2; i < num; i++) {
    let prevArray = result[i - 1];

    if (prevArray.length === 2) {
      result.push([first, first + last, last]);
    } else {
      let left = 0;
      let right = 1;
      let triangle = []
      while (right < prevArray.length) {
        triangle.push(prevArray[left] + prevArray[right]);
        left += 1;
        right += 1;
      }
      result.push([first, ...triangle, last]);
    }
  }
  return result;
}

console.log(pascalTriangle(5));