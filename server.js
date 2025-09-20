require("dotenv").config();
const express = require("express"); //common js
const path = require("path");
const configViewEngine = require("./src/config/viewEngine");
const webRouters = require("./src/routes/web");
const connection = require("./src/config/database");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// A simple SELECT query
connection.query("SELECT * FROM `Users`", function (err, results, fields) {
  console.log(">>> result", results); // results contains rows returned by server
});

//config template engine ejs
configViewEngine(app);

//khai bao route
app.use("/", webRouters);
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
