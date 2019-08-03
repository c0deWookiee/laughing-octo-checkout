const mongoose = require("mongoose");
const schema = require("../db/schema.js");

module.exports = {
  post: (req, res) => {
    console.log("this is a post");
    const Checkout = mongoose.model("checkout", schema);
    const octoCheckout = new Checkout({
      Form1: {
        name: "daniel",
        email: "danie;",
        password: "dan"
      },

      Form2: {
        line1: "dan",
        line2: "hi",
        city: "hi",
        state: "hi",
        zipcode: 11,
        phoneNumber: 11
      },
      Form3: {
        credit: 11,
        exp: 11,
        cvv: 11,
        billing: 11
      }
    });
    octoCheckout.markModified("Form1");
    octoCheckout.save(err => {
      if (err) {
        console.error(err);
        res.send("there was an error saving your checkout");
      }
      res.send("db saved");
    });
  },
  get: (req, res) => {
    console.log("this is a get");
    res.send("you made a get");
  },

  put: (req, res) => {
    console.log("this is a put");
  }
};
