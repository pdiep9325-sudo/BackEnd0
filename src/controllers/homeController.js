const connection = require("../config/database");

let users = [];
const getHomePage = (req, res) => {
  // A simple SELECT query
  connection.query("SELECT * FROM `Users`", function (err, results, fields) {
    users = results;
    // console.log(">>> check result", results);
    // console.log(">>> check users", users);
    res.send(JSON.stringify(users));
  });
};
const getABC = (req, res) => {
  res.send("this is a ABC route");
};
const getProduct = (req, res) => {
  res.render("product.ejs");
};
module.exports = {
  getHomePage,
  getABC,
  getProduct,
};
