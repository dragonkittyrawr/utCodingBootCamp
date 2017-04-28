var inquirer = require("inquirer");


function Character(name, profession, gender, age, strength, hitPoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitPoints = hitPoints;
    this.printStats = function() {
        console.log("Chracter Info:\nName: " + this.name + "\nProfession: " + this.profession + "\nGender: " + this.gender + "\nAge: " + age + "\nStrength: " + strength + "\nHit Points: " + hitPoints);
    };
};

function IsAlive(hitPoints) {
  if (this.hitPoints > 0) {
    console.log("This character is alive.")
  }
}

function characterCreation() {

inquirer.prompt([{
    {
    type: "list",
    message: "What kind of Digital Pal do you want?",
    name: "petIs",
    choices: ["dog", "cat"]

}, {
    type: "input",
    message: "How old are they?",
    name: "age"
}]).then(function(user) {
    age = parseFloat(user.age);
    strength = age * 2;
    hitPoints = age * 5;
    var fuckingWork = new Character(user.name, user.profession, user.gender, age, strength, hitPoints);
    fuckingWork.printStats();
    IsAlive(user.hitPoints);
})

}
