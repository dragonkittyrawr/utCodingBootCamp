// structions
var inquirer = require("inquirer");
// Over the course of this assignment you are going to put together a function which uses constructors and user input to create and manage a team of players.
var positions = ["starter", "sub"];
var count = 0;
var startercount = 0;
var subcount = 0;
var teamarray = [];
var starterarray = [];
var subarray = [];
var totalStarteroff = 0;
var totalStarterdef = 0;
var score = 0;
var awayscore = 0;

function Player(name, position, offense, defense) {

	// Start out by creating a constructor function called "Player" with the following properties and methods...
	this.name = name;
	this.position = position;
	this.offense = offense;
	this.defense = defense;
	this.goodGame = function() {
		var randomnum = Math.floor(Math.random() * 2)
		if (randomnum === 1) {
			this.offense++
		} else {
			this.defense++
		}
	}
	this.badGame = function() {
		var randomnum = Math.floor(Math.random() * 2)
		if (randomnum === 1) {
			this.offense--
		} else {
			this.defense--
		}
	}
	this.printStats = function() {
			console.log("Name: " + this.name);
			console.log("Position: " + this.position);
			console.log("Offense: " + this.offense);
			console.log("Defense: " + this.defense);
		}
		// Player name: Property which contains the player's name
		// Position: Property which holds the player's position
		// Offense: Property which is a value between 1 and 10 to show how good this player is on offense
		// Defense: Property which is a value between 1 and 10 to show how good this player is on defense
		// GoodGame: Method which increases either the player's offense or defense property based upon a coinflip.
		// BadGame: Method which decreases either the player's offense or defense property based upon a coinflip.
		// PrintStats: Method which prints all of the player's properties to the screen
		// Now create a program which allows you to create 8 unique players; 5 starters and 3 subs.
}
// Once all of the players have been created, print their stats.
function inq() {
	if (count < 8) {
		inquirer.prompt([{
			type: "input",
			message: "Enter player's name!",
			name: "name"
		}, {
			type: "list",
			message: "Whats the player's position?",
			choices: positions,
			name: "position"
		}]).then(function(user) {
			var offense = Math.floor(Math.random() * 10) + 1;
			var defense = Math.floor(Math.random() * 10) + 1;
			var player = new Player(user.name, user.position, offense, defense);
			player.printStats();
			teamarray.push(player);
			if (user.position === "starter") {
				startercount++
				starterarray.push(player);
				if (startercount === 5) {
					var index = positions.indexOf("starter")
					if (index > -1) {
						positions.splice(index, 1);
					}
				}
			} else if (user.position === "sub") {
				subcount++
				subarray.push(player);
				if (subcount === 3) {
					var index = positions.indexOf("sub")
					if (index > -1) {
						positions.splice(index, 1);
					}
				}
			}
			count++
			inq();
		})
	} else {
		console.log("=====================")
		for (var i = 0; i < 5; i++) {
			console.log("Starter: " + starterarray[i].name)
			totalStarteroff = +starterarray[i].offense
			totalStarterdef = +starterarray[i].defense
		}
		for (var i = 0; i < 3; i++) {
			console.log("Sub: " + subarray[i].name)
		}
		console.log("===========")
		inquirer.prompt([{
		type:"list",
		message:"Would you like to play a game?",
		choices: ["yes","no"],
		name: "playagainchoice"
	}]).then(function(user){
		if(user.playagainchoice==="yes"){
			playGame();
		}
		else{
			console.log("Thanks for playing goodbye!");
		}
	})
	}
}
inq();

function playGame() {
	for (var i = 0; i < 10; i++) {
		var awayoffense = Math.floor(Math.random() * 50) + 1;
		var awaydefence = Math.floor(Math.random() * 50) + 1;
		if (totalStarteroff > awaydefence) {
			score++
			console.log("Home scores!");
			console.log("Home Score: " + score);
		}
		if (awayoffense > totalStarterdef) {
			awayscore++
			console.log("Away scores!");
			console.log("Away Score: " + awayscore);
		}
	}
	console.log("===================")
	console.log("Total Scores!")
	console.log("Home: "+score);
	console.log("Away: "+awayscore);
	if(score>awayscore){
		for (var i = 0; i < teamarray.length; i++) {
			teamarray[i].goodGame();
		}
	}
	else{
		for (var i = 0; i < teamarray.length; i++) {
			teamarray[i].badGame();
		}
	}
	inquirer.prompt([{
		type:"list",
		message:"Would you like to play again",
		choices: ["yes","no"],
		name: "playagainchoice"
	}]).then(function(user){
		if(user.playagainchoice==="yes"){
			score = 0;
			awayscore = 0;
			playGame();
		}
		else{
			console.log("Thanks for playing goodbye!");
		}
	})
}
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