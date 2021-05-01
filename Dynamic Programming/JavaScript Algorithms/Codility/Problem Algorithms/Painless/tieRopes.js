//Tie adjacent ropes to achieve the maximum number of ropes of length >= K. 

//Using the Caterpillar Method => O(n)
const tieRopes = (K, A) => {
    const N = A.length

    let front = 0;
    let total = 0;
    let count = 0;

    for (let item of A){
        while (front < N && total + A[front] < K){
            total += A[front]
            front += 1
        }
        if (total >= K || total + A[front] >= K) {
            count += 1
            
        }
        total = 0
        front += 1
    }
    return count

}

console.log(tieRopes(4, [1, 2, 3, 4, 1, 1, 3]))
console.log(tieRopes(1, [3]))
console.log(tieRopes(15, [1, 2, 3, 4, 1, 1, 3]))