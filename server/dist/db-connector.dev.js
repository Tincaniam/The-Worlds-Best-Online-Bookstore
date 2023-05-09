"use strict";

// Get an instance of mysql we can use in the app
var mysql = require('mysql'); // Create a 'connection pool' using the provided credentials


var db = mysql.createConnection({
  connectionLimit: 10,
  host: 'classmysql.engr.oregonstate.edu',
  user: 'cs340_tinnelm',
  password: '7970',
  database: 'cs340_tinnelm'
});
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected to MySQL!");
}); // Export it for use in our application

module.exports = db;