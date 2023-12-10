const number = parseInt(prompt("How many dices do you want to roll: "))
function mathRandom(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;

}
let i=0;
let total=0;
while (i<number)  {
    i=i+1;
    let mathValue = mathRandom(1,6);
    total= total + mathValue;
    document.querySelector("#dice").innerHTML = "Time: "+ i + "<br>" + "Result: " + total;
}
