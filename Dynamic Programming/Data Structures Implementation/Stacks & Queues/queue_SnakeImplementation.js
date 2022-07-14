//Snake Game Implementation Using a Queue Data Structure

//  -queue for snake body (array)
//  -draw() - draw the grid with the snakes body
//  -move() - take in the a direction, manipulate the queue

class Snake {
    constructor(){
        this.snakeBody= [
            [3, 1],
            [3, 2],
            [3, 3],
            [3, 4]
        ]
    }

    move(direction){
        const positions = {
            "up":       [-1, 0],
            "down":     [1, 0],
            "left":     [0, -1],
            "right":    [0, 1]
        }
        const currHead = this.snakeBody[this.snakeBody.length - 1]
        const [currRow, currCol] = currHead
        const [changeRow, changeCol] = positions[direction]
        const newHead = [currRow + changeRow, currCol + changeCol]
        this.snakeBody.push(newHead)
        this.snakeBody.shift()
    }

    draw(){
        const grid = []
        for (let i = 0; i < 10; i += 1){
            const row = []
            for (let j = 0; j < 10; j += 1){
                row.push(" ")
            }
            grid.push(row)
        }
        this.snakeBody.forEach(pos => {
            const [row, col] = pos 
            grid[row][col] = "O"
        })
        console.clear()
        grid.forEach(row => console.log(row.join(" | ")))

    }
    play(){
        this.draw()
        const stdin = process.stdin 
        stdin.setRawMode(true)
        stdin.resume()
        stdin.setEncoding("utf8")
        stdin.on("data", (keyPress) => {
            if (keyPress === "w") this.move("up")
            if (keyPress === "a") this.move("left")
            if (keyPress === "s") this.move("down")
            if (keyPress === "d") this.move("right")
            if (keyPress === "\u0003") process.exit()

            this.draw()
        })
        
    }
    
}

const snake = new Snake()
console.log(" ")
snake.play()



