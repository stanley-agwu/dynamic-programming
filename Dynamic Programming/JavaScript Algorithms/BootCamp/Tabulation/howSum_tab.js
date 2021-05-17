//how Sum Problem

//Write a function howSum(targetSum, numbers) that takes in a targetSum 
//and an array of numbers as arguments. The function should return an 
//array containing any combination of elements that add up to exactly 
//the targetSum. If there is no combination that adds up to the 
//targetSum, then return null. If there are multiple combinations 
//possible, you may return any single one.

//Tabulation Solution using Iteration

const howSum = (targetSum, numArray)=> {
    const table = Array( targetSum + 1 ).fill(null);
    table[0] = [];
    for (let i=0; i<=targetSum; i++){
        if (table[i] !== null){
            for (let num of numArray){
                table[ i + num ] = [ ...table[i], num ];
            }
        }
    }
    return table[targetSum]
}

//Tabulation Solution 
//m = targetSum  n=length of Array
//Time Complexity O(n * (m^2)) Polynomial
//Space Complexity O(m * m) = O(m^2)

console.log(howSum(7, [2, 3])) //[3, 2, 2]
console.log(howSum(23, [5, 7])) // null
console.log(howSum(300, [7, 14])) //null
console.log(howSum(2703, [2 ,19, 107])) //good
console.log(howSum(101, [5 , 3, 29, 17])) //good