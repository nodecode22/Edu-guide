const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

// Create connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'career_guidance',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Promise wrapper
const promisePool = pool.promise();

module.exports = promisePool;
