const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

require("dotenv").config();
const source = process.env.MONGODB_URI;

const PropertiesModel = require("./models/Properties");

app.use(express.json());
app.use(cors());

mongoose.connect(source, {
  useNewUrlParser: true,
});

//Create a new Route
app.post("/insert", async (req, res) => {
  const propertityId = req.body.propertityId;
  const title = req.body.title;

  res.end("Bienvenido al servidor Bakcend...");
  const properties = new PropertiesModel({
    PropertityId: propertityId,
    Title: title,
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
