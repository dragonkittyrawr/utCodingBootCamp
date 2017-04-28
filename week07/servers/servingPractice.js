// Dependencies
var url = require("url");
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

// Capturing the url the request is made to.
  var urlParts = url.parse(req.url);

  // When we visit different urls, the switch statement call on different functions.
  switch (urlParts.pathname) {
    case "/":
      displayStart(urlParts.pathname, req, res);
      break;
    case "/portfolio":
      displayCSS(urlParts.pathname, req, res);
      break;
    case "/edit":
      console.log("display edit");
      break;
    default:
      display404(urlParts.pathname, req, res);
  }

}

function displayStart() {
    // Here we use the fs package to read our index.html file
    fs.readFile("servingPractice.html", function(err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayCSS() {

    fs.readFile("css.html", function(err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayFood() {
    fs.readFile("foods.html", function(err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayMovies() {
    fs.readFile("movies.html", function(err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

// Starts our server
server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);

});
