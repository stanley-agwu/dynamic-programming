//Given an array and chunk size, divide the array into many 
//subarrays where each subarray is of length size.

//Good solution  --- Using Iterative Method
const chunk = (numArray, size) => {
    const table = [[]];
    for (let num of numArray){
        const lastItem = table[table.length - 1];
        if (!lastItem.length || lastItem.length < size) {
            lastItem.push(num);
        } else table.push([num]);

    }
    return table;
}

// Time Complexity : O ( n ) Linear Time
// Space Complexity : O ( n * m ) Exponential space

//Good solution  --- Using Slice() method
const chunk2 = (numArray, size) =>{
    const table = [];
    let index = 0;

    while(index < numArray.length){
        table.push(numArray.slice(index, index + size));
        index += size
    }
    return table
}

// Time Complexity : O ( n ) Linear Time
// Space Complexity : O ( n * m ) Exponential space


console.log(chunk([], 2))//[ [] ]
console.log(chunk([1, 2, 3, 4], 2))//[ [ 1, 2 ], [ 3, 4 ] ]
console.log(chunk([1, 2, 3, 4, 5], 2))//[ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
console.log(chunk([1, 2, 3, 4, 5], 4))//[ [ 1, 2, 3, 4 ], [ 5 ] ]
console.log(chunk([1, 2, 3, 4, 5], 10))//[ [ 1, 2, 3, 4, 5 ] ]
console.log(chunk2([], 2))//[ [] ]
console.log(chunk2([1, 2, 3, 4], 2))//[ [ 1, 2 ], [ 3, 4 ] ]
console.log(chunk2([1, 2, 3, 4, 5], 2))//[ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
console.log(chunk2([1, 2, 3, 4, 5], 4))//[ [ 1, 2, 3, 4 ], [ 5 ] ]
console.log(chunk2([1, 2, 3, 4, 5], 10))//[ [ 1, 2, 3, 4, 5 ] ]