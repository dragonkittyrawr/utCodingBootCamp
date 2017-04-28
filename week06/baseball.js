// Instructions

// Over the course of this assignment you are going to put together a function which uses constructors and user input to create and manage a team of players.

// Start out by creating a constructor function called "Player" with the following properties and methods...

// Player name: Property which contains the player's name
// Position: Property which holds the player's position
// Offense: Property which is a value between 1 and 10 to show how good this player is on offense
// Defense: Property which is a value between 1 and 10 to show how good this player is on defense
// GoodGame: Method which increases either the player's offense or defense property based upon a coinflip.
// BadGame: Method which decreases either the player's offense or defense property based upon a coinflip.
// PrintStats: Method which prints all of the player's properties to the screen



// Now create a program which allows you to create 8 unique players; 5 starters and 3 subs.

// Once all of the players have been created, print their stats.

// Once your code is functioning properly, move on to create a function called "playGame" which will be run once all of your players have been created and will do the following...

// Loops 10 times
	// Each time the function loops, two random numbers between 1 and 50 are rolled and compared against your starter's offensive and defensive stats
	// If the first number is lower than the sum of your team's offensive stat, add one point to your team's score.
	// If the second number is higher than the sum of your team's defensive stat, remove one point from your team's score.
	// After the score has been changed, you may choose to substitute any of your players within the starters array with any of those players within the subs array.

// If your score is positive after the game has finished, run goodGame() for all of those players currently within the starters array. If your score is negative after the game has finished, run badGame() for all of those players currently within your starters array. If the score is equal to zero, then do nothing.


// Prompts the player if they would like to play again: runs playGame from the start once more if they do and ends the program if they don't.

// HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.

// HINT: It has been a while since we have worked with random numbers explicitly. If you are having troubles, look up Math.random on Google and you should find some resources to help.

var inquirer = require("inquirer");

var coinFlip = Math.floor(Math.random());

// BUILD - A - PLAYER

function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function() {
        coinFlip = Math.floor(Math.random() * 2);
        if (coinFlip === 1) {
            this.offense++;
        } else {
            this.defense++;
        }
    };
    this.badGame = function() {
        coinFlip = Math.floor(Math.random() * 2);
        if (coinFlip === 1) {
            this.offense--;
        } else {
            this.defense--;
        }
    };
    this.PrintStats = function() {
        console.log("Name: " + this.name + "\nPosition: " + this.position + "\nOffense: " + this.offense + "\nDefense: " + this.defense);
    };
}

// VARIABLES

var count = 0;

var subCount = 0;

var startCount = 0;

var starters = [];

var subs = [];

var roster = [];

var homeOffense = 0;

var homeDefense = 0;

var awayOffense = 0;

var awayDefense = 0;

function playBall() {
	console.log("This is where game play would go if there was any.")

    // Loops 10 times
    // Each time the function loops, two random numbers between 1 and 50 are rolled and compared against your starter's offensive and defensive stats

    awayOffense = (Math.floor(Math.random() * 50) + 1);

    awayDefense = (Math.floor(Math.random() * 50) + 1);

    for (var i = 0; i < starters.length; i++) {
            homeOffense += starters[i].offense;
            homeDefense += starters[i].defense;
        }

console.log(homeOffense);
console.log(homeDefense);


    // If the first number is lower than the sum of your team's offensive stat, add one point to your team's score.
    // If the second number is higher than the sum of your team's defensive stat, remove one point from your team's score.
    // After the score has been changed, you may choose to substitute any of your players within the starters array with any of those players within the subs array.

// If your score is positive after the game has finished, run goodGame() for all of those players currently within the starters array. If your score is negative after the game has finished, run badGame() for all of those players currently within your starters array. If the score is equal to zero, then do nothing.



};

var createRoster = function() {

    if (roster.length < 8) {
        count++;
        inquirer.prompt([{
            type: "input",
            name: "name",
            message: "Player name:"
        }, {
            type: "list",
            name: "position",
            message: "Their Position:",
            choices: ["Pitcher", "Catcher", "1st Baseman", "2nd Baseman", "3rd Baseman", "Shortstop", "Left Fielder", "Center Fielder", "Right Fielder"],
        }, {
            type: "list",
            name: "offense",
            message: "What is their offensive stat?",
            choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
        }, {
            type: "list",
            name: "defense",
            message: "What is their defensive stat?",
            choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
        }]).then(function(answers) {
            if (starters.length < 5) {
                startCount++;
                console["newStartingPlayer" + startCount] = new Player(
                    answers.name,
                    answers.position,
                    answers.parseFloat(offense),
                    answers.parseFloat(defense));
                console.log("Starting Player " + count);
                (console["newStartingPlayer" + count]).PrintStats();
                starters.push(console["newStartingPlayer" + count]);
                roster.push(console["newStartingPlayer" + count]);
            } else {
                subCount++;
                console["newSubPlayer" + count] = new Player(
                    answers.name,
                    answers.position,
                    answers.offense,
                    answers.defense);
                console.log("Substitute Player " + subCount);
                (console["newSubPlayer" + count]).PrintStats();
                subs.push(console["newSubPlayer" + count]);
                roster.push(console["newSubPlayer" + count]);
            };

            createRoster();
        });
    } else {
        console.log("All players added.");
        console.log(JSON.stringify(roster));
        playBall();
    }
};

// Let's createRoster!
createRoster();
