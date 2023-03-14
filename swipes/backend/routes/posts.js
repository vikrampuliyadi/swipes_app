const router = require("express").Router();
let Post = require("../models/post.model");
const session = require("express-session");

router.route("/").get((req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/accepted/false").get((req, res) => {
  Post.find({ accepted: "false" })
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/accepted/email").get((req, res) => {
  const userId = req.body.email; // assuming user ID is available in req.user
  Post.find({ $or: [{ accepted: userId }, { createdBy: userId }] })
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.put("/:id/update-accepted", async (req, res) => {
  try {
    const postId = req.params.id;
    const email = req.body.email;

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      {
        accepted: email,
      },
      { new: true }
    );

    res.status(200).json({
      message: "Post accepted field updated successfully",
      post: updatedPost,
      email: email,
      postId: postId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.route("/add").post((req, res) => {
  const email = req.body.email;
  const diningHall = req.body.diningHall;
  const date = req.body.date;
  const price = req.body.price;
  const paymentType = req.body.paymentType;
  const contactInfo = req.body.contactInfo;
  const message = req.body.message;
  let accepted = "false";

  const newPost = new Post({
    email,
    diningHall,
    date,
    price,
    paymentType,
    contactInfo,
    message,
    accepted,
  });
  newPost
    .save()
    .then(() => res.json("Post added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Post.findById(req, res)
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
