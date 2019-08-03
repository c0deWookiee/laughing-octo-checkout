const mongoose = require("mongoose");

const octoSchema = new mongoose.Schema({
  Form1: {
    name: String,
    email: String,
    password: String
  },

  Form2: {
    line1: String,
    line2: String,
    city: String,
    state: String,
    zipcode: Number,
    phoneNumber: Number
  },
  Form3: {
    credit: Number,
    exp: Number,
    cvv: Number,
    billing: Number
  }
});

module.exports = octoSchema;
