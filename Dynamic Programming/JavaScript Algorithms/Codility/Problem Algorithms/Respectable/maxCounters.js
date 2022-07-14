//Codility MaxCounters Problem

//Calculate the values of counters after applying all alternating operations: 
//increase counter by 1; set value of all counters to current maximum.


//Good Solution **88%**

const maxCounters = (N, A) =>{
    let counter = new Array(N).fill(0)

    let maxCount = 0
    let m = 0

    for (let val of A){
        if (val < N + 1){
            counter[val - 1] += 1
            maxCount = Math.max(maxCount, counter[val - 1])
            m = 1
        } else if (val > N && m === 1){
            counter = Array(N).fill(maxCount) 
            //used m variable to prevent this O(n) operation from running when max counter is called consecutively
            m = 2
        }
    }
    return counter
}

console.log(maxCounters(5, [3, 4, 4, 6, 1, 4, 4]))
console.log(maxCounters(5, [2, 3]))
console.log(maxCounters(5, [6, 4, 4, 4]))
