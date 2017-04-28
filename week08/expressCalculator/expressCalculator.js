//Instructions
// You will create an Express calculator application with one get route that is able to take in three parameters: an operation and two numbers.
// There are four operation values which a user may use: addition, subtraction, multiplication, and division.
// When the route is hit, your browser should display the result of the math operation and the two numbers on the screen.
// For example, when the user goes to the url http://localhost:3000/addition/10/1, the page should display 11.


/////////////////////////////////////////////////////////////////////////////////

var result;

var express = require("express");
var bodyParser = require("body-parser");

var PORT = 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory (cwd is current working directory)
app.use(express.static(process.cwd() + "/"));

// BodyParser makes it possible for our server to interpret data sent to it (to use req.body).
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ================================================================================
// ROUTES
// ================================================================================

app.get("/:operator/:variable1/:variable2", function(req, res) {
    var doMath = req.params.operator;

    var var1 = parseFloat(req.params.variable1);

    var var2 = parseFloat(req.params.variable2);

    if (doMath) {
        console.log(doMath);
        console.log(var1);
        console.log(var2);
    }

if (doMath !== "addition" && doMath !== "subtraction" && doMath !== "multiplication" && doMath !== "division") {
	result = "Not a supported operation.";
} else if (doMath === "addition") {
	result = var1 + var2;
} else if (doMath === "subtraction") {
	result = var1 - var2;
} else if (doMath === "multiplication") {
	result = var1 * var2;
} else if (doMath === "division") {
	result = var1 / var2;
}

res.send(result.toString());

});



app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
