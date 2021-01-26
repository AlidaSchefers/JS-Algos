//this challenge comes from https://www.codewars.com/kata/59f7597716049833200001eb
//solved!

function solve(x, y) {
    let mirrorNumTally = 0
    for(let i = Math.max(x,y); i >= Math.min(x,y); i--) {
        if(isMirrorNum(i)) {
            mirrorNumTally++
        }
    }
    return mirrorNumTally
   };

function isMirrorNum(i) {
    i = i.toString() //change to string so we can find length and use regExs.
    let numPairs = {'0' : '0', '1' : '1', '8' : '8', '6' : '9', '9' : '6'}
    if(!RegExp('[23457]').test(i)) { //checks if the number is FREE of 2, 3, 4, 5, or 7.
        const middleOrBeforeIndex = Math.floor(i.length/2)
        if(i.length % 2 !== 0) { // checks if the number of characters in the string is odd. if so, the middle num needs to be 0,1, or 8.
            if(!RegExp('[018]').test(i[middleOrBeforeIndex])) { //boolean: the middle integer is NOT 0 1 or 8 (bad), then...
                return false
            }
        }
        //now that odd-lengthed num's middle num checks out OR i is even-lengthed, do the following:
        for (let j = 0; j < middleOrBeforeIndex; j++) { //look at each num until right before the middle num or before more than half index spot.
            const currentNum = i[j]
            const compareNumIndex = (i.length-1-j)
            if(i[compareNumIndex] !== numPairs[currentNum]) {
                return false
            }
        }
    }else{
        return false
    }
    return true
}   

function giveMirroredNum(i) { //this returns the number if it is a mirror num
    i = i.toString() //change to string so we can find length and use regExs.
    let numPairs = {'0' : '0', '1' : '1', '8' : '8', '6' : '9', '9' : '6'}
    if(!RegExp('[23457]').test(i)) { //checks if the number is FREE of 2, 3, 4, 5, or 7.
        const middleOrBeforeIndex = Math.floor(i.length/2)
        if(i.length % 2 !== 0) { // checks if the number of characters in the string is odd. if so, the middle num needs to be 0,1, or 8.
            if(!RegExp('[018]').test(i[middleOrBeforeIndex])) { //boolean: the middle integer is NOT 0 1 or 8 (bad), then...
                return null
            }
        }
        //now that odd-lengthed num's middle num checks out OR i is even-lengthed, do the following:
        for (let j = 0; j < middleOrBeforeIndex; j++) { //look at each num until right before the middle num or before more than half index spot.
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
console.log(solve(181906181, 181906180)) //should give 1
// console.log(giveMirroredNum(181906181, 181906180)) //should give 
// console.log(giveMirroredNum(081906180, 81906179))
// console.log(giveMirroredNum(181906181))
