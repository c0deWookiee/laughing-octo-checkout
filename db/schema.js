const mongoose = require("mongoose");

const octoSchema = new mongoose.Schema({
  Form1: {
    Name: String,
    Email: String,
    Password: String,
    orderID: Number
  },

  Form2: {
    Line1: String,
    Line2: String,
    City: String,
    State: String,
    ZipCode: Number,
    PhoneNumber: Number
  },
  Form3: {
    CreditCardNumber: Number,
    ExpiryDate: Number,
    CVV: Number,
    ZipCode: Number
  }
});

const Checkout = mongoose.model("checkout", octoSchema);

module.exports = Checkout;
