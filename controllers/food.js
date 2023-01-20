const Food = require("../models/Food");

exports.postFood = async (req, res) => {
  const { name, price, description, categories, time } = req.body;

  if (!categories) return res.status(400).json({ msg: "enter categories!!!" });

  const id = Math.random().toString(26).slice(2);

  const newFood = new Food({
    id: id,
    name: name,
    price: price,
    description: description,
    categories: categories,
    time: time,
    image: req.file.originalname,
  });

  console.log(id, name, price, description, categories, time);

  newFood
    .save()
    .then(() => res.json("Food Added"))
    .catch((err) => res.status(400).json(`Error:${err}`));
};
exports.getFood = async (req, res) => {
  Food.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};
exports.deleteFood = async (req, res) => {
  const id = req.params.id;
  await Food.findByIdAndRemove(id).exec();
  res.send({ msg: "Food deleted" });
};
exports.updateFoodImg = async (req, res) => {
  Service.findOneAndUpdate(
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
exports.updateFoodText = async (req, res) => {
  const { newName, newPrice, newDescription, newCategories, newTime } =
    req.body;
  console.log(newName, newDescription, newPrice);

  Food.findOneAndUpdate(
    { _id: req.params.id },
    {
      name: newName,
      price: newPrice,
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
