//Codility Distinct Absolute Values of Sorted Array Elements


//Good Solution **100%**

const absDistinct = (A) => {
    const N = A.length

    if(N == 1) return 1
    
    const num_set = new Set()
    for (let num of A){
        num_set.add(Math.abs(num))
    }
    
    return num_set.size
}

console.log(absDistinct([-5, -3, -1, 0, 3, 6]))