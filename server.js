const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://user:password1@ds245250.mlab.com:45250/heroku_1g5dl146", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});