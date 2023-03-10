const router = require("express").Router();
let Post = require("../models/post.model");
const session = require("express-session");

router.route("/").get((req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const email = req.body.email;
  const diningHall = req.body.diningHall;
  const date = Date.parse(req.body.date);
  const price = Number(req.body.price);
  const paymentType = req.body.paymentType;
  const contactInfo = req.body.contactInfo;
  const message = req.body.message;

  const newPost = new Post({
    email,
    diningHall,
    date,
    price,
    paymentType,
    contactInfo,
    message,
  });
  newPost
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Post.findById(req, res)
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
