//Counting Minutes CoderByte Problem

//Write a function countingMinutes(str) that takes a string "str" parameter 
//which will be two times sepeated by a hyphen and return the total number of
// minutes between the two times.The time will be in a 12 hour clock format. 
//Given str is 9:00am-10:00am the output should be 60. If str is 
//1:00p.m.-11:00a.m. the output should be 1320.

const countingMinutes = (str) =>{
    let time = str.replace(/[a-z]/g, "")
    time = time.split("-")
    let format = str.replace(/[:0-9]/g, "")
    format = format.split("-")
    let time1 = time[0].split(":")
    let time2 = time[1].split(":")
    time1 = [...time1, format[0]]
    time2 = [...time2, format[1]]

    console.log(time)
    console.log(format)
    console.log(time1)
    console.log(time2)

    //Puttting times in 24hr format
    if (time1[2] === "pm" && parseInt(time1[0]) < 12){
        time1[0] = parseInt(time1[0]) + 12
        time1[1] = parseInt(time1[1])
    } else if (time1[2] === "am" && parseInt(time1[0]) === 12){
        time1[0] = parseInt(time1[0]) - 12
        time1[1] = parseInt(time1[1])
    } else {
        time1[0] = parseInt(time1[0]) 
        time1[1] = parseInt(time1[1])
    }
    if (time2[2] === "pm" && parseInt(time2[0]) < 12){
        time2[0] = parseInt(time2[0]) + 12
        time2[1] = parseInt(time2[1])
    } else if (time2[2] === "am" && parseInt(time2[0]) === 12){
        time2[0] = parseInt(time2[0]) - 12
        time2[1] = parseInt(time2[1])
    } else {
        time2[0] = parseInt(time2[0])
        time2[1] = parseInt(time2[1])
    }
    console.log(time1)
    console.log(time2)

    let day = 0
    if (time1[0] > time2[0] || time1[0] === time2[0] && time1[1] > time2[1]) day = 1
    const startTime = new Date(0, 0, 0, time1[0], time1[1], 0)
    const endTime = new Date(0, 0, day, time2[0], time2[1], 0)
    const elapseTime = Math.floor((endTime - startTime)/60000)

    

    return elapseTime
}
//module.exports = countingMinutes

console.log(countingMinutes("1:00pm-11:00am")) // 1320
// console.log(countingMinutes("12:30pm-12:00am"))// 690
// console.log(countingMinutes("1:23am-1:08am"))// 1425
// console.log(countingMinutes("9:00am-10:00am"))// 60
// console.log(countingMinutes("1:00pm-11:00am"))// 1320
// console.log(countingMinutes("12:30pm-12:00am"))// 690
// console.log(countingMinutes("1:23am-1:08am"))// 1425
