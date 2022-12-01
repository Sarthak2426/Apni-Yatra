//Imports
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
var app = express();
const hbs = require("hbs");
let alert = require("alert");
app.use(express.json());
const path = require("path");
const bodyParser = require("body-parser");
const { registerHelper } = require("hbs");
const port = 3000;
const router = express.Router();
const mongoose = require("mongoose");
const staticPath = path.join(__dirname, "/public");
const templatePath = path.join(__dirname, "/templates/views");
const partialsPath = path.join(__dirname, "/templates/partials");

// require("./connection/connectdb");
const Register = require("./model/registers");
const Contactus = require("./model/contacts");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "hbs");
app.set("views", templatePath);
app.use(express.static(staticPath));
hbs.registerPartials(partialsPath);
let urlencoded = bodyParser.urlencoded({ extended: false });
// Static Files
app.use(express.static("public"));
app.use(express.json());
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

//Set Views

let connectdb = require("./connection/connectdb.js");
connectdb();

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/tour", (req, res) => {
  res.render("index");
});
app.get("/adventure", (req, res) => {
  res.render("adventure");
});
app.get("/uk", (req, res) => {
  res.render("uk");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});
app.get("*", (req, res) => {
  res.render("404");
});

app.post("/register", async (req, res) => {
  try {
    const password = req.body.Password;
    const cpassword = req.body.ConfirmPassword;

    const email = req.body.Email;
    function isEmail(email) {
      var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (email !== "" && email.match(emailFormat)) {
        return true;
      }

      return false;
    }

    if (isEmail(email) && password === cpassword) {
      const data = new Register({
        Email: req.body.Email,
        Username: req.body.Username,
        Phone: req.body.Phone,
        Password: req.body.Password,
        ConfirmPassword: req.body.ConfirmPassword,
      });

      const registered = await data.save();
      res.status(201).render("login");
      console.log(registered);
      alert("Successfully Registered");
    } else {
      alert("Invalid Username or Password");
      res.render("register");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
//contact
app.post("/contact", async (req, res) => {
  try {
    const email = req.body.email;
    function isEmail(email) {
      var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (email !== "" && email.match(emailFormat)) {
        return true;
      }

      return false;
    }

    if (isEmail(email)) {
      const contactdata = new Contactus({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
      });

      const registered2 = await contactdata.save();
      res.status(201).render("index");
      console.log(registered2);
      alert("Your message has been sent successfully!");
    } else {
      alert("Invalid Credentials");
      res.render("contact");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
//login check
app.post("/login", async (req, res) => {
  try {
    const email = req.body.Email;
    const password = req.body.Password;

    const useremail = await Register.findOne({ Email: email });

    if (useremail.Password === password) {
      res.status(201).render("index");
      alert("Successfully Login");
    } else {
      alert("Invalid Credentials");
      res.render("login");
    }
    console.log(useremail);
  } catch (error) {
    res.status(400).send("Invalid Email");
  }
});

app.listen(port, () => console.info(`Listening on port ${port}`));
