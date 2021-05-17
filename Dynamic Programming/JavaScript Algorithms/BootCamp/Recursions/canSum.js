//Can Sum Problem

//Write a function canSum(targetSum, numbers) that takes in a targetSum 
//and an array of numbers as arguments. The function should return a 
//boolean indicating whether or not it is possible to generate the 
//targetSum using numbers from the array. You may use an element of 
//the array as many times as needed. You may assume that all input 
//numbers are non-negative.

//Using memoization

const canSum = (targetSum, numArray, memo={})=> {
    if (targetSum in memo) return memo[targetSum];

    if(targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numArray){
        const remainder = targetSum - num;
        if (canSum(remainder, numArray, memo) === true){
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}

//Brute Force 
//m = targetSum  n=length of Array
//Time Complexity O((n^m)* m) ~ O(n^m) Exponential
//Space Complexity O(m) 

//Memoized Solution 
//Time Complexity O(m * n) Polynomial
//Space Complexity O(m) 

console.log(canSum(7, [2, 3])) // true
console.log(canSum(23, [5, 7])) //false
console.log(canSum(300, [7, 14])) //false
console.log(canSum(2703, [2 ,19, 107])) //true
console.log(canSum(1007, [5 ,3, 29, 57])) //true