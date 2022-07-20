//Implementation of sum of elements of an Array using recursion.

const sum = (array) => {
    if (array.length === 0) return 0;

    return array[0] + sum(array.slice(1));
    //Slice() operation is costly! 
    //costing us O(n) Time Complexity; 
}
// Time Complexity : O ( n * n ) ~ O( n^2) Quadratic Time
// Space Complexity : O ( 1 )


//To avoid the use of the slice operation and thus 
//minimize our Time Complexity, we use an Helper Function

const sum2 = (array) => {
    return _sum (array, 0);
}

const _sum = (array, idx) => {
    if (idx === array.length) return 0;

    return array[idx] + _sum(array, idx + 1);

}
// Time Complexity : O ( n ) Linear
// Space Complexity : O ( n )


console.log(sum([1, 5, 7, -2]))
console.log(sum2([1, 5, 7, -2]))