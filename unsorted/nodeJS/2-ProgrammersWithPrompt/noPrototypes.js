// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function used to create programmers objects
function Programmer(name, position, age, language) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;
    // creates the printInfo method and applies it to all programmer objects
    this.printInfo = function() {
        console.log("Name: " + this.name + "\nPosition: " + this.position +
            "\nAge: " + this.age + "\nLanguages: " + this.language);
    };
};

// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement

function createRoster() {

    inquirer.prompt([{
        type: "confirm",
        name: "rosterCreate",
        message: "Create new employee?"
    }]).then(function(user) {
        if (user.rosterCreate === true) {
            createEmployee();
        }
    })

};

function createEmployee() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is your name?"
    }, {
        type: "input",
        name: "position",
        message: "What is your current position?"
    }, {
        type: "input",
        name: "age",
        message: "How old are you?"
    }, {
        type: "input",
        name: "language",
        message: "What is your favorite programming language?"
    }]).then(function(answers) {
        // initializes the variable newGuy to be a programmer object which will take
        // in all of the user's answers to the questions above
        var newGuy = new Programmer(answers.name, answers.position, answers.age, answers.language);
        // printInfo method is run to show that the newguy object was successfully created and filled
        newGuy.printInfo();

        createRoster();
    });
};

createRoster();
