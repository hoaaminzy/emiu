const mongoose = require("mongoose");

const imageSchema = mongoose.Schema(
  {
    type: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

const imageModel = mongoose.model("image", imageSchema);

module.exports = imageModel;
