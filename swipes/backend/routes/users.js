const router = require("express").Router();
let User = require("../models/user.model");
const passport = require("../passport-config");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "my-secret-key";

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/signin-failed", (req, res) => {
  res.status(401).json({ message: "Failed to authenticate", auth: false });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
}

router.post("/auth/signin", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        res.status(401).json({ message: "Invalid email or password" });
      } else {
        if (password === user.password) {
          const token = jwt.sign({ email: user.email }, JWT_SECRET);
          res.cookie("token", token, {
            sameSite: "none",
            secure: true,
            maxAge: 3600000,
          });
          res.json({ token: token });
        } else {
          res.status(401).json({ message: "Invalid email or password" });
        }
      }
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/email", authenticateToken, (req, res) => {
  const userEmail = req.user.email;
  res.json({ userEmail });
});


router.get("/fullname", authenticateToken, async (req, res) => {
  try {
    const email = req.body.email;
    if (email) {
      const first = await User.findOne({ email: email }).select("firstname");
      const last = await User.findOne({ email: email }).select("lastname");
      const username = first + last;
      res.json(username);
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error getting user data", error: err });
  }
});

router.get("/api/user", authenticateToken, async (req, res) => {
  try {
    const email = req.user.email;
    if (email) {
      const user = await User.findOne({ email: email }).select("email");
      res.json(user);
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error getting user data", error: err });
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
