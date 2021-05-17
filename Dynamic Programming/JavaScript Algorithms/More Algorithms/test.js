import https from "https"

const getTodos = (URL) => {
    let todos = {}
    https.get(URL, res => {
        let data = ""

        res.on("data", (chunk) => {
            data += chunk
            process.stdout.write(data)
        })

        res.on("end", () => {
            todos = JSON.parse(data)
            //console.log(todos)
            
        })
    })
    .on("error", err =>{
        console.log("Error: ", err.message)
    })
    //console.log(todos)
    return todos
}

const URI = "https://jsonplaceholder.typicode.com/todos"
let ans = getTodos(URI)
console.log(ans)