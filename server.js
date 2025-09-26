require("dotenv").config();
const express = require("express"); //common js
const path = require("path");
const configViewEngine = require("./src/config/viewEngine");
const webRouters = require("./src/routes/web");
const connection = require("./src/config/database");
// const express = require("body-parser");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json()); // for JSON data
app.use(express.urlencoded({ extended: true })); // for HTML forms

// A simple SELECT query

//  const [results, fields] = await connection.execute("SELECT * FROM `Users`");
//config template engine ejs
configViewEngine(app);

//khai bao route
app.use("/", webRouters);
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
