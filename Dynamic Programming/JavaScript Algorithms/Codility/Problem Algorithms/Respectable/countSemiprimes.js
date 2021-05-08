//Golden Method ***100%**
const countSemiprimes = (N, P, Q) => {
    const M = P.length 
    const prefPrimes = Array(N + 1).fill("P")
    const prefSemiPrimes = Array(N + 1).fill(0)
    const semiPrimes = []
    prefPrimes[0] = prefPrimes[1] = "F"

    let i = 2
    while(i * i <= N){
        let k = 0
        if (prefPrimes[i] === "P"){
            k = i * i 
            while (k <= N){
                prefPrimes[k] = "N" 
                k += i
            }
        }
        i += 1
    }
    //console.log(primes)
    let k = 2
    while(k * k <= N){
        if (prefPrimes[k] === "P"){
            let l = k * k
            while(l <= N){
                if (l % k === 0 && prefPrimes[l/k] === "P"){
                    prefPrimes[l] = "S"
                }
                l += k
            }
        }
        k += 1
    }
    //console.log(prefPrimes)
    let countS = 0
    for (let i = 0; i < prefPrimes.length; i += 1){
        if (prefPrimes[i] === "S") {
            countS += 1
            prefSemiPrimes[i] = countS
        } else prefSemiPrimes[i] = countS
    }

    for (let i = 0; i < M; i += 1){
        let count = prefSemiPrimes[Q[i]] - prefSemiPrimes[P[i] - 1]
        semiPrimes.push(count)
    }

    return semiPrimes

}
console.log(countSemiprimes(26, [1, 4, 16], [26, 10, 20]))//[10, 4, 0]
