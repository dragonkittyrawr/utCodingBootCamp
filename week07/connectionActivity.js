var mysql = require("mysql");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "music_db"
});

connection.connect(function(error) {
    if (error) {
        console.log(error);
        return
    }
    console.log("Connected as ID: " + connection.threadId);
});

connection.query("SELECT * FROM music_data", function(err, res) {
    if (err) {
        console.log(err);
        return
    }

    for (var i = 0; i < res.length; i++) {
        console.log(res[i].title);
    }
});



