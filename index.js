const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const source = process.env.MONGODB_URI;

const PropertiesModel = require("./models/Properties");

app.use(express.json());

mongoose.connect(source, {
  useNewUrlParser: true,
});

//Create a new Route
app.get("/", async (req, res) => {
  res.end("Bienvenido al servidor Bakcend...");
  const properties = new PropertiesModel({
    PropertyID: 1,
    Title: "Segunda casa",
  });
  try {
    await properties.save();
    console.log("success", properties.Title);
  } catch (err) {
    console.log(err);
  }
});

// app.get("/", (req, res) => {
//   res.end("Bienvenido al servidor Bakcend...");
// });
//import conection to MongoDB

// const fileDB = require("./conexion");

//config basic server

app.listen(8000, () => {
  console.log("NODE Server is running 🏃‍♀️ on http://localhost:8000/");
});
