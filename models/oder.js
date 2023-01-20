const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    Name: [
      {
        type: String,
        trim: true,
        require: true,
      },
    ],
    Price: [
      {
        type: String,
        trim: true,
        require: true,
      },
    ],
    Quanity: [
      {
        type: String,
        trim: true,
        require: true,
      },
    ],
    Total: {
      type: String,
      trim: true,
      require: true,
    },

    Table: {
      type: String,
      trim: true,
      require: true,
    },
    Extra: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("oder", cartSchema);
