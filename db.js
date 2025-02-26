// server/db.js
const mysql = require('mysql2');

// Create the MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',        
  user: 'root',             
  password: 'Arsenal92!',             
  database: 'reflecta_home',         
});

// Promisify the query method for easier use with async/await
const promisePool = pool.promise();

module.exports = promisePool;