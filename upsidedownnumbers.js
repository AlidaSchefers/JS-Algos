//this challenge comes from https://www.codewars.com/kata/59f7597716049833200001eb
//solved!

function solve(x, y) {
    let upperNum = x > y ? x : y
    let lowerNum = x > y ? y : x
    let mirrorNums = []
    for(let i = upperNum; i >= lowerNum; i--) {
        // console.log(`is the number ${i} a mirror num? let's see! -------`)
        if(giveMirroredNum(i)) {
            mirrorNums.push(giveMirroredNum(i))
            // mirrorNums.push(null) //why does null get added to mirrorNums with this line, but null is not added when it comes from the below giveMirroredNum() function?
        }
    }
    return mirrorNums.length
   };


function giveMirroredNum(i) {
    i = i.toString() //change to string so we can find length and use regExs.
    let numPairs = {'0' : '0', '1' : '1', '8' : '8', '6' : '9', '9' : '6'}
    if(!RegExp('[23457]').test(i)) { //checks if the number is FREE of 2, 3, 4, 5, or 7.
        const middleOrBeforeIndex = Math.floor(i.length/2)
        if(i.length % 2 !== 0) { // checks if the number of characters in the string is odd. if so, the middle num needs to be 0,1, or 8.
            if(!RegExp('[018]').test(i[middleOrBeforeIndex])) { //boolean: the middle integer is NOT 0 1 or 8 (bad), then...
                return null
            }
        }
        //now that odd-lengthed num's middle num checks out OR i is even-lengthed
        for (let j = 0; j < middleOrBeforeIndex; j++) { //look at each num until before the middle num or before more than half index spot.
            const currentNum = i[j]
            const compareNumIndex = (i.length-1-j)
            if(i[compareNumIndex] !== numPairs[currentNum]) {
                return null
            }
        }
    }else{
        return null
    }
    return i
}

console.log(solve(1000, 10000)) //should give 20
// console.log(solve(181906181, 181906180)) //should give 1
// console.log(giveMirroredNum(181906181, 181906180))
// console.log(giveMirroredNum(081906180, 81906179))
// console.log(giveMirroredNum(181906181))
