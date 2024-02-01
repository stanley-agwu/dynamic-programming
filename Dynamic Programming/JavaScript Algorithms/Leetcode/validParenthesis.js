// Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false
 
// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


// Using stack data structure
// Time complexity => O(n) Space Complecity => O(n)
const validParentheses = (s) => {
  const bracketsHash = { ')': '(', '}': '{', ']': '[' };
  const stack = [];

  if (s.length % 2) {
    return false;
  }

  for (let char of s) {
    if (char in bracketsHash) {
      if ((stack.length && bracketsHash[char] === stack[stack.length -1])) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char)
    }
  }
  return !stack.length;
}

console.log(validParentheses('()')); // true
console.log(validParentheses('())')); // false
console.log(validParentheses('()[]{}')); // true
console.log(validParentheses('(]')); // false
console.log(validParentheses('[][]{}')); // true
console.log(validParentheses('[][]{]')); // false
console.log(validParentheses('([])([])')); // true