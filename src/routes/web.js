const {
  getHomePage,
  getABC,
  getProduct,
  getCreatePage,
  postCreateUser,
  getUpdatePage,
} = require("../controllers/homeController");
const express = require("express");
const router = express.Router();

// router.Method('/route','handler')

// default port 8080
router.get("/", getHomePage);

// abc route
router.get("/abc", getABC);

//product route
router.get("/product", getProduct);

//create a page
router.get("/create", getCreatePage);

//update a page
router.get("/update/:id", getUpdatePage);

//method post create user
router.post("/create-user", postCreateUser);

module.exports = router;
