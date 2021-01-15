//Intermediate Algorithm Scripting: Smallest Common Multiple
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple
//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.


//The current question: what is the error that turns up when I run the bigger computations? Here is the complete message that appears:
    // internal/util/inspect.js:2065
    //   return str.replace(ansi, '');
    //              ^

    // RangeError: Maximum call stack size exceeded
    //     at String.replace (<anonymous>)
    //     at stripVTControlCharacters (internal/util/inspect.js:2065:14)
    //     at prepareStringForGetStringWidth (internal/util/inspect.js:1959:11)
    //     at getStringWidth (internal/util/inspect.js:1973:11)
    //     at groupArrayElements (internal/util/inspect.js:1220:17)
    //     at reduceToSingleString (internal/util/inspect.js:1728:18)
    //     at formatRaw (internal/util/inspect.js:997:15)
    //     at formatValue (internal/util/inspect.js:753:10)
    //     at inspect (internal/util/inspect.js:293:10)
    //     at formatWithOptions (internal/util/inspect.js:1949:40)

//with larger calculations, this function returns an error, written above
function smallestCommons(arr, multiplePara = 1) {
    let orderedArr = arr[1] < arr[0] ? [arr[1], arr[0]] : [arr[0], arr[1]] //turns [4,1] into [1,4]
    let allNumArr = []
    for (let i = orderedArr[0]; i <= orderedArr[1]; i++)
        allNumArr.push(i)
    let numToTest = orderedArr[1]*multiplePara
    console.log(`numToTest: ${numToTest}`)
    const isDivisible = (currentValue) => numToTest % currentValue === 0;
    console.log(`is numToTest divisible by all the num? ${allNumArr.every(isDivisible)}`)
    if (!allNumArr.every(isDivisible))
        return smallestCommons(arr, multiplePara+1)
    else
        return numToTest
}

console.log(smallestCommons2([1,5])) //should return 60 //works fine
console.log(smallestCommons([1, 13])); //should return 360360 //results in the RangeError


//thinking that the rangeError came from too much calculation demand, I reduced the calculation needed in this function compared to the previous one.
//in the previous one, all the numbers in the long array were tested in the divisibility test (isDivisible), but this one tests the largest numbers first and stops testing as soon as one fails the divisibility test (line 40)
function smallestCommons2(arr, multiplePara = 1) {
    let orderedArr = arr[1] < arr[0] ? [arr[1], arr[0]] : [arr[0], arr[1]] //e.g. turns [4,1] into [1,4]
    let allNumArr = []
    for (let i = orderedArr[1]; i >= orderedArr[0]; i--) //e.g. creates [4,3,2,1] from [1,4]
        allNumArr.push(i)
    console.log("allNumArr:")
    console.log(allNumArr)
    let numToTest = orderedArr[1]*multiplePara
    console.log(`numToTest: ${numToTest}`)
    for (let i = 0; i < allNumArr.length; i++) {
        console.log(`current num to divide by numToTest: ${allNumArr[i]}`)
        if (numToTest % allNumArr[i] !== 0) {
            return smallestCommons2(arr, multiplePara+1)
        }
    }
    return numToTest
}
// console.log(smallestCommons2([1,5])) //should return 60 //works fine
// console.log(smallestCommons2([1, 13])); //should return 360360 //results in the RangeError

//this function is for testing the optional parameter and .every()
function testPara(arr, multiplePara = 1) {
    let bigNum = arr[arr.length-1]
    let numToTest = arr[arr.length-1]*multiplePara
    console.log(`numToTest: ${numToTest}`)
    const isDivisible = (currentValue) => numToTest % currentValue === 0;
    if (!arr.every(isDivisible)) {
        return testPara(arr, multiplePara+1)
    }
    else {
        return numToTest
    }
}
// console.log(`testPara for [2,3,4,5,6,7,8,9,10]: ${testPara([2,3,4,5,6,7,8,9,10])}`)

