const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propiedadesSchema = new Schema({
  propertyID: Number,
  adress: String,
  state: String,
  type: String,
  price: Number,
});

const Propiedad = mongoose.model("Propiedad", propiedadesSchema);

module.exports = Propiedad;
