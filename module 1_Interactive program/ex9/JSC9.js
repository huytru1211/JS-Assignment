'use strict'
const number = parseInt(prompt("Enter your number: "))
let a=0;
for (let i=1; i<number; i++ ) {
    if (number%i ===0) {
        a++;
    }
}
if (a===1) {
    document.querySelector("#prime").innerHTML="This is a prime number"
}
else {
    document.querySelector("#prime").innerHTML="This is not a prime number"
}