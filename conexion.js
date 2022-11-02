//require mongoose

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/propiedades-inmex");

const objectbd = mongoose.connection;

objectbd.on("Conected", () => {
  console.log("Conected to MongoDb");
});
objectbd.on("error", () => {
  console.log("Error conecting to MongoDb");
});

module.exports = mongoose;
