function calculateProbability (numDice, targetSum, numSimulation) {
    let count=0;

    for (let i =0; i < numSimulation; i++) {
        let sum = 0;
        for (let j=0;j < numDice; j++) {
            sum += Math.floor(Math.random()*6) + 1;
        }
        if (sum === targetSum) {
            count++;
        }
    }
    return (count / numSimulation*100).toFixed(2);
}
const numDice = parseInt(prompt("Enter the number of dice: "));
const targetSum = parseInt(prompt("Enter the target sum: "));
const numSimulations = 10000;
const probability = calculateProbability(numDice,targetSum,numSimulations);
const resultMessage = `Probability to get sum ${targetSum} with ${numDice} dice is ${probability}%`

document.querySelector("#numberDice").innerHTML = resultMessage
