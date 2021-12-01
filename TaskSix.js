/**
 * Task Six: Write code to output prime numbers in the interval from 2 to n
 */

 function isPrime(n){
    
    for( var i = 2; i <= Math.floor(Math.sqrt(n)); i++){
        if(n % i === 0) return false;
    }

    return true;
}

function outputPrimesUpTo(num){
    for(let i = 2; i <= num; i++){
        if(isPrime(i)) console.log(i);
    }
}

// driver code
outputPrimesUpTo(10);