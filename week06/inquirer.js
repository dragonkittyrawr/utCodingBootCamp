// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user"s password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer.prompt([

  // Here we create a basic text prompt.
  {
    type: "input",
    message: "What is your name?",
    name: "name"
  },

  // Here we create a basic password-protected text prompt.
  {
    type: "password",
    message: "Set your password",
    name: "password"
  },

  // Here we give the user a list to choose from.
  {
    type: "list",
    message: "What is your quest?",
    choices: ["The Holy Grail", "The Arc of the Covenant", "A Good Night\'s Sleep"],
    name: "quest"
  },

  // Here we copied some code from the internet.
  {
  	type: "checkbox",
    message: "Select toppings",
    name: "toppings",
    choices: [
      new inquirer.Separator(" = The Meats = "),
      {
        name: "Pepperoni"
      },
      {
        name: "Ham"
      },
      {
        name: "Ground Meat"
      },
      {
        name: "Bacon"
      },
      new inquirer.Separator(" = The Cheeses = "),
      {
        name: "Mozzarella",
        checked: true
      },
      {
        name: "Cheddar"
      },
      {
        name: "Parmesan"
      },
      new inquirer.Separator(" = The usual ="),
      {
        name: "Mushroom"
      },
      {
        name: "Tomato"
      },
      new inquirer.Separator(" = The extras = "),
      {
        name: "Pineapple"
      },
      {
        name: "Olives",
        disabled: "out of stock"
      },
      {
        name: "Extra cheese"
      }
    ],
    validate: function (answer) {
      if (answer.length < 1) {
        return "You must choose at least one topping.";
      }
      return true;
    }
  },
  // Here we ask the user to confirm.
  {
    type: "confirm",
    message: "Are you sure?",
    name: "confirm",
    default: true

  }]).then(function(user) {


  // If we log that user as a JSON, we can see how it looks.
  console.log(JSON.stringify(user, null, 2));

  // If the user confirms, we displays the user"s name and pokemon from the answers.
  if (user.confirm) {

    console.log("==============================================");
    console.log("");
    console.log("Welcome " + user.name);
    console.log("Your quest for " + user.quest + " is noble!");
    console.log("");
    console.log("Your " + user.toppings + " pizza will be ready in 20 minutes.");
    console.log("");
    console.log("==============================================");

  // If the user does not confirm, then a message is provided and the program quits.
  }

  else {

    console.log("");
    console.log("");
    console.log("That\'s okay " + user.name + ", come again when you are more sure.");
    console.log("");
    console.log("");

  }

});
