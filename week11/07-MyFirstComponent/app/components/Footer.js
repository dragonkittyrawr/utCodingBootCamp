// Include React
var React = require("react");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Footer = React.createClass({
  render: function() {
    return (
    	<div className="container">
      <h1 className="jumbotron">Hi I'm a footer!</h1>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Footer;
