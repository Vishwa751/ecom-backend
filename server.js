const express = require("express");

const mongoose = require("mongoose");

const dotenv = require("dotenv");

const productRoutes = require("./Routes/ProductRoutes");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/", productRoutes);

mongoose
  .connect(process.env.MONGOOB_URL)

  .then(() => {
    console.log(" Database connected");

    app.listen(3000, () => {
      console.log(" Server is running 3000");
    });
  })
  .catch((error) => {
    console.error(" Error connecting to database:", error.message);
  });
