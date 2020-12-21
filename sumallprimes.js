//Intermediate Algorithm Scripting: Sum All Primes
//Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
    let primesArr = []
    console.log(num)
    while (num > 0) {
        if (num % 2 === 0){
            break;
        }
        else if (num % 3 === 0){
            break;
        }
        else if (num % 4=== 0){
            break;
        }
        else if (num % 5 === 0){
            break;
        }
        else if (num % 6 === 0){
            break;
        }
        else if (num % 7 === 0){
            break;
        }
        else if (num % 8 === 0){
            break;
        }
        else if (num % 9 === 0){
            break;
        }
        else if (num % 10 === 0){
            break;
        }
        else if (num % 11 === 0){
            break;
        }
        else if (num % 12 === 0){
            break;
        }
        else {
            console.log(`num: ${num}`)
            primesArr.push(num);
            console.log("primesArr:")
            console.log(primesArr)
        }
        num -= 1
    console.log("primesArr:")
    console.log(primeArr)
    return primesArr
    // return primesArr.reduce((a,b) => a+b);
    }
  }

sumPrimes(10) //should return 17