//Codility Genomic Range Query Problem

//Find the minimal nucleotide from a range of sequence DNA.

//Golden Solution **100%**
const genomicRangeQuery = (S, P, Q) => {           
    const N = P.length 
    let results = []

    //const check = {A: 1, C: 2, G: 3, T: 4}
    for (let i = 0; i < N; i += 1){
        let impactFactor = S.substring(P[i], Q[i] + 1)
        console.log(impactFactor)
        
        if (impactFactor.indexOf("A") !== -1){
            results[i] = 1
            continue
        } else if (impactFactor.indexOf("C") !== -1){
            results[i] = 2
            continue
        } else if (impactFactor.indexOf("G") !== -1){
            results[i] = 3
            continue
        } else results[i] = 4
    }
    return results

}

console.log(genomicRangeQuery("CAGCCTA", [2, 5, 0], [4, 5, 6]))
console.log(genomicRangeQuery("ATCGAATTCCCAGGTTCGCCTA", 
       [2, 5, 0, 6, 10, 21, 11, 15, 14, 9], [21, 15, 10, 16, 20, 21, 19, 19, 14, 9]))
