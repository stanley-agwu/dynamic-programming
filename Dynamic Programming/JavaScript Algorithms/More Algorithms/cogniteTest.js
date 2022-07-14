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

const cogData = testData.map((data) => ({ time: data[0], value: data[1] }))

//2. Create a new array of objects from it of time values less 
// than a threshold = 27

const cogManipulated = (cogData, threshold) => cogData.filter((item) => item.value <= threshold);

//console.log(cogTest(testData))
//console.log(cogManipulate(testData, 20))
