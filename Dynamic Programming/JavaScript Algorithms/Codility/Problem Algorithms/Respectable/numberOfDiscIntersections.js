//Codility Number of Disc Intersections Problem

//Compute the number of intersections in a sequence of discs.

//Good Solution **100%**
const numberOfDiscIntersections = (A) => {
    const N = A.length 
    let disc_start = Array(N).fill(null)
    let disc_end = Array(N).fill(null)
    let discIntcount = Array(N).fill(null)

    for (let i = 0; i < N; i += 1){
        disc_start[i] = i - A[i]
        disc_end[i] =  i + A[i]
    }
    disc_start.sort((a, b) => a - b)
    disc_end.sort((a, b) => a - b)

    // console.log(disc_start)
    // console.log(disc_end)
    let results = j = 0
    for (let i = 0; i < N; i += 1){
        while (disc_start[j] <= disc_end[i]){
            results += j - i 
            j += 1   
        }
        discIntcount[i] = results
        if(results > 10000000) return -1
    }
    //console.log(discIntcount)
    return results
}

console.log(numberOfDiscIntersections([1, 5, 2, 1, 4, 0])) 