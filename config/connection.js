// Set up MySQL connection.
var mysql = require("mysql");

require('dotenv').config();


if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
  host: "lyn7gfxo996yjjco.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "	cvj7bu1g1hg0uecp",
  password: "wr6xtk34eunldga7",
  database: "ccnkx728pkfzzl6u"
});
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;