// Given a string s, find the length of the longest Substring without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces

// Caterpillar Method
const longestSubstring = (s) => {
  let result = 0;
  let resultSet = new Set();
  let rightPointer = 0;
  for(let char of s) {
    while(rightPointer < s.length && !resultSet.has(s[rightPointer])) {
      resultSet.add(s[rightPointer]);
      rightPointer += 1;
    }
    result = Math.max(resultSet.size, result);
    resultSet.delete(char);
  }
  return result;
}

// Sliding Window Method
const longestSubstring2 = (s) => {
  let result = 0;
  const resultMap = new Map();
  let left = 0; 

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (resultMap.has(char) && resultMap.get(char) >= left ) {
      left = resultMap.get(char) + 1;
    }
    resultMap.set(char, right);
    result = Math.max(result, right - left + 1);
  }
  return result;
}

// use string indexOf method Look up
const longestSubstring3 = (s) => {
  let result = 0;
  let left = 0; 

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    const indexOfCharacterInSubstring = s.indexOf(char, left);
    if (indexOfCharacterInSubstring !== right && indexOfCharacterInSubstring !== -1) {
      left = indexOfCharacterInSubstring + 1;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
}


// console.log(longestSubstring('abcabcbb'));
console.log(longestSubstring('abcdeabcfbbcccccccccbcfhkmxgg'));
// console.log(longestSubstring('abcdeabcfbbcccccccccbefhkemxgg'));

// console.log(longestSubstring2('abcabcbb'));
// console.log(longestSubstring2('abcdeabcfbbcccccccccbcfhkmxgg'));
// console.log(longestSubstring2('abcdeabcfbbcccccccccbefhkemxgg'));

// console.log(longestSubstring3('abcabcbb'));
// console.log(longestSubstring3('abcdeabcfbbcccccccccbcfhkmxgg'));
// console.log(longestSubstring3('abcdeabcfbbcccccccccbefhkemxgg'));