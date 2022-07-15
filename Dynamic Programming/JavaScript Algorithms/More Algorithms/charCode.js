const getCharCode = (array) => {
    return array.map((item) => String(item).charCodeAt())
}


const numArray = [-3, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const charArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const capCharArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// console.log(getCharCode(numArray)); 
/*     [
    45, 48, 49, 50, 51, 52, 53, 54, 55,
    56, 57, 49, 49, 49, 49, 49,
    49, 49, 49, 49, 49, 50
  ] */
// console.log(getCharCode(charArray));
/* [
    97,  98,  99, 100, 101, 102,
   103, 104, 105, 106, 107, 108,
   109, 110, 111, 112, 113, 114,
   115, 116, 117, 118, 119, 120,
   121, 122
 ] */
// console.log(getCharCode(capCharArray));
/* [
    65, 66, 67, 68, 69, 70, 71, 72,
    73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88,
    89, 90
  ] */

let index = 97;
const getAllCharCodes = (N) => Array(N).fill(0).map((_) => {
    index += 1;
    return String.fromCharCode(index);
})

console.log(getAllCharCodes(100));