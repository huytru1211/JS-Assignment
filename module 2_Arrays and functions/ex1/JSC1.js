const numbers = [];

for (let i = 1; i<=5; i++) {
    const number = parseInt(prompt(`Enter number ${i}: `))
    numbers.push(number)
}
for (let i= numbers.length ; i>=0; i-- ){
    console.log(numbers[i]);

}