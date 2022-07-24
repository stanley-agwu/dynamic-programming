//Given a string, return the character that is most 
//commonly used in the string.

//Best Solution
const maxChar = (str) => {
    const result = {};
    let max_value = 0;
    let max_char;

    for (let char of str){
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)){
            result[char] = result[char] + 1 || 1 ;
        }
    }
    for (let key in result){
        if (result[key] > max_value){
            max_value = result[key]
            max_char = key
        }
    }
    return max_char;
}
console.log(maxChar("abcccccccd"))//c
console.log(maxChar("apple 12333111"))//1
console.log(maxChar("anagramm"))//a