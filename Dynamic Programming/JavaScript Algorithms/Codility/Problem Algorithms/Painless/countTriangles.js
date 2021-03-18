//Count the number of triangles that can be built from a given 
//set of edges. A Codility Problem.

const countTriangles = (A) => {
    const N = A.length
    
    A.sort((a, b) => a - b)

    let tripletNr = 0

    for (let x = 0; x < N; x += 1){
        let z = x + 2
        for (let y = x + 1; y < N; y += 1){
            while (z < N && A[x] + A[y] > A[z]){
                z += 1
            tripletNr += z - y - 1  
            }
        }
    }
           
    return tripletNr
}


console.log(countTriangles([10, 2, 5, 1, 8, 12])) // [1, 2, 5, 8, 10, 12]
console.log(countTriangles([15, 10, 2, 5, 1, 17, 8, 12, 8000, 2500, 2544, 1000, 400, 170, 100, 50, 24])) // [1, 2, "5, 8, 10, 12, 15, 17, 24", 50, 100, 170, 400, 1000, 2500, 2544, 8000]//11