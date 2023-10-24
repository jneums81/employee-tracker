const mysql = require('mysql2');

// Replace these with your actual database credentials
const dbConfig = {
  host: '127.0.0.1',     // Change to your MySQL server host
  user: 'root', // Change to your MySQL username
  password: 'V1k1ngs1!', // Change to your MySQL password
  database: 'company_db' // Change to your database name
};

// Create a MySQL pool to handle database connections
const db = mysql.createPool(dbConfig);

module.exports = db;
