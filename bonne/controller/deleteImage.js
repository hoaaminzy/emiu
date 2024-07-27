const imageModel = require("../models/imageModel");

async function deleteImage(req, res) {
  try {
    const _id = req.params.id; 
    const deletedImage = await imageModel.findByIdAndDelete(_id);

    if (!deletedImage) {
      return res.status(404).json({
        message: "Image not found",
        error: true,
        success: false,
      });
    }

    res.status(200).json({
      message: "Delete successfully",
      error: false,
      success: true,
      data: deletedImage,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = deleteImage;
