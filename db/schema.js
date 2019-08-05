const mongoose = require("mongoose");

const octoSchema = new mongoose.Schema({
  Form1: {
    Name: String,
    Email: String,
    Password: String
  },

  Form2: {
    Line1: String,
    Line2: String,
    City: String,
    State: String,
    Zipcode: Number,
    PhoneNumber: Number
  },
  Form3: {
    Credit: Number,
    Exp: Number,
    CVV: Number,
    Billing: Number
  }
});

const Checkout = mongoose.model("checkout", octoSchema);

module.exports = Checkout;
