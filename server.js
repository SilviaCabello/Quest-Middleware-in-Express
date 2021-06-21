const express = require("express");
const app = express();

app.use(logger)

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/users", auth, (req, res) => {
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

app.listen(3000);