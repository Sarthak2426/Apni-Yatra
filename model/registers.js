const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Username: {
    type: String,
    required: true,
  },
  Phone: {
    type: Number,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
    unique: true,
  },
  ConfirmPassword: {
    type: String,
    required: true,
  },
});

//Data Collection
module.exports = mongoose.model("Register", schema);
