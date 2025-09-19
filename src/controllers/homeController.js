const getHomePage = (req, res) => {
  res.send("this is a default route");
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
