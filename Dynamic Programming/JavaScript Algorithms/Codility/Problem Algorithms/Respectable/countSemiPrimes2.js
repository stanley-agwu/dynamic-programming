//Golden Method ***100%**

const genPrimes = (N) => {
    const numsArray = Array(N + 1).fill(0)
    const resultsArray = Array(N + 1).fill(0)
    numsArray[0] = numsArray[1] = -2
    let i = 2
    while (i * i <= N) {
        let k = 0
        if (numsArray[i] === 0){
            k = i * i 
            while (k <= N){
                if (numsArray[k] === 0){
                    numsArray[k] = -1
                    resultsArray[k] = -1
                }
                k += i
            }
        }
        i += 1
    }

    const arrPrimes = []
    const results = [arrPrimes, resultsArray]
    for(let i = 0; i <= numsArray.length; i += 1){
        if (numsArray[i] === 0){
            arrPrimes.push(i)
        }
    }
    return results 
}

const genResultsArray = (N) => {
    const [primes, numsArray] = genPrimes(N)
    const resultsArray = Array(N + 1).fill(0)
    

    const primesCheck = {}
    for (let i = 0; i <= N; i += 1){
        const numStr = i.toString()
        primesCheck[numStr] = 0
    }
    for (let i = 0; i < primes.length; i += 1){
        const numStr = (primes[i]).toString()
        primesCheck[numStr] = 1
    }

    for (let i = 0; i < numsArray.length; i += 1){
        if (numsArray[i] === -1) {
            let k = 0
            while(k < primes.length){
                if (i % primes[k] === 0){
                    primesCheck[(i/primes[k]).toString()] === 1 ? numsArray[i] = 1 : numsArray[i] = 0
                    break
                }
                k += 1
            }
        }

    }
    let count = 0
    for (let i = 0; i < numsArray.length; i += 1){
        if (numsArray[i] === 1){
            count += 1   
        }
        resultsArray[i] = count
    }
    return resultsArray
    
}

const countSemiPrimes = (N, P, Q) => {
    const finalResults = []

    const semiPrimesArray = genResultsArray(N)

    for (let i = 0; i < P.length; i += 1){
        finalResults.push(semiPrimesArray[Q[i]] - semiPrimesArray[P[i] - 1])
    }
    return finalResults
}

console.log(countSemiPrimes(26, [1, 4, 16], [26, 10, 20]))
console.log(countSemiPrimes(3, [1, 1], [1, 3]))
console.log(countSemiPrimes(3, [1, 1], [1, 1]))