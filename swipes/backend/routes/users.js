const router = require("express").Router();
let User = require("../models/user.model");
const passport = require("../passport-config");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/signin-failed", (req, res) => {
  res.status(401).json({ message: "Failed to authenticate", auth: false });
});

router.post(
  "/auth/signin",
  passport.authenticate("local", { failureRedirect: "/users/signin-failed" }),
  (req, res) => {
    req.session.email = req.user.email;
    res.json({ message: req.session, auth: true });
    // res.json({ message: "You are successfully logged in", auth: true });
  }
);

router.get("/email", (req, res) => {
  // Check if user is authenticated

  // Retrieve user's email
  const userEmail = req.user.email;
  res.json({ userEmail });
  // Do something with userEmail...
});

router.get("/api/user", async (req, res) => {
  try {
    // const sessionID = req.session.id; // get the session ID from the client cookie
    // const sessionData = req.sessionStore.get(sessionID); // get session data using Promise syntax
    const email = req.session.email;
    if (email) {
      // fetch user information using the email
      //const user = await User.findOne({ email: email }).select("email");
      res.json(email);
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error getting session data", error: err });
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

module.exports = router;
