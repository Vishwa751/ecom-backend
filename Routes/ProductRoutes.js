const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");

const { isAuth, isAdmin } = require("../middlewares/authmiddlewares");

const productRoutes = express.Router();

productRoutes.get("/products", isAuth, getAllProducts);

productRoutes.get("/products/:id", getProductById);

productRoutes.post("/products", isAuth, isAdmin, createProduct);

productRoutes.put("/products/:id", isAuth, isAdmin, updateProduct);

productRoutes.delete("/products/:id", isAuth, isAdmin, deleteProduct);

module.exports = productRoutes;
