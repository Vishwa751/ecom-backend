const express = require("express");

const mongoose = require("mongoose");

const dotenv = require("dotenv");

const cors = require("cors");

const cookieParser = require("cookie-parser");

const productRoutes = require("./Routes/ProductRoutes");

const authRoutes = require("./Routes/authRoutes");

const cartRoutes = require("./Routes/cart.Routes");
const orderRoutes = require("./Routes/orderroutes");

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true,
  
 }));

app.use(express.json());

app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the E-commerece API",
  });
});

app.use("/", productRoutes);

app.use("/", cartRoutes);

app.use("/auth", authRoutes);

app.use("/orders", orderRoutes);

mongoose
  .connect(process.env.MONGODB_URL)

  .then(() => {
    console.log("Database connected");

    app.listen(3000, () => {
      console.log("Server is running in 3000");
    });
  })
  .catch((error) => {
    console.log("Error connecting to database:", error.message);
  });
