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
  collectionName: 'sessions'
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