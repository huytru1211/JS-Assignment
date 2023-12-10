const number = prompt("Enter the number: ");
const year=parseInt(number);
// console.log(typeof year);
if (year % 4 === 0 )  {
    // document.querySelector("#leap_year").innerHTML = year + " is a leap year"
    if (year % 400 === 0 && year % 100 ===0) {
        document.querySelector("#leap_year").innerHTML = year + " is a leap year" }
    else {
        document.querySelector("#leap_year").innerHTML = year + " is not a leap year"

    }
    
}
else if (typeof year !== typeof +1) {
    document.querySelector("#leap_year").innerHTML = "This is an invalid information"
}
