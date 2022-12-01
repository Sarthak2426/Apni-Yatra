const mongoose = require("mongoose");

const schema2 = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

//Data Collection
module.exports = mongoose.model("Contactus", schema2);
