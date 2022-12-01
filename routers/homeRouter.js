const express = require("express");
const Router = express.Router();

Router.get("/login", (err, res) => {
  res.render("register");
});

module.exports = Router;
