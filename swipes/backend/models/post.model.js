const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    email: { type: String, required: true },
    diningHall: { type: String, required: true },
    date: { type: String, required: true },
    price: { type: String, required: true },
    paymentType: { type: String, required: true },
    contactInfo: { type: String, required: true },
    message: { type: String, required: true },
    accepted: {type: Boolean, required: true},
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
