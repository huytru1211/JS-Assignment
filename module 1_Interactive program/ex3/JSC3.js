'use strict';
const number1= prompt("Enter your first number: ");

const number2 = prompt("Enter your second number");

const number3 = prompt("Enter your third number: ");

const sum = parseFloat(number1) + parseFloat(number2) + parseFloat(number3);

const product = parseFloat(number1)*parseFloat(number2)*parseFloat(number3);

const average = (parseFloat(number1) + parseFloat(number2) + parseFloat(number3))/3;

document.querySelector("#result").innerHTML = "Sum: " + sum + "<br>" + "Product: " + product + "<br>" + "Average: " + average;

