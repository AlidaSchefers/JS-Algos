//this algorithm challenge comes from edabit.com 
//this specific challenge: https://edabit.com/challenge/MNKfYEKghbKjxYbzb

//going from beginning to send.
function likeOrDislike(arr) {
    if(arr.length === 0) {return "Nothing"}
    let finalDisplay = arr[0]
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] !== finalDisplay) {
            // console.log(`arr[i]: ${arr[i]}`)
            finalDisplay = arr[i]
        }
        else{finalDisplay = "Nothing"}
    }
    return finalDisplay
}

console.log(likeOrDislike(["Dislike"])) //➞ "Dislike"
console.log(likeOrDislike(["Like", "Like"])) //➞ "Nothing"
console.log(likeOrDislike(["Dislike", "Like"])) //➞ "Like"
console.log(likeOrDislike(["Like", "Dislike", "Dislike"])) //➞ "Nothing"
// If no button is currently active, return "Nothing".
// If the array is empty, return "Nothing".