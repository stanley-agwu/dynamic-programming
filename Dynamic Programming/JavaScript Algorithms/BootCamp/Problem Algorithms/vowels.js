// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.


//Using Iterative Solution
const vowels = (str) => {
    const vowels_list = ['a', 'e', 'i', 'o', 'u'] 
    //"aeiou" we could also use a string for same purpose

    let count = 0;
    for (let char of str.toLowerCase()){
        if (vowels_list.includes(char)) count ++;
    }
    return count;
}
//Time Complexity: O(n * n) ~ O(n^2)
//Space Complexity: O(1)


//Using Regular Expressions Method
const vowels2 = (str) => {
    const matches = str.match(/[aeiou]/gi);

    return matches ? matches.length : 0;
}
//Time Complexity: O(n)
//Space Complexity: O(1)

console.log(vowels('Hi There!'))// --> 3
console.log(vowels('Why do you ask?'))// --> 4
console.log(vowels('Why?'))// --> 0
console.log(vowels2('Hi There!'))// --> 3
console.log(vowels2('Why do you ask?'))// --> 4
console.log(vowels2('Why?'))// --> 0