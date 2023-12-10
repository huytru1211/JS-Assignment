// const answer = confirm("Should I calculate the square root? ")
// if (answer === true) {
//     var number = parseFloat(prompt("Enter a number"));
//     if (number <=0 ) {
//         document.querySelector("#square").innerHTML = number +" is an invalid number"
//     }
//     else if (number >0) {
//         document.querySelector("#square").innerHTML = number +" is a valid number"
//         alreadySquare=Math.sqrt(number)
//         document.querySelector("#square").innerHTML = "Square number: " + alreadySquare
//     }
// }
//
// else {
//     document.querySelector("#square").innerHTML = "See you again"
//
// }
const answer = confirm("Should I calculate the square root")
if (answer === true) {
    let number = parseFloat(prompt("Enter the number: "))
    if (number < 0) {
        document.querySelector("#square").innerHTML = "The square root of a negative number is not defined";
    }
    else if (number >=0) {
        squareNumber = Math.sqrt(number);
        document.querySelector("#square").innerHTML = "The result: " + squareNumber;

        }
    }

else {
    document.querySelector("#square").innerHTML = "The square root is not calculated"
}