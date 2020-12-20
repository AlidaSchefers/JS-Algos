//FreeCodeCamp: Intermediate Algorithm Scripting: Binary Agents 
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents

//ERROR: this function works fine in VSCode, but when run through FreeCodeCamp's browser code editor, it returns "ReferenceError: element is not defined". 
//is the "for (element of array)" not allowed in FCC's code editor?

//Concepts used in this solution: recursion, base number systems (binary, decimal), ASCII

function binaryAgent(str) {

    let binaryArr = str.split(" ")
    const convertOneBinary = function(oneBinaryStr) {
        if (oneBinaryStr.length === 0) {
            return 0
        }
        else {
            // console.log(`getting each binary: ${oneBinaryStr}`)
            return oneBinaryStr[0]*(Math.pow(2, (oneBinaryStr.length-1))) + convertOneBinary(oneBinaryStr.slice(1)) //Math.pow creates exponents
        }
    }
    let decValArr = []
    for (element of binaryArr) { //create array decValArr that is the decimal version of binaryArr
        let decimalVer = 0
        // console.log(`element 1st instance: ${element}`)
        decValArr.push(convertOneBinary(element))
        // element = convertOneBinary(element)
        // console.log(`each decimal value: ${convertOneBinary(element)}`)
    }
    let letterStr = ''
    const decToLetterStr = function(decArr) {
        if (decArr.length === 0) {
            return ''
        }
        else {
            // console.log(`dec to become letter: ${decArr[0]}`)
            // console.log(`intermidiate letter: ${String.fromCharCode(decArr[0])}`)
            letterStr += String.fromCharCode(decArr[0]) + decToLetterStr(decArr.slice(1))
            return letterStr
        }
    }
    return decToLetterStr(decValArr);
}

//tests:

// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") 
//returns "Aren't bonfires fun!?" 

// binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")
//returns "I love FreeCodeCamp!"
