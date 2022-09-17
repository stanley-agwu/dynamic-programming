//Codility MaxCounters Problem

//Calculate the values of counters after applying all alternating operations: 
//increase counter by 1; set value of all counters to current maximum.


//Golden Solution **100%**

const maxCounters = (N, A) =>{
    let counters = Array(N).fill(0);
    const C = counters.length;
    let maxCount = 0;
    let minCount = 0;

    for(let i of A) {
        if (i < N + 1) {
            if (counters[i - 1] < minCount) {
                counters[i - 1] = 1 + minCount;
            } else {
                counters[i - 1] = counters[i - 1] + 1;
            }
            maxCount = Math.max(maxCount, counters[i - 1])
        } else {
            minCount = maxCount;
        }
    }

    for (let i = 0; i < C; i++) {
        if (counters[i] < minCount) {
            counters[i] = minCount
        }
    }
    return counters;
}

console.log(maxCounters(5, [3, 4, 4, 6, 1, 4, 4])) // [ 3, 2, 2, 4, 2 ]
console.log(maxCounters(5, [2, 3])) // [ 0, 1, 1, 0, 0 ]
console.log(maxCounters(5, [6, 4, 4, 4])) // [ 0, 0, 0, 3, 0 ]
console.log(maxCounters(5, [3, 2, 2, 2, 4, 4, 4, 6, 1, 4, 4, 6, 6, 1, 1, 1, 1, 1, 1, 6, 1])) // [ 12, 11, 11, 11, 11 ]