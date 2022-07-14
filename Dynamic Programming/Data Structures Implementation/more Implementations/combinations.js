//Combinations implementation using Recursions

//Combinations is a collection of things(items), where the order does not matter.
//Given a set of n things(items), there are 2^n combinations.

//[ O(2^n) - Time Complexity & O(n^2) - Space Complexity ]

const combinations = (elements) => {
    if (elements.length === 0) return [ [] ]

    const firstEl = elements[0]
    const restEl = elements.slice(1)

    const combsWithOutFirst = combinations(restEl)
    const combsWithFirst = []
    
    combsWithOutFirst.forEach(comb => {
        const combWithFirst = [...comb, firstEl] 
        combsWithFirst.push(combWithFirst)
    })


    return [...combsWithOutFirst, ...combsWithFirst]

}


console.log(combinations(["a", "b", "c"]))
// [
//   [],
//   [a],
//   [b],
//   [c],
//   [a, b],
//   [a, c],
//   [b, c],
//   [a, b, c]
// ]
console.log(combinations(["a", "b"]))
console.log(combinations([]))

//   [a, b, c]
//     /    \
//   [a]   [b, c]
//           / \
//          [b] [c]
//              / \
//             [c] []