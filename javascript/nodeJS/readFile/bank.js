// Instructions:
// Starting from scratch, build a Node application called bank.js which allows takes in user inputs via the command line to register bank transactions.
// The transactions possible are:
// total - this should tally up all of the money in the bank balance and display it for the user.
// deposit <number> - this should add a positive amount to the bank balance. (No need to display the total here)
// withdraw <number> - this should add a negative amount to the bank balance. (No need to display the total here)
// lotto - this should subtract an amount from the bank balance, but if a random number is hit it should add back a larger amount into the bank balance.
// For all deposits, withdrawals, or lotto purchases the transaction should be registered in the bank.txt file.
// HINT: Consider making a series of if-then or switch-case statements to identify the "type" of transaction and the "amount" involved (if relevant).
// Bonus: If you finish early, consider finding creative ways to expand the functionality. Perhaps add a login, perhaps always provide the total, perhaps add a warning if the user tries to withdraw more than they hold, etc.

var bankAction = process.argv[2];
var amount = parseFloat(process.argv[3]);

var bank = [];

var total = 0;

var fs = require("fs");

var what;

var winnings;

function lotto() {
    what = Math.floor(Math.random() * 100);
    console.log(what);
    return what;
}


fs.readFile("bank.txt", "utf8", function(error, data) {

    bank = data.split(",");

    for (var i = 0; i < bank.length; i++) {
        total += parseFloat(bank[i]);
    }

    if (bankAction === "total") {

        console.log("$" + total.toFixed(2));

    } else if (bankAction === "deposit") {

        fs.appendFile("bank.txt", ", " + amount, function(error) {})

        total += amount;

        console.log("$" + total.toFixed(2));

    } else if (bankAction === "withdraw") {

        fs.appendFile("bank.txt", ", -" + amount, function(error) {})

        total -= amount;

        console.log("$" + total.toFixed(2));

    } else if (bankAction === "lotto") {

    	fs.appendFile("bank.txt", ", -.25", function(error) {})
    	total -= 0.25;

        lotto();

        if (what >= 99) {
            fs.appendFile("bank.txt", ", 20.00", function(error) {})

            total += 20.00;
            console.log("You won $20.00!");
            console.log("$" + total.toFixed(2));

        } else {
            
            console.log("You lost!");
            console.log("$" + total.toFixed(2));
        }


    }
})
