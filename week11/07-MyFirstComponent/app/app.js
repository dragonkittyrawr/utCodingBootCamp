// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the Header Component
var Header = require("./components/Header");
var Footer = require("./components/Footer");

ReactDOM.render(

  // Here we deploy the header component as though it were any other HTML element
  <div>
  <Header />
  <Footer />
  </div>,
  document.getElementById("app")
);
