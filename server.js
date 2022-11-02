const express = require("express");
const app = express();

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
