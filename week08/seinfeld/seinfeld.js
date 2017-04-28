//Create a Node Application with Express, MySQL, and Body Parser with three Express routes.
// Create a /cast route that will display all the actors and their data ordered by their id's.
// Create a /coolness-chart route that will display all the actors and their data ordered by their coolness points.
// Create a /attitude-chart/:att route that will display all the actors for a specific type of attitude.

var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");

var result;

var PORT = 3000;

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "seinfeld_db"
});

connection.connect(function(error) {
    if (error) throw error;
});



var app = express();

app.use(express.static(process.cwd() + "/"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.get("/cast", function(req, res) {
    connection.query("SELECT * FROM actors ORDER BY id", function(error, result) {
        if (error) throw error;
        var html = "<h1>Cast</h1>";

        // Here we begin an unordered list.
        html += "<ul>";

        // We then use the retrieved records from the database to populate our HTML file.
        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p>Actor: " + result[i].name + "</p></li>";
        }

        // We close our unordered list.
        html += "</ul>";

        // Finally we send the user the HTML file we dynamically created.
        res.send(html);
    });

});

app.get("/coolness-chart", function(req, res) {
    res.send(result.toString());
});


app.get("/attitude-chart/:attitude?", function(req, res) {

    var attitudeReturn = req.params.attitude;

    res.send(result.toString());
});



app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
