var fs = require("fs");

var userSearch = require("./UserSearch");


// Creates a WeatherAdmin Constructor

var WeatherAdmin = function() {
      var newUserSearch = new UserSearch(name, location);
      var logText = userSearch.name + userSearch.location + userSearch.date

      
            fs.appendFile("searchLog.txt", this.newUserSearch, function(error) {
                    if (error) { console.log(err); }
                }
            };
            this.getData = function() {

            };
        }




        // One of those methods is newUserSearch, which should accept a user's name and location; search for the weather in their area; and save the user's information in a log of all searches users have made thus far.
        // The other method is getData, which should log or return a list of all of the searches users have executed thus far.
