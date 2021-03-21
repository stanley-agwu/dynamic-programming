//Codility Fish Problem
//N voracious fish are moving along a river. Calculate how many fish are alive.


//Good Solution **100%**
//Principle of Logical operations at the top level*** 
//to simplify and make solution faster. Use of if/else at the top level
const fish = (A, B) =>{
    const N = A.length 

    if (N === 1) return 1

    let stack = []
    let deadFish = 0

    for (let i = 0; i < N; i += 1){
        if (B[i] === 1) {
            stack.push(A[i])
        } else if (B[i] === 0 && stack.length > 0) {
                if (stack[stack.length - 1] >= A[i]) {
                    deadFish += 1
                } else {
                    while (stack.length > 0 && stack[stack.length - 1] < A[i]){
                        deadFish += 1
                        stack.pop()
                        //console.log(`i : ${i}, dead: ${dead}, stack: ${stack}`)
                    } 
                    if (stack[stack.length - 1] >= A[i]) {
                        deadFish += 1
                    }
                }
        }
        //console.log(`i : ${i}, dead: ${dead}, stack: ${stack}`) 
    } 
    return N - deadFish
}
console.log(fish([4, 3, 2, 1, 5], 
                 [0, 1, 0, 0, 0])) //2  
console.log(fish([4, 3], 
                 [1, 0])) //1           
console.log(fish([4, 3, 0, 1, 5], 
                 [0, 0, 1, 0, 0])) //4
console.log(fish([4, 3, 2, 1, 5, 6, 3, 5, 9, 2], 
                 [0, 1, 0, 0, 0, 1, 1, 0, 0, 1])) //4
console.log(fish([4, 3, 2, 1, 5, 6, 3, 5, 9, 2], 
                 [0, 0, 0, 0, 0, 1, 0, 0, 0, 0])) //7
console.log(fish([4, 3, 2, 1, 5, 6, 3, 5, 9, 2], 
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])) //10
