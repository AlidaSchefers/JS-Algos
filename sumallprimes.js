//Intermediate Algorithm Scripting: Sum All Primes
//Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
    let allNumArr = []
    let allPrimeNum = []
    for (let i=2; i <= num; i++) {
        allNumArr.push(i)
    }
    for (let i=0; i < allNumArr.length; i++) {
        if (isPrime(allNumArr[i])) {
            allPrimeNum.push(allNumArr[i])
        }
    }
    return allPrimeNum.reduce((a,b) => a+b)
}

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    if (num !== 0 && num !== 1) 
        return true
}

console.log(sumPrimes(10)) //should return 17