//Codility stoneWall problem
//Cover "Manhattan skyline" using the minimum number of rectangles.

//Golden Solution 100%
const stoneWall = (H) => {
    const N = H.length
    let stack = []

    let right = 0
    let stones = 0
    for (let i = 0; i < N; i += 1){
        while(right > 0 && H[i] < stack[right - 1]){
            right -= 1 
        }
        if (right > 0 && H[i] === stack[right - 1]) continue
        else {
            stones += 1
            stack[right] = H[i]
            right += 1
        }
        console.log("i: ", i, "stones :", stones, stack, "right: ", right)
    }
    
    return stones
}
console.log(stoneWall([8, 8, 5, 7, 9, 8, 7, 4, 8]))

//Using the Stack data structure and LIFO Principle and push & pop methods

//50% Solution
const stoneWall2 = (H) => {
    const N = H.length
    let stack = new Set()

    let k = 0
    let right = 0
    let count = 0
    while(right < N){
        if (stack.size != 0 && H[right] < k){
            count += 1
            stack.delete(k)
            stack.add(H[right])                    
        }
        if (stack.size === 0 || H[right] > k){
            stack.add(H[right])
        }
        k = H[right]
        //console.log(count, stack, k)
        right += 1
    }
    count += stack.size
    return count
}
//console.log(stoneWall2([8, 8, 5, 7, 9, 8, 7, 4, 8]))