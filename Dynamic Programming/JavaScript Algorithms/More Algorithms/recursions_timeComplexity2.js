//Coins Problem

//Calcualte he number of ways of generating 5 cents from a denominations set (Array) of 1 and 2 cents [1, 2].

//(1)
//[ O(2^n) - Time Complexity & O(n^2) - Space Complexity ]
const coins = (amount) => {
    const denomArr = [1, 2]
    if (amount === 0) return 1
    if (amount < 0) return 0

    let numberOfWays = 0

    for (let i = 0; i < denomArr.length; i += 1){
        numberOfWays += coins(amount - denomArr[i])
    }
    return numberOfWays

}

// const coins2 = (amount, idx) => {
//     const denomArr = [1, 2]
//     if (amount === 0) return 1
//     if (amount < 0) return 0

//     let numberOfWays = 0

//     for (let i = 0; i < denomArr.length; i += 1){
//         numberOfWays += coins(amount - denomArr[i], i)
//     }
//     return numberOfWays

// }

// console.log(coins(5))
console.log(coins(4))
// console.log(coins(10))
// console.log(coins2(5))
console.log(coins2(4))
// console.log(coins2(10))