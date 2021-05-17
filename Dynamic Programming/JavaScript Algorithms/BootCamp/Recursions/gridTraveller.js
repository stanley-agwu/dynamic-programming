//Grid Traveller Problem

//Say that you are a traveller on a 2D grid. You begin in the top-left 
//corner and your goal is to travel to the bottom-right corner. You may 
//only move down or right. In how many ways can you travel to the goal 
//on a grid with dimensions m * n.

//Using memoization

const gridTraveller = (m, n, memo={}) =>{
    const key= m + "," + n;// const key = `${m},${n}`
    if (key in memo) return memo[key];

    if (m ===0 || n===0) return 0;
    if (m===1 && n===1) return 1;
    
    memo[key] = gridTraveller(m-1, n, memo) + gridTraveller(m, n-1, memo)
     
    return memo[key]
}

//Brute Force 
//m = Number of Rows  n=Number of Columns
//Time Complexity O(2^(n+m)) Exponential
//Space Complexity O(n + m) 

//Memoized Solution 
//Time Complexity O(m * n) Polynomial
//Space Complexity O(n + m) 

console.log(gridTraveller(2, 2))
console.log(gridTraveller(2, 3))
console.log(gridTraveller(3, 3))
console.log(gridTraveller(4, 4))
console.log(gridTraveller(5, 5))
console.log(gridTraveller(16, 16))