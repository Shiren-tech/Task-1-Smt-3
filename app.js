const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", (answer) => {
    const num1 = Number(answer);

    rl.question("Enter second number: ", (answer) => {
        const num2 = Number(answer);

        rl.question("Enter operator (+, -, *, /): ", (operator) => {
            if (operator === "+") {
                console.log("Result:", num1 + num2);
            } else if (operator === "-") {
                console.log("Result:", num1 - num2);
            } else if (operator === "*") {
                console.log("Result:", num1 * num2);
            } else if (operator === "/") {
                console.log("Result:", num1 / num2);
            }

            rl.close();
        });
    });
});