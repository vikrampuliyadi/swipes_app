const express = require("express");
const session = require("express-session");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("./passport-config");
const MongoStore = require('connect-mongo');

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const crypto = require("crypto");
const { ErrorResponse } = require("@remix-run/router");
const secretKey = crypto.randomBytes(32).toString("hex");

const sessionStore = MongoStore.create({
  mongoUrl: "mongodb+srv://admin:admin12345@bswipes.2lrgcda.mongodb.net/?retryWrites=true&w=majority",
  collectionName: 'sessions' // specify a collection name to store session data
});
const sessionConfig = {
  secret: secretKey,
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: { maxAge: 60 * 60 * 1000 }
};


const sessionMiddleware = session(sessionConfig);

app.use(sessionMiddleware);

app.use(cors({ origin: "http://localhost:3001", credentials: true }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

const uri = process.env.ATLAS_URI;
const connection = mongoose.connection;
mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => {
    connection.once("open", () => {
      console.log("MongoDB database connection established successfully");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB database:", error);
  });

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");

app.use("/users", usersRouter);
app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


// // Import the necessary libraries
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const express = require('express');
// const app = express();

// // Set up a secret key for signing the JWT
// const JWT_SECRET_KEY = 'my-secret-key';

// // Set up a user database
// const users = [
//   { email: 'user1@example.com', password: '$2b$10$JU6W8jQQMfwAghPOkHPe/.IKSd1ij.vSo1pJZsYX4/Y4ZZc4go4Lq' },
//   { email: 'user2@example.com', password: '$2b$10$r9YlU6dQxb6oV7a0.pdxOuCI7vz/rM/CWPr7HmO9YXVUGmz3qKT0e' },
// ];

// // Set up a login endpoint
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;
  
//   // Find the user in the database
//   const user = users.find(user => user.email === email);
//   if (!user) {
//     return res.status(401).send('Invalid email or password');
//   }
  
//   // Validate the password
//   const validPassword = await bcrypt.compare(password, user.password);
//   if (!validPassword) {
//     return res.status(401).send('Invalid email or password');
//   }
  
//   // Create a JWT containing the user's email
//   const token = jwt.sign({ email: user.email }, JWT_SECRET_KEY);
  
//   // Set the token as a cookie and send a response
//   res.cookie('token', token, { httpOnly: true }).send('Logged in successfully');
// });

// // Set up an endpoint that requires authentication
// app.get('/protected', (req, res) => {
//   // Get the token from the cookie
//   const token = req.cookies.token;
  
//   try {
//     // Verify the token and extract the user's email
//     const decoded = jwt.verify(token, JWT_SECRET_KEY);
//     const userEmail = decoded.email;
    
//     // Do something with the user's email
//     res.send(`User email: ${userEmail}`);
//   } catch (err) {
//     // If the token is invalid, return an error
//     res.status(401).send('Invalid token');
//   }
// });
