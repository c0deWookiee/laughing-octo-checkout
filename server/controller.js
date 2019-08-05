const mongoose = require("mongoose");
const Checkout = require("../db/schema.js");

module.exports = {
  post: (req, res) => {
    const { Name, Email, Password } = req.body;
    const octoCheckout = new Checkout({
      Form1: {
        Name,
        Email,
        Password
      }
    }).save(err => {
      if (err) {
        console.error(err);
        res.send("there was an error saving your checkout");
      }
      res.send({ message: "db saved" });
    });
  },
  get: (req, res) => {
    console.log("this is a get");
    res.send("you made a get");
  },

  patch: (req, res) => {
    const { Line1, Line2, City, State, Zipcode } = req.body;
    console.log("this is a patch");
    Checkout.findOneAndUpdate(
      { "Form1.name": "test" }, //query
      { "Form2.line1": "1234 Faith lane" }, //partial update
      (err, check) => {
        //error first callback
        if (err) console.error(err);
        res.send({ message: "update successful" });
      }
    );
  }
};
