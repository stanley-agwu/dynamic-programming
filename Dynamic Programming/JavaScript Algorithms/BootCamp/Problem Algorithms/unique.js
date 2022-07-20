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
//Time Complexity ==> O(n) ~ O(n)
//Space Complexity ==> O(n)

//Better Soluton--Using Set Data Structures
const unique2 = (array) =>{
    const onlyUniques = new Set();

    for (let i=0; i<array.length; i++){
        onlyUniques.add(array[i])
    }
    return Array.from(onlyUniques);
}
//Time Complexity ==> O(n) Linear 
//Space Complexity ==> O(n)

console.log(unique(['cat', 'dog', 'rat', 'dog', 'cat', 'bird']))//['cat', 'dog', 'rat', 'bird']
console.log(unique([1, 3, 5, 5, 2, 3, 2, 7, 1, 2, 4, 7]))//[ 1, 3, 5, 2, 7, 4]
console.log(unique2(['cat', 'dog', 'rat', 'dog', 'cat', 'bird']))//['cat', 'dog', 'rat', 'bird']
console.log(unique2([1, 3, 5, 5, 2, 3, 2, 7, 1, 2, 4, 7]))//[ 1, 3, 5, 2, 7, 4]