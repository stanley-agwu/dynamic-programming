// Given a string s, find the length of the longest substring without repeating characters.
// Input: 'abcabcbb'
// Output: 3 (abc)

const longestSubString = (s) => {
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


console.log(longestSubString('abcabcbb'));
console.log(longestSubString('abcdeabcfbbcccccccccbcfhkmxgg'));
console.log(longestSubString('abcdeabcfbbcccccccccbefhkemxgg'));