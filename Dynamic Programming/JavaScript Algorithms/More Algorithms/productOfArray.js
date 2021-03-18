//Write a function called productOfArray which takes in an array of
//numbers and returns the product of them all.

//Using Iterative Solution
const  productOfArray = (array) =>{
    let num_total = 1;
    for (let num of array){
        num_total *= num;
    }
    return num_total;
}
//Time Complexity: O(n)
//Space Complexity: O(1)

//Using Recursive Solution
const  productOfArray2 = (array) =>{
    if (array.length === 0) return 1;
    
    return array[0] * productOfArray2(array.slice(1))
}
//Time Complexity: O(n * n) ~ O(n^2)
//Space Complexity: O(1)

console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60
console.log(productOfArray2([1,2,3])) // 6
console.log(productOfArray2([1,2,3,10])) // 60