const Oder = require("../models/oder");

exports.createOder = (req, res) => {
  const { name, price, quanity, total, table, extra } = req.body;

  if (!table) return res.status(400).json({ msg: "enter table NO.!!!" });

  // console.log(name, price, quanity, total);

  const newOder = new Oder({
    Name: name,
    Price: price,
    Quanity: quanity,
    Total: total,
    Table: table,
    Extra: extra,
  });

  newOder
    .save()
    .then(() => res.json(newOder))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};
exports.getOder = (req, res) => {
  Oder.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

exports.deleteOder = async (req, res) => {
  const id = req.params.id;
  await Oder.findByIdAndRemove(id).exec();
  res.send({ msg: "Oder deleted" });
};
