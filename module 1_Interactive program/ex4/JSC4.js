// 'use strict';
// const name= prompt("Your name: ")
// function randomNumber(min, max) {
//   return Math.floor(Math.random()*(max-min+1))+min;
// }
// var randomValue = randomNumber(1,4);
// console.log(randomValue);
//
// if (randomValue === 1) {
//   document.querySelector("#HP").innerHTML="Welcome to Gryffindor " + name;
// }
// else if (randomValue === 2) {
//   document.querySelector("#HP").innerHTML="Welcome to Slytherin " + name;
// }
// else if (randomValue === 3) {
//   document.querySelector("#HP").innerHTML="Welcome to Hufflepuff " + name;
//
// }
// else if (randomValue === 4) {
//   document.querySelector("#HP").innerHTML="Welcome to Ravenclaw " + name
// }
'use strict'
const name= prompt("What is your name?: ")
function randomNumber(min, max) {
    return Math.floor(Math.random()*(max-min + 1)) + min;
}
let randomValue = randomNumber(1,4);
console.log(randomValue);

if (randomValue === 1) {
  document.querySelector("#HP").innerHTML = name + ",you are Gryffindor"
}

else if (randomValue === 2) {
  document.querySelector("#HP").innerHTML = name + ",you are Slytherin"

}

else if (randomValue === 3) {
  document.querySelector("#HP").innerHTML = name + ",you are Hufflepuff"
}

else if (randomValue === 4) {
  document.querySelector("#HP").innerHTML = name + ",you are Ravenclaw"
}



