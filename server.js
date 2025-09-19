require("dotenv").config();
const express = require("express"); //common js
const path = require("path");
const configViewEngine = require("./src/config/viewEngine");
const webRouters = require("./src/routes/web");
const mysql = require("mysql2");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//test connection
// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "hoidanit",
  port: 3307,
  password: "123456",
});

// A simple SELECT query
connection.query("SELECT * FROM `Users`", function (err, results, fields) {
  console.log(">>> result", results); // results contains rows returned by server
  console.log(">>> fileds", fields); // fields contains extra meta data about results, if available
});

//config template engine ejs
configViewEngine(app);

//khai bao route
app.use("/", webRouters);
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
