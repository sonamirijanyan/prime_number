const util = require("./myUtils.js");
const reader = require("readline-sync");
let a =  reader.questionInt("Please, insert your first number = ");
let b = reader.questionInt("Please, insert your second number = ");


if (a>0 && b>0){
    let primeNumbers=[];
    for(let i=a; i<=b; i++){
        if (util.isPrime(i)){
            primeNumbers.push(i);}
    }
    util.printArray(primeNumbers);
} else{
    console.log("input positive integers.");
}
