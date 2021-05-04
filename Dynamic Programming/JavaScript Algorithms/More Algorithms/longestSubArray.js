//Find the longest sub-array with sum S
//Using the Caterpillar Method (with pointers)

const longestSubArray = (A, S) => {
    const N = A.length 
    let result = value = sum = left = right = 0
    let pointers = []
    let pointA = pointB =  0

    while (left < N){
        while (right < N && sum <= S){
            pointA = left
            sum += A[right]

            if(sum === S) pointB = right
            
            right += 1
        }
        if (sum > S) sum -= A[left]

        value = pointB - pointA
        if (value > result) pointers = [pointA, pointB]
        result = Math.max(value, result)
        
        left += 1
    }
    return pointers

}

console.log(longestSubArray([ 0, 0, 0, 0, 7, 0, 0, 0, 8, 1, 2, 3, 4, 5, 0, 0, 0, 6, 7, 8, 9, 10], 15))