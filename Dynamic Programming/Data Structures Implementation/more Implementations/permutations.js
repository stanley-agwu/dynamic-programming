//Permutations implementation using Recursions

//Permutations is a collection of things(items), where the order matters.
// Given a set of things(items), there are n! permutations.


//[ O(n!) - Time Complexity & O(n^2) - Space Complexity ]

const permutations = (elements) => {
    if (elements.length === 0) return [ [] ]

    const firstEl = elements[0]
    const restEl = elements.slice(1)

    const permsWithOutFirst = permutations(restEl)
    const allPermutations = []
    
    permsWithOutFirst.forEach(perm => {
        for(let i = 0; i <= perm.length; i += 1){
            const permWithFirst = [...perm.slice(0, i), firstEl, ...perm.slice(i)]
            allPermutations.push(permWithFirst)
            
        }  

    })

    return allPermutations
}


console.log(permutations(["a", "b", "c"]))
// [
//   [c, b, a],
//   [b, c, a],
//   [b, a, c],
//   [c, a, b],
//   [a, c, b],
//   [a, b, c],
// ]
console.log(permutations(["a", "b"]))
console.log(permutations([]))
console.log("-----------------------------------")

//JavaScript slice() and splice() methods are like Python sorted() and sort() methods

const A = ["a", "b", "c", "d", "e"]
A.splice(1, 0, "X")
console.log(A)
