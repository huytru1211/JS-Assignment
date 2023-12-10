function checkLeapyear(year) {
    return (year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0));
}
function  printListLeapYear(startYear, endYear) {
    let leapYears = [];
    for ( let year = startYear; year <= endYear; year++){
        if (checkLeapyear(year)){
            leapYears.push(year)

        }
    }
    const unOderListForLeapYear = document.createElement("ul")
    leapYears.forEach(year => {
        const listForLeapYear = document.createElement("li")
        listForLeapYear.textContent = year;
        unOderListForLeapYear.appendChild(listForLeapYear);

    })
    document.body.appendChild(unOderListForLeapYear);
}
const startYear = parseInt(prompt("Enter the start year: "));
const endYear = parseInt(prompt("Enter the end year: "));
printListLeapYear(startYear,endYear)