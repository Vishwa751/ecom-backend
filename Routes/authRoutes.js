const express = require("express");

const { register, login, logout, verifyuser } = require("../controllers/authController");
const { verify } = require("jsonwebtoken");
const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);

authRoutes.get("/verify" , verifyuser)

module.exports = authRoutes;

