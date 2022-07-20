//Eficient Reverse Methods

//Reversing Array Using Array Destructuring => O(n/2)
const reverseArray = (A) => {
    const N = A.length
    const M = Math.floor(N/2)
    let k = N - 1
    let i = 0
    while(i < M){
        [A[i], A[k]] = [A[k], A[i]] 
        i += 1
        k -= 1
    }

    return A
}

//Time Complexity => O(n/2)
//Space Complexity => O(1)


//Reversing String Using Array Destructuring => O(n/2)
const reverseString = (str) => {
    const N = str.length
    const M = Math.floor(N/2)
    const Array = str.replace(/[^\w]/g, "").toLowerCase().split("")
    // const Array2 = Array.reverse()    // Time Complexity => O(n)
    let k = N - 1
    let i = 0
    while(i < M){
        [Array[i], Array[k]] = [Array[k], Array[i]] 
        i += 1
        k -= 1
    }
    // return Array2.join("")
    return Array.join("")
}
//Time Complexity => O(n/2)
//Space Complexity => O(1)


console.log(reverseArray(['a', 'b', 'c', 'd', 'e', 'f']))
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))
console.log(reverseString("!!!!Going ?//to scho???ol"))
console.log(reverseString("Stanley"))

