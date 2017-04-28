var orm = require("./config/orm.js");

// Find all parties, ordering them by party cost
orm.selectAndOrder("party_name", "parties", "party_cost", "DESC");
// Find parties by the name of the party
orm.selectWhere("parties", "party_name", "Top Gun");
// Find the client with the most parties
orm.findWhoHasMost("client_name", "client_id", "clients", "parties");
// BONUS: create a function within your ORM that will let the user add more clients and parties to the database.