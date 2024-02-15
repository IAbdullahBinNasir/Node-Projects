const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function main() {
    console.log("Simple CLI Calculator in TypeScript");
     rl.question("Enter the equation: ", function (equation) {

        const result = eval(equation)
        console.log(`The result is: ${result}`);
    });

}


main();
