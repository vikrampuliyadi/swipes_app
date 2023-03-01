// const express = require('express');
// const app = express();

// app.get('/', function(req, res) {
//     res.send('SwipeX Backend!');
//   });
  
//   app.listen(3000, function() {
//     console.log('Server started on port 3000');
//   });
  
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
const connection = mongoose.connection;
mongoose.connect(uri, {useNewUrlParser: true})
  .then(() => {
    connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
    })
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB database:", error);
  });

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

app.use('./users', usersRouter);
app.use('./posts', postsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});