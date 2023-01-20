const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");

const {
  getFood,
  postFood,
  deleteFood,
  updateFoodImg,
  updateFoodText,
} = require("../controllers/food");

router.post("/admin/post", upload, postFood);

router.get("/get", getFood);

router.delete("/delete/:id", deleteFood);

router.put("/update/img/:id", upload, updateFoodImg);

router.put("/update/text/:id", updateFoodText);

module.exports = router;
