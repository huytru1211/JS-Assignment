function randomNumberForRollDice() {
    return Math.floor(Math.random()* 6) + 1;
}

const ul_list = document.createElement("ul");


while (true) {
    randomNumberForRollDice()
    result = randomNumberForRollDice()
    const li_list = document.createElement("li");
    li_list.textContent = `Dice roll: ${result}`
    ul_list.appendChild(li_list)
    if (result === 6){
        break
    }
}
document.body.appendChild(ul_list);