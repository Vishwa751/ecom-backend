const express = require("express");

const mongoose = require("mongoose");

const dotenv = require("dotenv");

const productRoutes = require("./Routes/productRoutes");
const authRoutes = require("./Routes/authRoutes");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/", productRoutes);

app.use("/auth", authRoutes);

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
