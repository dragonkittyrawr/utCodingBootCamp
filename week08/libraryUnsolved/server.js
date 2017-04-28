// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************
// Instructions
// Create a 'sequelize_library' DB.
// Modify 'connection.js' to include your MySQL user/database information.
// In the 'models' folder, modify the book.js file to create a book model. Further details can be found inside this file.
// Your book model must include a title, author, genre, page numbers.
// Modify 'api-routes.js' using sequelize query methods to create the required routes.
// Modify 'html-routes.js' to deliver the required html files.
// *********************************************************************************


// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("app/public"));


// Routes
// =============================================================
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
