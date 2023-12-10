'use strict';
const name = prompt("Type your name: ")
console.log(`Nice to meet you ${name}`)
document.querySelector('#target').innerHTML= "Hello, " + name + "!";
