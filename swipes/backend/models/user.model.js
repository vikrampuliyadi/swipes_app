const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
      minlength: 3,
    },
    lastname: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
