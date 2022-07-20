// Greedy Algorithms

// For a given set of denominations, you are asked to find the minimum 
// number of coins with which a given amount of money can be paid. That 
// problem can be approached by a greedy algorithm that always selects 
// the largest denomination not exceeding the remaining amount of money 
// to be paid. As long as the remaining amount is greater than zero, 
// the process is repeated.

//The greedy algorithm for finding change

const greedyCoinChanging = (M, A) => {
    const table = Array(A + 1).fill(null);
    table[0] = [];

    for(let i=0; i<=A; i+=1) {
        if (table[i] !== null) {
            for (let coin of M) {
                const combination = [...table[i], coin];
                if (!table[i + coin] || combination.length < table[i + coin].length) {
                    table[i + coin] = combination;
                }
            }
        }
    }
    return table[A];
}

console.log(greedyCoinChanging([1, 2, 3, 4, 5], 9)) // [4, 5]
console.log(greedyCoinChanging([1, 2, 3, 4], 6)) // [3, 3]
console.log(greedyCoinChanging([1, 2, 3, 7], 11)) // [2, 2, 7]
console.log(greedyCoinChanging([1, 2, 3, 4, 5, 7, 11], 23)) // [1, 11, 11]