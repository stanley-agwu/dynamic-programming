//1. Change the following Array into array of objects with of 
//time-value pairs.
const testData = [
    ["1", '21'],
    ["2", '31'],
    ["3", "11"],
    ["4", "26"],
    ["5", "24"],
    ["6", "28"],
    ["7", "22"],
    ["8", "32"],
    ["9", "14"],
    ["10", "17"],
    ["11", "19"],
    ["12", "30"],
    ["13", "21"],
    ["14", "20"],
    ["15", "16"],
    ["16", "17"],
    ["17", "11"],
    ["18", "14"],
    ["19", "32"],
    ["20", "17"]
]

const cogTest = (data) => {
    let myArr = []
    for (let item of data){
        let objData = {}
        let time = "time"
        let value =  "value"
        objData[time] = item[0]
        objData[value] = parseInt(item[1])
        myArr = [...myArr, objData]
    }
    return myArr
}

//2. Create a new array of objects from it of time values less 
// than a threshold = 27
const cogCheck = (data, threshold) => {
    const objArray = cogTest(data) 

    return objArray.every(({value}) => value <= threshold)
}
const cogManipulate = (data, threshold) => {
    const objArray = cogTest(data) 

    const mapArray = objArray.filter(item => {
        return item.value <= threshold
        }
    )
    return mapArray

}

//console.log(cogTest(testData))
console.log(cogCheck(testData, 32))
//console.log(cogManipulate(testData, 20))
