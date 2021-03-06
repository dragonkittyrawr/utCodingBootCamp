// Instructions:

// Make a JavaScript file called bands.js that exports an object of music genres and bands like this:
// {
//   punk: 'Green Day',
//   rap: 'Run DMC',
//   classic: 'Led Zeppelin'
// }
// Require this JavaScript file in run.js, loop over the values, and console.log them.

// Make sure the program runs properly when entered into the terminal like this:

// node run.js
// And that the output looks something like the below:
// A punk band is Green Day
// A rap band is Run DMC
// A classic band is Led Zeppelin
// Bonus:

// Make it so that your program takes in a parameter like 'classic' and then outputs the associated band with it. In this case Led Zeppelin.

// If no parameter is passed then loop over and output all of them like asked above.


var bandList = require("./bands.js");

var bandOfBands = process.argv;

var genre = bandOfBands[2];

if (bandList.bands[genre]) {
    console.log(bandList.bands[genre]);
} else {
    console.log("--------------------------");
    for (x in bandList.bands) {
        console.log("A " + x + " band is " + bandList.bands[x]);
    }
    console.log("--------------------------");
}
