// Remove K Digits
// Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

// Example 1:
// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

// Example 2:
// Input: num = "10200", k = 1
// Output: "200"
// Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.

// Example 3:
// Input: num = "10", k = 2
// Output: "0"
// Explanation: Remove all the digits from the number and it is left with nothing which is 0.
 
// Constraints:
// 1 <= k <= num.length <= 105
// num consists of only digits.
// num does not have any leading zeros except for the zero itself.


// Time complexity => O(n) Space complexity => O(n)
const removeKDigits = (num, k) => {
  let stack = [];

  for (let char of num) {
    while (k > 0 && stack.length && stack[stack.length - 1] > char) {
      k -= 1;
      stack.pop();
    }
    stack.push(char);
  }
  stack = k > 0 ? stack.slice(0, stack.length - k) : stack;
  const result = stack.join('');
  return result ? String(parseInt(result, 10)) : '0';
}

console.log(removeKDigits('1432219', 3)); // 1219
console.log(removeKDigits('10200', 1)); // 200
console.log(removeKDigits('10', 2)); // 0
console.log(removeKDigits('1432219627', 5)); // 11627