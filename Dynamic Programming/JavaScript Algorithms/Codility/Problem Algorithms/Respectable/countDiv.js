//Codility Count Div Problem

//Compute number of integers divisible by k in range [a..b].

//Good Solution ***100%*** Using Mathematical Solution
const countDiv = (A, B, K) => {
    if (A % K === 0) return Math.floor((B - A)/K) + 1
    else return Math.floor((B - (A - (A % K)))/2)
}

//Good Solution ***100%*** Using Mathematical Solution
const countDiv2 = (A, B, K) => {
    return Math.floor(B/K) - Math.ceil(A/K) + 1
}

console.log(countDiv(7, 12, 2)) // 3
console.log(countDiv(8, 8, 2)) // 1
console.log(countDiv(6, 11, 6)) // 1
console.log(countDiv2(7, 12, 2)) // 3
console.log(countDiv2(8, 8, 2)) // 1
console.log(countDiv2(6, 11, 6)) // 1