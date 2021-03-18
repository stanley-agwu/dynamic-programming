//

const https = require('https');
 
function getMovieTitles(substr){
    const url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`
    https.get(url, res => {
        let movieData = ""

        //When chunks of data are coming
        res.on("data", chunk  =>{
            movieData += chunk
        })

        //When data stream ends
        res.on("end", () => {
            const movies = JSON.parse(movieData)
            console.log(movies)
        })
        res.on("error", (error) =>{
            console.log("Error: " + error.message)
        })
    })



}

getMovieTitles("spiderman")