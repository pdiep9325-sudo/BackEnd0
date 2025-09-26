require("dotenv").config(); //import env library
const mysql = require("mysql2/promise");
// import mysql from "mysql2/promise";
//test connection
//create the connection pool to database

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;
