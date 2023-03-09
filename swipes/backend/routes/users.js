const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// router.route("/:email").get((req, res) => {
//   User.findOne({ email: req.params.email, password: req.params.password })
//     .then((user) => {
//       if (user) {
//         console.log("User exists in database");
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

router.route("/:email/:password").get((req, res) => {
  console.log("FUCK");
  const { email, password } = req.params;
  User.findOne({ email: email, password: password })
    .then((user) => {
      if (user) {
        console.log("User exists in database");
        res.json(user);
      } else {
        console.log("User does not exist in database");
        res.status(404).json("User not found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json("Error: " + err);
    });
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

module.exports = router;
