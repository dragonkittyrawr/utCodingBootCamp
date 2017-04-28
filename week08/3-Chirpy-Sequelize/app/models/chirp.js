// Dependencies
// =============================================================
// Sequelize library
var Sequelize = require("sequelize");
// sequelize connection to the DB
var sequelize = require("../config/connection.js");
// Creates a "Chirp" model that matches up with DB
var Chirp = sequelize.define("chirp", {
  author: {
    type: Sequelize.STRING
  },
  body: {
    type: Sequelize.STRING
  },
  created_at: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});

// Syncs with DB
Chirp.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Chirp;
