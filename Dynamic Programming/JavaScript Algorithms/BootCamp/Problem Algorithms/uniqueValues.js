//Implement a function called countUniqueValues, which accepts
//a sorted array, and counts the unique values in the array.
//There can be negative numbers in the array, but it will 
//always be sorted.

//Golden Solution => O( n )
const countUniqueValues1 = (arr) => {
    const result = Array.from(new Set(arr))
    
    return result.length
}
// set Data structure can also be used with Strings

//Good Solution => O( n )
const countUniqueValues2 = (arr) => {
    if(arr.length === 0) return 0;
    let i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

console.log(countUniqueValues1([1,2,2,5,7,7,99]))
console.log(countUniqueValues1([ ]))
console.log(countUniqueValues1([-5, -5, -3, -2, -2, 0, 5, 7, 7, 99]))
console.log(countUniqueValues2([1,2,2,5,7,7,99]))
console.log(countUniqueValues2([ ]))
console.log(countUniqueValues2([-5, -5, -3, -2, -2, 0, 5, 7, 7, 99]))
