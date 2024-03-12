const Product = require("../models/Product.model");

//create
const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//read
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSpecificProduct = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//update
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }
    const updatedProduct = await Product.findById(req.params.id);
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//delete
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }
    res.status(200).json({ message: "Product deleted successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addProduct,
  getProducts,
  getSpecificProduct,
  updateProduct,
  deleteProduct,
};
