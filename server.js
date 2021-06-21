const express = require("express");
const app = express();
const port = 3000;

app.use(logger)

app.get("/", (req, res) => {
  console.log("Home")
  res.send("Home Page");
});

app.get("/users", auth, (req, res) => {
  console.log("Users")
  res.send("Users Page");
});

function logger(req, res, next) {
  console.log("Log")
  next()
}

function auth(req, res, next) {
  if (req.query.admin === "true") {
    next()
  } else {
    res.send("Auth failed")
  }
}

app.listen(port, (error) => {
  error ? console.log(error) : console.log (`App running on port ${port}`);
});