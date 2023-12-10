let numList = [];
const para = document.createElement("p");
while (true) {
    const number = parseInt(prompt("Enter the number: "));
    if (numList.includes(number)) {
        break;
    }
    numList.push(number);
}
numList.sort((a,b) => b-a)
para.textContent= numList.join(" ,")
document.body.appendChild(para)
