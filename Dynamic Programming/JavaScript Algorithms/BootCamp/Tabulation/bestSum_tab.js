//best Sum Problem

//Write a function bestSum(targetSum, numbers) that takes in a targetSum 
//and an array of numbers as arguments. The function should return an 
//array containing the shortest combination of numbers that add up to 
//exactly the targetSum. If there is a tie for the shortest combination, 
//you may return any one of the shortest.

//Tabulation Solution using Iteration

//****This is Greedy Algorithm*****

const bestSum = (targetSum, numArray)=> {
    const table = Array( targetSum + 1 ).fill(null);
    table[0] = [];
    for (let i=0; i<=targetSum; i++){
        if (table[i] !== null){
            for (let num of numArray){ 
                const combination = [ ...table[i], num ]
                //if this current combination is shorter than what is already stored
                if ( !table[ i + num ]  || table[ i + num ].length > combination.length ){
                    // Null and undefined are falsy values in JavaScript, 
                    //thus !table[ i + num] => Not false (null or undefined)
                    table[ i + num ] = combination;
                } 
            }
        }
    }
    return table[targetSum]
}

//Tabulation Solution 
//m = targetSum  n=length of Array
//Time Complexity O(n * m * m) = O(n * m^2) Polynomial
//Space Complexity O(m * m) = O(m^2)

console.log(bestSum(7, [2, 3, 5, 1])) // [5, 2]
console.log(bestSum(23, [5, 7, 2, 1])) //7 7 7 2 
console.log(bestSum(300, [7, 14, 45, 58, 5, 60])) //60 60 60 60 60
console.log(bestSum(2703, [2 ,19, 107, 199, 543, 342, 10, 5])) //
console.log(bestSum(100, [5 ,3, 28, 57, 4, 44, 25])) //28 28 44