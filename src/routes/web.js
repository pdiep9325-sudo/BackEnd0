const {
  getHomePage,
  getABC,
  getProduct,
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

module.exports = router;
