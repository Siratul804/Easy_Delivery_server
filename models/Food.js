const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String },
  categories: { type: String, required: true },
  time: { type: String },
  image: { type: String },
});

module.exports = Service = mongoose.model("Food", foodSchema);
