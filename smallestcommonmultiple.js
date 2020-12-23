//Intermediate Algorithm Scripting: Smallest Common Multiple
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple
//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

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

  
// console.log(smallestCommons([1, 13])); //should return 360360

function smallestCommons2(arr, multiplePara = 1) {
    let orderedArr = arr[1] < arr[0] ? [arr[1], arr[0]] : [arr[0], arr[1]] //turns [4,1] into [1,4]
    let allNumArr = []
    for (let i = orderedArr[1]; i >= orderedArr[0]; i--) //creates [4,3,2,1]
    // for (let i = orderedArr[0]; i <= orderedArr[1]; i++)
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
console.log(smallestCommons2([1, 13])); //should return 360360
// console.log(smallestCommons2([1,5])) //should return 60


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
// console.log(smallestCommons2([10,2]))

