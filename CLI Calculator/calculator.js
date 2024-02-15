var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function main() {
    console.log("Simple CLI Calculator in TypeScript");
    rl.question("Enter the equation: ", function (equation) {
        var result = eval(equation);
        console.log("The result is: ".concat(result));
    });

}

main();
