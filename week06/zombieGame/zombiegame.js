// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your prompt. 

// ===========================================================================================================

var inquirer = require("inquirer");

var rando = 0;

var randoHit = 0;

var heroHealth = 70;

var zombieHealth = 15;

function combat() {
    if (heroHealth > 0 && zombieHealth > 0) {

        rando = (Math.floor(Math.random() * 5) + 1);

        inquirer.prompt([{
            type: "list",
            message: "Pick a number to attack the zombie.",
            name: "attack",
            choices: ["1", "2", "3", "4", "5"],
        }]).then(function(user) {
            if (parseFloat(user.attack) === rando) {
                randoHit = (Math.floor(Math.random() * 5) + 1);
                console.log("You hit the zombie for " + randoHit + " damage!")
                zombieHealth -= randoHit;
                if (zombieHealth < 0) {
                    zombieHealth = 0;
                }
                console.log("Your Health: " + heroHealth);
                console.log("Zombie\'s Health: " + zombieHealth);
                combat();
            } else {
                randoHit = (Math.floor(Math.random() * 5) + 1);
                console.log("The zombie bit you and did " + randoHit + " damage!")
                heroHealth -= randoHit;
                if (heroHealth < 0) {
                    heroHealth = 0;
                }
                console.log("Your Health: " + heroHealth);
                console.log("Zombie\'s Health: " + zombieHealth);
                combat();
            }
        })
    } else {
        if (heroHealth <= 0) {
            console.log("The zombie is eating your brains!");
        } else if (zombieHealth <= 0) {
            console.log("The zombie is dead!  Again!");
        } else {
            console.log("How did we get here? We shouldn't be here.");
        }
    }

}

inquirer.prompt([{
    type: "input",
    message: "What is your name?",
    name: "name"
}]).then(function(user) {
    console.log("==============================================");
    console.log("Nice to meet you " + user.name + "... look out a zombie!!!");
    console.log("Your Health: " + heroHealth);
    console.log("Zombie\'s Health: " + zombieHealth);
    console.log("==============================================");
    combat();
})
