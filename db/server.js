// db.js
const inquirer = require('inquirer')
const mysql = require('mysql2');

// Create a function to establish a database connection
function connectDatabase() {
  const connection = mysql.createConnection({
    host: '127.0.0.1',     // Database host (e.g., 'localhost')
    user: 'root',     // Database user
    password: 'V1k1ngs1!', // Database password
    database: 'employee.db', // Database name
  });

  return connection.promise(); // Return a promise-based connection
}

module.exports = connectDatabase;
