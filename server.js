const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Jillian:Portland030418@inmexdb.wh1c6dl.mongodb.net/properties?retryWrites=true&w=majority",
  {
    userNewUrlParser: true,
  }
);

//Create a new Route
app.get("/", (req, res) => {
  res.end("Bienvenido al servidor Bakcend...");
});

//import conection to MongoDB

const fileDB = require("./conexion");

//config basic server

app.listen(8000, () => {
  console.log("NODE Server is running 🏃‍♀️ on http://localhost:8000/");
});
