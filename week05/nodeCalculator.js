// process.argv will print out any command line arguments.
var operator = process.argv[2];
var a = parseFloat(process.argv[3]);
var b = parseFloat(process.argv[4]);

if (operator === "add") {
    console.log(a + b);
} else if (operator === "subtract") {
    console.log(a - b);
} else if (operator === "multiply") {
    console.log(a * b);
} else if (operator === "divide") {
    console.log(a / b);
} else if (operator === "remainder") {
    console.log(a % b);
} else if (operator === "exp") {
    console.log(a ** b);
    console.log(Math.pow(a, b));
} else if (operator === "algebra") {
    console.log("Nope sorry");
} else {
    console.log("What did you do?");
}
// console.log(process.argv);
