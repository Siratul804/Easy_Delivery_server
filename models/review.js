const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  categories: { type: String, required: true },
  time: { type: String },
  image: { type: String },
});

module.exports = Service = mongoose.model("review", reviewSchema);
