const imageModel = require("../models/imageModel");

const getImage = async (req, res) => {
  try {
    const allImage = await imageModel.find().sort({ createdAt: -1 });

    res.json({
      message: "All Product",
      success: true,
      error: false,
      data: allImage,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = getImage;
