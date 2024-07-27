const imageModel = require("../models/imageModel");

async function UploadImage(req, res) {
  try {
    const uploadImage = new imageModel(req.body);
    const saveImage = await uploadImage.save();

    res.status(201).json({
      message: "Image upload successfully",
      error: false,
      success: true,
      data: saveImage,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = UploadImage;
