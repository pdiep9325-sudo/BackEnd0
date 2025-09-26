const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
} = require("../services/CRUDServices");

const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  let userId = req.body.userId;
  await updateUserById(email, name, city, userId);
  // res.send("successful update to database");
  res.redirect("/");
};
const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  // console.log(">>> email = ", email, "name = ", name, "city = ", city);
  // let { email, name, city } = req.body;
  // sql insert
  //   insert into Users(email,name,city)
  // values ("test","nguyen van test","nam dinh")

  // const [results, fields] = await connection.execute("SELECT * FROM `Users`");
  const [results, fields] = await connection.query(
    `INSERT INTO Users( email, name, city)
    VALUES (?,?,?)`,
    [email, name, city]
  );
  res.send("successful added to database");
};

const getCreatePage = (req, res) => {
  return res.render("create.ejs");
};
const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  return res.render("edit.ejs", { userEdit: user });
};
const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
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
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
};
