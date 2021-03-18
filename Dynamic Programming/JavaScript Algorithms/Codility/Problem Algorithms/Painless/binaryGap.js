// Codility Binary Gap Problem

//Find longest sequence of zeros in binary representation of an integer

//Good Solution **100%**

const base2Conversion = (M) => {
    return (M >>> 0).toString(2)
}
const base10Conversion = (M) => {
    return parseInt(M, 2).toString(10)
}
const binaryGap = (N) => {
    let bin = base2Conversion(N)
    const M = bin.length 

    let count = results = 0

    for (let  i = 0; i < M; i += 1){   
        if (bin[i] === "1"){
            results = Math.max(results, count)
            count = 0
        } else count += 1
    }
    return results 
}
console.log(binaryGap(1041)) // 5
console.log(binaryGap(32)) // 0
console.log(binaryGap(9)) // 2
console.log(binaryGap(529)) // 4
console.log(binaryGap(20)) // 1