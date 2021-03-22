// Codility Longest Password Problem

//Given a string containing words, find the longest word that satisfies 
//specific conditions.


//Golden Solution Using RegEX ***100%****
const longestPassword = (S) => {
    let strArr = S.split(" ")
    strArr = strArr.filter(word => !(/\W/gim.test(word)))//There is Difficulty combining \W & [_]
    strArr = strArr.filter(word => !(/[_]/gim.test(word))) 

    let regexStr = /[a-z]||\d||[a-z]*\d+/gim
    let regexStrW = /[a-z]/gi
    let regexStrN = /[0-9]/g

    let results = []
    let resultsW = []
    let resultsN = []
    let resultStr = -1


    for (let word of strArr){ 
        if (regexStr.test(word)) results.push(word)
    }
    for (let word of results){
        let res = word.replace(regexStrW, "").length
        if (res % 2 === 1) resultsW.push(word)  
    }
    for (let word of resultsW){
        let res = word.replace(regexStrN, "").length
        if (res % 2 === 0 || res === 0) resultsN.push(word) 
    }
    for (let word of resultsN){
        resultStr = Math.max(resultStr, word.length)
    }
    return resultStr
}
console.log(longestPassword("test 5 a0A pass007 ?xy1"))
console.log(longestPassword("zaq!2#edc"))
console.log(longestPassword('88_88 9999 999 00 0 aaaa1 ddd 56'))
console.log(longestPassword('W i k ? 5 + a'))
console.log(longestPassword('W#it5 ktu?gug333 W!yit5 ktu@gu333 W$iut5 ktu*gug333 5 + a'))
console.log(longestPassword('W3t i k ft?th4 ft?h77777 5 + a'))
