// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the momentJS library
var moment = require("moment");

// Here we create a variable for holding the name and birthday
var name = "Erin";
var dob = moment("01/18/1982", "MM/DD/YYYY");
// var birthDate = [];
// birthDate.push(dob._i);
var age = moment().diff(dob, "years");

ReactDOM.render(
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">

        {/* Fill the blanks below with the name, dob, and then age in years  */}
        <h2>My name is {name}.</h2>
        <h1>I was born on {dob._i}</h1>
        <h1>I was born on {dob.format("MM/DD/YYYY")}</h1>
        <hr />
        <h2>That makes me: {age} years old.</h2>
        <h2>That makes me: {dob.fromNow(true)} old.</h2>
      </div>
    </div>
  </div>, document.getElementById("app"));
