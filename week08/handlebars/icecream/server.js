// Instructions
// In this activity, you are going to be creating your own Ben and Jerry's App where users can see all of the different flavors Ben and Jerry's have to offer while also getting specific information on a flavor by searching for it within the URL.
// var icecreams = [
//   {name: 'vanilla', price: 10, awesomeness: 3},
//   {name: 'chocolate', price: 4, awesomeness: 8},
//   {name: 'banana', price: 1, awesomeness: 1},
//   {name: 'greentea', price: 5, awesomeness: 7},
//   {name: 'jawbreakers', price: 6, awesomeness: 2},
// ];
// Do not use MySQL for this assignment! Use the icecreams variable above as your data. Add the variable to your server.js file.
// Using handlebars and express, create a route called /icecream/:name. When the route is hit, it will display the name, price and awesomeness for that specific ice cream.
// Create an /icecreams route. It will loop over all the ice creams and display them all to the user.


// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data
var icecreams = [
    { name: 'vanilla', price: 10, awesomeness: 3 },
    { name: 'chocolate', price: 4, awesomeness: 8 },
    { name: 'banana', price: 1, awesomeness: 1 },
    { name: 'greentea', price: 5, awesomeness: 7 },
    { name: 'jawbreakers', price: 6, awesomeness: 2 },
];

// Routes
app.get("/icecream/:name", function(req, res) {
    for (var i = 0; i < icecreams.length; i++) {
        if (icecreams[i].name === req.params.name) {
            return res.render("icecream", icecreams[i]);
        }
    }
});

app.get("/icecreams", function(req, res) {
    res.render("all-icecreams", { display: icecreams });
});

// Initiate the listener.
app.listen(port);
