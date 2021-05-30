// The Challenge
// This week we’re focusing on an algorithms based question asked during an interview at Amazon. 
//In this challenge, we’re asked to write a function ArrayAddition in Javascript that takes in 
//an array of numbers stored in a variable named arr. The function should return the string true 
//if any combination of numbers in the array (excluding the largest number) can be added up to 
//equal the largest number in the array. Otherwise, the function should return the string false.

// Examples:

// If arr contains [ 4, 6, 23, 10, 1, 3 ] the output should return true because 23 is the largest number and 4 + 6 + 10 + 3 = 23.
// If arr contains [ 5, 7, 16, 1, 2 ], the output should return false because none of the numbers add up to the largest number of 16.
// If arr contains [ 3, 5, -1, 8, 12 ], the output should return true because 12 is the largest number and 5 + 8 - 1 = 12.
// Some assumptions we can make:

// The arr will not be empty.
// The arr will not contain all the same elements but can contain some duplicate elements. For instance, the array cannot be [ 2, 2 ], however, it can be [ 2, 2, 4 ]
// The array may contain negative numbers.

const arrayAddition = (Arr) =>{
    const target = maxValue(Arr, 0, 0)
    
    const Arr2 = Arr.filter(e => e !== target)

    return _arrayAddition(Arr2, target)
    
}

//[O(n) Time Complexity & O(n) Space Complexity]
const maxValue = (array, target, index) => {
    if (index === array.length) return target
    if (array[index] > target) {
        target = array[index]
    }
    return maxValue(array, target, index + 1)
}

const _arrayAddition = (arr, target) => {
    if (target === 0) return true
    if (target < 0) return false

    let j = 0
    while (j < arr.length){
        let remainder = target - arr[j]
        const newArr = arr.filter(e => e !== arr[j])
        const result = _arrayAddition(newArr, remainder)
        let resultValues = []
        if (result === true) {
            resultValues.push(arr[j])
            //console.log(resultValues)
            return true
        }

        j += 1
    }
    return false
}
console.log(arrayAddition([ 3, -5, -1, 8, 11, 15, 27 ])) // false
console.log(arrayAddition([ 4, 6, 23, 10, 1, 3 ])) // true
console.log(arrayAddition([ 5, 7, 16, 1, 2 ])) // false
console.log(arrayAddition([ 3, 5, -1, 8, 12 ])) // true


