/* Note Taker (18.2.6)
 * backend
 * ==================== */

// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var bodyParser = require("body-parser");
var logger = require("morgan");

var app = express();

// Set the app up with morgan, body-parser, and a static folder
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static("public"));

// Database configuration
var databaseUrl = "week18day2";
var collections = ["notes"];

// Hook mongojs config to db variable
var db = mongojs(databaseUrl, collections);

// Log any mongojs errors to console
db.on("error", function(error) {
  console.log("Database Error:", error);
});


// Routes
// ======

// Simple index route
app.get("/", function(req, res) {
  res.send(index.html);
});


// TODO: You will make six more routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


// 1. Save a note to the database's collection
// ===========================================

app.post("/submit", function(req, res) {
	console.log(req.body);
// 	db.notes.save({
// 		title: req.body.title,
// 		note: req.body.note
// 	}, function(error, data) {
// 		// Log any errors if the server encounters one
//     if (error) {
//       console.log(error);
//     }
//     // Otherwise, send the result of this query to the browser
//     else {
//       // res.json(data);
//       console.log(data);
//   };
// });
// 	console.log(data);
	// console.log(res);
	// res.send("sent to html");
	res.send(index.html);
});


// 2. Retrieve all notes from the database's collection
// ====================================================

// app.get("/all", function(req, res) {
// 	db.notes.find()
// 	res.json(res);
// })

app.get("/all", function(req, res) {
  // Query: In our database, go to the animals collection, then "find" everything
  db.notes.find({}, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      res.json(found);
    }
  });
});


// 3. Retrieve one note in the database's collection by it's ObjectId
// TIP: when searching by an id, the id needs to be passed in
// as (mongojs.ObjectId(IDYOUWANTTOFIND))
// ==================================================================

// app.get("/:id", function(req, res, data) {
// 	db.notes.find()
// })


// 4. Update one note in the database's collection by it's ObjectId
// (remember, mongojs.ObjectId(IDYOUWANTTOFIND)
// ================================================================




// 5. Delete one note from the database's collection by it's ObjectId
// (remember, mongojs.ObjectId(IDYOUWANTTOFIND)
// ==================================================================




// 6. Clear the entire note collection
// ===================================



// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
