const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// const EmailSchemaType = new mongoose.SchemaType({
//     name: 'email',
//     validate: {
//       validator: function(email) {
//         return /\S+@\S+\.\S+/.test(email);
//       },
//       message: props => `${props.value} is not a valid email address!`
//     }
//   });

const userSchema = new Schema(
  {
    username: {
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
