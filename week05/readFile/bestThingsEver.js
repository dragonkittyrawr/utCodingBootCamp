// Instructions:

// Create a Node application that reads the best_things_ever.txt file, parses the comma separated elements, and ultimately console logs each element in the file on separate lines.

// HINT: If you are struggling to figure out how to loop your way through the text, look into the .split() method. This could make your life a whole lot easier.
// Your final output should look something like this:

// lazy boy recliner
//   massage
//   meditation
//   hot shower
//   cheese fondue
//   hot coffee with cashew milk
//   kitten falling asleep on my lap



// Core node package for reading and writing files
var fs = require("fs");

// This block of code will create a file called "movies.txt".
// It will then print "Inception, Die Hard" in the file
fs.readFile("bestThingsEver.txt", "utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
        return console.log(err);
    } else {
        // We will then print the contents of data
        console.log(data);

        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");

        // We will then re-display the content as an array for later use.
        console.log(dataArr);
    }

});
