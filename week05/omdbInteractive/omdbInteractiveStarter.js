// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)

var request = require("request");

// Grab or assemble the movie name and store it in a variable called "movieName"


var movieName = process.argv[2];

var movieYear = process.argv[3];


// ...

console.log(movieName);

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";


// This line is just to help us debug against the actual URL.
console.log(queryUrl);


request(queryUrl, function(error, response, body) {

    // If the request was successful...
    if (!error && response.statusCode === 200) {

        // Then log the body from the site!
        console.log(body);

        console.log(JSON.parse(body).Year);

    }
});
