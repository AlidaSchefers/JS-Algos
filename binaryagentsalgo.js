//FreeCodeCamp: Intermediate Algorithm Scripting: Binary Agents 
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents


//Why is my solution not working?

function binaryAgent(str) {

    let binaryArr = str.split(" ")
    var convertOneBinary = function(oneBinaryStr) {
        if (oneBinaryStr.length === 0) {
            return 0
        }
        else {
            // console.log(`getting each binary: ${oneBinaryStr}`)
            return oneBinaryStr[0]*(2^(oneBinaryStr.length-1)) + convertOneBinary(oneBinaryStr.slice(1))
        }
    }
    // console.log(`binaryArr: ${binaryArr}`)
    let decValArr = []
    for (element of binaryArr) { //create array decValArr that is the decimal version of binaryArr
        let decimalVer = 0
        // console.log(`element 1st instance: ${element}`)
        decValArr.push(convertOneBinary(element))
        // element = convertOneBinary(element)
        // console.log(`each decimal value: ${convertOneBinary(element)}`)
    }
    console.log(`decValArr: ${decValArr}`)
    let letterStr = ''
    var decToLetterStr = function(decArr) {
        if (decArr.length === 0) {
            return ''
        }
        else {
            console.log(`decArr: ${decArr}`)
            console.log(decArr)
            console.log(`decValArr inside function: ${decArr}`)
            console.log(`dec to become letter: ${decArr[0]}`)
            let intermediateLetter = String.fromCharCode(decArr[0])
            console.log(`intermidiate letter: ${intermediateLetter}`)
            letterStr += String.fromCharCode(decArr[0]) + decToLetterStr(decArr.slice(1))
            return letterStr
        }
    }
    // for (element of decValArr) {
    //     console.log(`element to be changed into letter: ${element}`)
    //     letterStr
    //     console.log(String.fromCharCode(element[0]))
    //     // letterArr.push(String.fromCharCode(element[0]))
    // }
    console.log(`final string: ${decToLetterStr(decValArr)}`)

    //String.fromCharCode(65, 66, 67); 

    // return letterArr;
  }
  
// console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")
  
//   let testStr = "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  
//   console.log(testStr.split(" ")[1].length)

//tests:

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") 
//should return "Aren't bonfires fun!?"

binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") 
//should return "I love FreeCodeCamp!"