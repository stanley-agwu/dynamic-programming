//Grid Traveller Problem

//Say that you are a traveller on a 2D grid. You begin in the top-left 
//corner and your goal is to travel to the bottom-right corner. You may 
//only move down or right. In how many ways can you travel to the goal 
//on a grid with dimensions m * n.

//Tabulation Solution using Iteration

const gridTraveller = (m, n)=> {
    const table = Array( m + 1 )
        .fill()
        .map(() => Array( n + 1 ).fill(0))
    table[1][1] = 1;
    for (let i=0; i<=m; i++){
        for (let j=0; j<=n; j++){
            const current = table[i][j];
            if (j + 1 <= n) table[i][j + 1] += current;// Bound checking to ensure within bound
            if (i + 1 <= m) table[i + 1][j] += current;// Bound checking to ensure within bound
        }
        
    }
    return table[m][n];
}

//Tabulation Solution 
//Time Complexity O(m * n) Polynomial
//Space Complexity O(m * n) Quadratic

console.log(gridTraveller(1, 1))//1
console.log(gridTraveller(2, 2))//2
console.log(gridTraveller(2, 3))//3
console.log(gridTraveller(3, 2))//3
console.log(gridTraveller(3, 3))//6
console.log(gridTraveller(18, 18))//2333606220