const express = require("express");
const UploadImage = require("../controller/createImage");
const getImage = require("../controller/getImages");
const deleteImage = require("../controller/deleteImage");

const router = express.Router();

router.post("/uploadImage", UploadImage);
router.get("/getImages", getImage);
router.delete("/deleteImage/:id", deleteImage);

module.exports = router;
