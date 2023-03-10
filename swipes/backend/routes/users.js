const router = require("express").Router();
let User = require("../models/user.model");
const express = require("express");
const session = require("express-session");

const crypto = require("crypto");
const secretKey = crypto.randomBytes(32).toString("hex");

router.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
  })
);

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// router.route("/:email/:password").get((req, res) => {
//   const { email, password } = req.params;
//   User.findOne({ email: email, password: password })
//     .then((user) => {
//       if (user) {
//         console.log("User exists in database");
// req.session.user = {
//   email: user.email,
//   firstName: user.firstName,
//   lastName: user.lastName,
// };
//         console.log("session started");
//         res.json(user);
//       } else {
//         console.log("User does not exist in database");
//         res.status(404).json("User not found");
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json("Error: " + err);
//     });
// });

router.post("/auth/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email, password: password });
  if (user) {
    req.session.email = email;
    res.json({
      message: "You are successfully login",
      auth: true,
    });
  } else {
    res.json({
      message: "Unable to login",
      auth: false,
    });
  }
});

router.get("/api/user", (req, res) => {
  const email = req.session.email; // get user's email from session
  if (email) {
    // fetch user information using the email
    const user = User.findOne({ email: email });
    res.json(user);
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

router.route("/add").post((req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({ firstname, lastname, email, password });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

const getUserInfo = (sessionId) => {
  // Use the session ID to retrieve the user's information from the server/database
  // Return the user's information, or null if it doesn't exist or there was an error
  // For example:
  const user = database.findUserBySessionId(sessionId);
  return user ? user.info : null;
};

// function getUserInfo(req) {
//   if (req.session && req.session.user) {
//     return req.session.user;
//   } else {
//     return null;
//   }
// }

// router.route("/Create_Requests").get((req, res) => {
// res.render("Create_Requests", { email: req.session.user.email });
// console.log("email something");
// });

module.exports = router;
