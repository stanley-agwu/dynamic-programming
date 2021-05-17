//best Sum Problem

//Write a function bestSum(targetSum, numbers) that takes in a targetSum 
//and an array of numbers as arguments. The function should return an 
//array containing the shortest combination of numbers that add up to 
//exactly the targetSum. If there is a tie for the shortest combination, 
//you may return any one of the shortest.

//Using memoization

const bestSum = (targetSum, numArray, memo={})=> {
    if (targetSum in memo) return memo[targetSum];

    if(targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numArray){
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numArray, memo)
        if (remainderCombination !== null){
            const combination = [ ...remainderCombination, num];
            
            if (shortestCombination === null || 
                combination.length < shortestCombination.length)
                {
                shortestCombination = combination;
            }

            
        }
    }
    
    memo[targetSum] = shortestCombination;
    return shortestCombination;
}
//Brute Force 
//m = targetSum  n=length of Array
//Time Complexity O(n^m * m) ~ O(n^m) Exponential
//Space Complexity O(m * m) = O(m^2)

//Memoized Solution 
//Time Complexity O(n * m * m) = O(n * m^2) Polynomial
//Space Complexity O(m * m) = O(m^2)

console.log(bestSum(7, [2, 3, 5, 1])) // [5, 2]
console.log(bestSum(23, [5, 7, 2, 1])) //false
console.log(bestSum(300, [7, 14, 45, 58, 5, 2])) //false
console.log(bestSum(2703, [2 ,19, 107, 199, 543, 342, 10, 5])) //true
console.log(bestSum(1007, [5 ,3, 29, 57, 97, 44, 25])) //true