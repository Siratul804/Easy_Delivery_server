const Review = require("../models/review");

exports.postReview = async (req, res) => {
  const { title, description, categories } = req.body;

  const time = new Date();

  if (!categories) return res.status(400).json({ msg: "enter categories!!!" });

  const id = Math.random().toString(26).slice(2);

  const newReview = new Review({
    id: id,
    title: title,
    description: description,
    categories: categories,
    time: time,
    image: req.file.originalname,
  });

  newReview
    .save()
    .then(() => res.json("Review Added"))
    .catch((err) => res.status(400).json(`Error:${err}`));
};
exports.getReview = async (req, res) => {
  Review.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};
exports.deleteReview = async (req, res) => {
  const id = req.params.id;
  await Review.findByIdAndRemove(id).exec();
  res.send({ msg: "Review deleted" });
};
exports.updateReviewImg = async (req, res) => {
  Review.findOneAndUpdate(
    { _id: req.params.id },
    {
      image: req.file.originalname,
    },
    { new: true },
    (err, data) => {
      if (err) {
        res.send(err);
        console.log(err);
      } else {
        res.send(data);
        console.log(data);
      }
    }
  );
};
exports.updateReviewText = async (req, res) => {
  const { newTitle, newDescription, newCategories, newTime } = req.body;

  Review.findOneAndUpdate(
    { _id: req.params.id },
    {
      title: newTitle,
      description: newDescription,
      categories: newCategories,
      time: newTime,
    },
    { new: true },
    (err, data) => {
      if (err) {
        res.send(err);
        console.log(err);
      } else {
        res.send(data);
        console.log(data);
      }
    }
  );
};
