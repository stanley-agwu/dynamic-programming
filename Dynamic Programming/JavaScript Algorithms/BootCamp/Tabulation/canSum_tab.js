//Can Sum Problem

//Write a function canSum(targetSum, numbers) that takes in a targetSum 
//and an array of numbers as arguments. The function should return a 
//boolean indicating whether or not it is possible to generate the 
//targetSum using numbers from the array. You may use an element of 
//the array as many times as needed. You may assume that all input 
//numbers are non-negative.

//Tabulation Solution using Iteration

const canSum = (targetSum, numArray)=> {
    const table = Array( targetSum + 1 ).fill(false);
    table[0] = true;
    for (let i=0; i<=targetSum; i++){
        if (table[i] === true){
            for (num of numArray){
                table[ i + num ] = true;
            }
        }
    }
    return table[targetSum]
}

//Tabulation Solution 
//m = targetSum  n=length of Array
//Time Complexity O(m * n) Polynomial
//Space Complexity O(m) 

console.log(canSum(7, [2, 3])) // true
console.log(canSum(23, [5, 7])) //false
console.log(canSum(300, [7, 14])) //false
console.log(canSum(2703, [2 ,19, 107])) //true
console.log(canSum(1007, [5 ,3, 29, 57])) //true