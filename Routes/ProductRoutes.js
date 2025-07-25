const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");
const { create } = require("../models/Product");

const productRoutes = express.Router();

productRoutes.get("/products", getAllProducts);

productRoutes.get("/products/:id", getProductById);

productRoutes.post("/products", createProduct);

productRoutes.put("/products/:id", updateProduct);

productRoutes.delete("/products/:id", deleteProduct);

module.express = productRoutes;

module.exports = productRoutes;
