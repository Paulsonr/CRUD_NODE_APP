const express = require("express");
const mongoose = require("mongoose");
const productsRoute = require("./routes/products.route");
const fs = require("fs");
const app = express();
const PORT = 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productsRoute);

//home page
app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to CRUD app...</h1>");
});
//database connection
mongoose
  .connect(
    "mongodb+srv://Paulson:root123@mencrud.7vwivhu.mongodb.net/MENCRUD_DB?retryWrites=true&w=majority&appName=MENCRUD"
  )
  .then(() => {
    console.log("Database connected!");
    app.listen(3000, () => console.log("Server listening on port: ", PORT));
  })
  .catch((err) => console.log("Connection failed! >> \n", err));
