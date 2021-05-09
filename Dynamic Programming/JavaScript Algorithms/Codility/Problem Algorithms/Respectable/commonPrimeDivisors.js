// Codility Common Prime Divisiors

//Brute Force Approach ***53%**
const commonPrimeDivisors = (A, B) => {
    const primeNum = (D) => {
        let result = 0
        for (let n of D){
            result = Math.max(result, n)
        }
        let prefPrime = Array(result + 1).fill("P")
        prefPrime[0] = prefPrime[1] = "F"
        let i = 2
        const M = result 
        while (i * i <= M){
            let k = 0
            if (prefPrime[i] === "P") {
                k = i * i
                while (k <= M){
                    if (prefPrime[k] === "P"){
                        prefPrime[k] = "N" 
                    }
                    k += i
                }
            }
            i += 1
        }
        const primes = []
        for (let i = 0; i < prefPrime.length; i += 1){
            if (prefPrime[i] === "P") primes.push(i)
        }
        return primes
    }
    
    const primeGen = (N) => {
        let pr = primeNum(B)
        let checkSet = new Set()
        let k = 0
        while (k < pr.length && N > 0){
            while (N % pr[k] === 0) {
                checkSet.add(pr[k])
                N /= pr[k]
            }
            k += 1
        }
        return Array.from(checkSet) 
    }
    let count = 0
    for (let j = 0; j < A.length; j += 1){
        console.log(primeGen(A[j]), primeGen(B[j]))
        if (primeGen(A[j]).length === primeGen(B[j]).length && 
            primeGen(A[j]).every((val, index) => val === primeGen(B[j])[index])) {
            count += 1
        }
      
    }
    return count

}

//Golden Method ***100%**
const commonPrimeDivisors2 = (A, B) => {

    const gcd = (e, f) => {
        if (f === 0) return e 
        return gcd(f, e % f)
    }

    const sameDivisors = (g, h) => {
        if (g === h === 0) return true
        let cDiv = gcd(g, h)
        let v = g * h

        while (v !== 1){
            let vDiv = gcd(cDiv, v) 
            if (vDiv === 1) return false 
            v /= vDiv 
        }
        return true
    }
    let count = 0
    for (let i = 0; i < A.length; i += 1){
        if (sameDivisors(A[i]) && sameDivisors(B[i])) count += 1
    }
    return count
  
}
// console.log(commonPrimeDivisors([15, 10, 3], [75, 30, 5]))// 1
// console.log(commonPrimeDivisors([2, 1, 2], [1, 2, 2]))// 1
console.log(commonPrimeDivisors2([15, 10, 3], [75, 30, 5]))// 1
console.log(commonPrimeDivisors2([2, 1, 2], [1, 2, 2]))// 1