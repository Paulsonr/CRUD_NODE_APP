const express = require("express");
const router = express.Router();
const {
  addProduct,
  getProducts,
  getSpecificProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.controller");

//create
router.post("/", addProduct);
//read
router.get("/", getProducts);
router.get("/:id", getSpecificProduct);
//update
router.put("/:id", updateProduct);
//delete
router.delete("/:id", deleteProduct);

module.exports = router;
