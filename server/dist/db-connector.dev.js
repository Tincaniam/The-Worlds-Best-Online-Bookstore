"use strict";

/*
Citations:
    DB Connection code adapted from the "nodejs-starter-app" from CS 340 at Oregon State University.
    This includes making the connection and exporting it for use in the application.
    Date: 2023-04-05
    https://github.com/osu-cs340-ecampus/nodejs-starter-app
*/
// Get an instance of mysql we can use in the app
var mysql = require('mysql'); // Create a 'connection pool' using the provided credentials


var db = mysql.createConnection({
  connectionLimit: 10,
  host: 'classmysql.engr.oregonstate.edu',
  user: 'YOUR_USERNAME_HERE',
  password: 'YOUR_PASSWORD_HERE',
  database: 'YOUR_DATABASE_NAME_HERE'
}); // Citations:
//   Adapted from:
//   "Database integration"
//   Date: 2023-05-01
//   https://expressjs.com/en/guide/database-integration.html

db.connect(function (error) {
  if (error) {
    throw error;
  }

  console.log('Connected to mySQL database.');
}); // Export it for use in our application

module.exports = db;