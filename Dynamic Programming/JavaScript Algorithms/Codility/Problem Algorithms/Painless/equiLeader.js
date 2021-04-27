//EquiLeader Codility Problem

//Find the index S such that the leaders of the sequences A[0], 
//A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N - 1] are the same.


//Good Solution ***100%****
const equiLeader = (A) => {
    const N = A.length 

    let index = value = candidate = count = leader = k = 0
    const PrefLeader = Array(N).fill(0)


    for (let i = 0; i < N; i += 1){
        if (index === 0){
            index = 1
            value = A[i]
        } else if (value != A[i]){
            index -= 1
        } else index+= 1
    }
    if (index > 0) candidate  = value

    for (let num of A){
        if (candidate === num) count += 1
    }
    if (count > Math.floor(N/2)) {
        leader = candidate
        for (let i = 0; i < N; i += 1){
            if (A[i] === leader) PrefLeader[i] = k + 1
            else PrefLeader[i] = k
            k = PrefLeader[i]
        }
    }
    //console.log(leader, PrefLeader)
    let m = n = result = 0
    for (let i = 0; i < N; i += 1){
        let q = N - 1
        m = PrefLeader[i]
        n = PrefLeader[q]
        if (m > Math.floor((i + 1)/2) && (n - m) > Math.floor((q - i)/2)){
            result += 1
        }
    }
    return result  
}

console.log(equiLeader([4, 3, 4, 4, 4, 2]))
console.log(equiLeader([4, 4, 4, 4, 4, 4, 4, 4, 4]))
console.log(equiLeader([4, 3, 5, 5, 6, 8, 5, 5, -1, 6, 5, 5, 8, 5, 5]))
console.log(equiLeader([1, 0, 3, 1, 1, 1, 5, 1, 2, 1, 1, 1]))