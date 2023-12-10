'use strict'
let listNum = [];
const para= document.createElement("p");
while (true) {
    const number = parseInt(prompt("enter the number: "))
    if (number === 0) {
        break
    }
    listNum.push(number);
}
listNum.sort((a, b) => b - a);
para.textContent = listNum.join(",")
document.body.appendChild(para);