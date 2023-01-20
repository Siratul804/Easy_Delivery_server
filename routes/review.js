const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");

const {
  getReview,
  postReview,
  deleteReview,
  updateReviewImg,
  updateReviewText,
} = require("../controllers/review");

router.post("/admin/post/review", upload, postReview);

router.get("/get/review", getReview);

router.delete("/delete/review/:id", deleteReview);

router.put("/update/review/img/:id", upload, updateReviewImg);

router.put("/update/review/text/:id", updateReviewText);

module.exports = router;
