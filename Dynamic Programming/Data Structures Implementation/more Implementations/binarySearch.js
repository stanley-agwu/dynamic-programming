//Binary Search Implementation

//Iterative Approach
//[ O(log n) - Time Complexity & O(1) - Space Complexity ]
const binarySearchI = (array, target) => {
    let left = 0
    let right = array.length - 1

    while (left <= right){
        let mid = Math.floor((left + right)/2)
        
        if (array[mid] === target){
            return mid
        } else if (array[mid] < target){
            left = mid + 1
        } else {
            right = mid - 1
        }

    }
    return null
    

}
//Recursive Approach
//[ O(log n) - Time Complexity & O(log n) - Space Complexity ]
const binarySearchR = (array, target) => {
    return _binarySearchR(array, target, 0, array.length - 1)  
}

const _binarySearchR = (array, target, left, right) => {
    let mid = Math.floor((left + right)/2)
    if (left > right) return null
    
    if (array[mid] === target){
        return mid
    } else if (array[mid] < target){
        return _binarySearchR(array, target, mid + 1, right)
    } else {
        return _binarySearchR(array, target, left, mid - 1)
    }
}

const A = [1, 2, 4, 6, 12, 44, 5, 78, 90]
console.log(binarySearchI(A, 1))
console.log(binarySearchR(A, 1))
