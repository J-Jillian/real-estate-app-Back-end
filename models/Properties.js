const mongoose = require("mongoose");

const PropertiesSchema = new mongoose.Schema({
  PropertyID: {
    type: Number,
  },
  Title: {
    type: String,
    require: true,
  },
});

const Properties = mongoose.model("Property", PropertiesSchema);
module.exports = Properties;
