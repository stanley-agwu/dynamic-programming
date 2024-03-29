//Write a function called unique, that takes in an 
//array and returns a new array containing the 
//unique elements.

//Naive Solution
const unique = (array) =>{
    const newArray = [];

    for (let i=0; i<array.length; i++){
        if (!newArray.includes(array[i])){
            newArray.push(array[i])
        }
    }
    return newArray;
}
//Time Complexity ==> O(n * n) ~ O(n^2)
//Space Complexity ==> O(n)

//Naive Solution ---Using reduce Array method
const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
const myArrayWithNoDuplicates = myArray.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    return [...accumulator, currentValue];
  }
  return accumulator;
}, []);

//Time Complexity ==> O(n * n) ~ O(n^2)
//Space Complexity ==> O(n)

console.log(myArrayWithNoDuplicates);

//Better Soluton--Using Set Data Structure
// set Data structure can also be used with Strings as with Arrays
const unique2 = (array) =>{
    const onlyUniques = new Set();

    for (let i=0; i<array.length; i++){
        onlyUniques.add(array[i])
    }
    return Array.from(onlyUniques);
}
//Time Complexity ==> O(n) Linear 
//Space Complexity ==> O(n)


// Best solution ---Using Set Data Structure
const unique3 = (arr) => {
    return Array.from(new Set(arr));
}
//Time Complexity ==> O(n) Linear 
//Space Complexity ==> O(n)

console.log(unique(['cat', 'dog', 'rat', 'dog', 'cat', 'bird']))//['cat', 'dog', 'rat', 'bird']
console.log(unique([1, 3, 5, 5, 2, 3, 2, 7, 1, 2, 4, 7]))//[ 1, 3, 5, 2, 7, 4]
console.log(unique2(['cat', 'dog', 'rat', 'dog', 'cat', 'bird']))//['cat', 'dog', 'rat', 'bird']
console.log(unique2([1, 3, 5, 5, 2, 3, 2, 7, 1, 2, 4, 7]))//[ 1, 3, 5, 2, 7, 4]
console.log(unique3(['cat', 'dog', 'rat', 'dog', 'cat', 'bird']))//['cat', 'dog', 'rat', 'bird']
console.log(unique3([1, 3, 5, 5, 2, 3, 2, 7, 1, 2, 4, 7]))//[ 1, 3, 5, 2, 7, 4]