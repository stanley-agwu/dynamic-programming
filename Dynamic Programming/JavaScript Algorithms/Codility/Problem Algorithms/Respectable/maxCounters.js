//Codility MaxCounters Problem
//Calculate the values of counters after applying all alternating operations: 
//increase counter by 1; set value of all counters to current maximum.


//Good Solution **88%**
//Principle of Logical operations at the top level*** 
//to simplify and make solution faster. Use of if/else at the top level

const maxCounters = (N, A) =>{
    let counter = new Array(N).fill(0)

    let maxCount = 0

    for (let val of A){
        let n = 0
        if (val < N + 1){
            counter[val - 1] += 1
            maxCount = Math.max(maxCount, counter[val - 1])
        } else if (val === N + 1 && n === 0){
            n = 1
            counter = Array(N).fill(maxCount)
        }
    }
    return counter
}

console.log(maxCounters(5, [3, 4, 4, 6, 1, 4, 4]))
console.log(maxCounters(5, [2, 3]))
console.log(maxCounters(5, [6, 4, 4, 4]))
