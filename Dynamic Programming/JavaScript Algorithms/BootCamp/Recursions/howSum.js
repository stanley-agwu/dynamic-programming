//how Sum Problem

//Write a function howSum(targetSum, numbers) that takes in a targetSum 
//and an array of numbers as arguments. The function should return an 
//array containing any combination of elements that add up to exactly 
//the targetSum. If there is no combination that adds up to the 
//targetSum, then return null. If there are multiple combinations 
//possible, you may return any single one.

//Using memoization

const howSum = (targetSum, numArray, memo={}) => {
    if (targetSum in memo) {
        return memo[targetSum];
    }

    if(targetSum === 0) {
        return [];
    }
    if (targetSum < 0) {
        return null;
    }

    for (const num of numArray){
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numArray, memo)
        if (remainderResult != null){
            memo[targetSum] = [...remainderResult, num]
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
}
//Brute Force 
//m = targetSum  n=length of Array
//Time Complexity O((n^m)* m) ~ O(n^m) Exponential
//Space Complexity O(m) 

//Memoized Solution 
//Time Complexity O(n * (m^2)) Polynomial
//Space Complexity O(m * m) = O(m^2)

console.log(howSum(17, [2, 3])) //[3, 2, 2]
//console.log(howSum(23, [5, 7, 3])) // null
// console.log(howSum(300, [7, 14])) //null
// console.log(howSum(2703, [2 ,19, 107])) //good
// console.log(howSum(101, [5 , 3, 29, 17])) //good