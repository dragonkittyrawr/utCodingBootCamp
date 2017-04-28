// C - CREATE - INSERT INTO pets (name, type, age) VALUES ("fido", "dog", 3);
// R - READ   - SELECT * FROM pets;
// U - UPDATE - UPDATE pets SET name="under dog" WHERE type = "dog";
// D - DELETE - DELETE FROM pets WHERE type = "mouse";


var mysql = require("mysql");
// var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "top_songsdb"
});

connection.connect(function(error) {
    if (error) {
        console.log(error);
        return
    }
    console.log("Connected as ID: " + connection.threadId);
});

connection.query("SELECT * FROM top5000 WHERE artist = \"Nickelback\"", function(err, res) {
    if (err) {
        console.log(err);
        return
    } else {
        console.log(res);
    }
});
