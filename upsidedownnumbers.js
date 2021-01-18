//this callenge comes from https://www.codewars.com/kata/59f7597716049833200001eb

function solve(x, y) {
    let upperNum = x > y ? x : y
    let lowerNum = x > y ? y : x
    let mirrorNums = []
    for(let i = upperNum; i >= lowerNum; i--) {
        if(giveNumIfMirror(i)) {
            mirrorNums.push(giveNumIfMirror(i))
        }
    }
    return mirrorNums
   };

function giveNumIfMirror(i) {
    if(!RegExp('[23457]').test(i)) { //checks if there is not any instance of 2, 3, 4, 5, or 7
        //for 0 1 8 need to have the same num same distance away from the middle.
                //for 6 and 9, instead of it being the same num, need to be the corresponding num same distance from middle
        if(i.length % 2 !== 0) { // checks if the number of characters in the string is odd
            const middleIndex = i[Math.floor(i.length/2)]
            RegExp('[018]').test(i[middleIndex]) //boolean: true if the middle integer is 0 1 or 8
                //middle integer needs to be either 0 1 or 8
            console.log(`${i} has middle integer 0 1 or 8`)
            return i
        }
        else{ //is the number of chara in the string is even
            return null
        }
    }else{
        console.log(`${i}: this contains an instance of 2,3,4,5, or 7`)
        return null
    }
}
//nums that are the same upside-down: 018
//Careful with 9 and 6. they need to go together with same instances for each. (e.g. 9966 ok and 96 ok, but 996 is not.)
//9086 is not ok.
//think of things as mirrors with 0, 1, 8
//8808 is does not work upside down. 

//first get rid of numbers that have nums that have 2 3 4 5 7
// const str = 'table football'
// const str02 = '000038'
// const regex01 = RegExp('foo*')
// const regex02 = RegExp('[23457]')
// const globalRegex = RegExp('foo*', 'g')
// console.log(regex01.test(str))
// console.log(regex02.test(str02))
console.log(RegExp('[23457]').test('000038'))
console.log(!RegExp('[23457]').test(108))

console.log(solve(104, 100))
// console.log(Math.floor(5.5))