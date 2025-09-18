const express = require("express"); //common js
const path = require("path");
require("dotenv").config();

console.log("check env:", process.env);
// import express from "express"; //es module
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine ejs
// app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("view engine", "pug");

//config static files
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.send("Hello World port 8080 da them nodemon and test nodemon!");
});

app.get("/abc", (req, res) => {
  // res.send("<h1>day la doan text da duoc route</h1>");
  res.render("sample.ejs");
});

app.get("/pp", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
