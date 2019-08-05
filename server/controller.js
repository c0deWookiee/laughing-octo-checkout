const mongoose = require("mongoose");
const Checkout = require("../db/schema.js");

module.exports = {
  post: (req, res) => {
    const { Name, Email, Password, orderID } = req.body;
    const octoCheckout = new Checkout({
      Form1: {
        Name,
        Email,
        Password,
        orderID
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
    console.log("type of req.body.orderid", typeof req.body.orderID);
    Checkout.findOneAndUpdate(
      { "Form1.orderID": req.body.orderID }, //query
      patchParser(req.body), //partial update
      (err, check) => {
        //error first callback
        if (err) console.error(err);
        res.send({ message: "update successful" });
      }
    );
  }
};

function patchParser(body) {
  //collect what the form is
  const Form = body.Form;
  const output = {};
  for (let key in body) {
    if (key === "orderID") continue; // no need to include order id anymore
    output[`${Form}.${key}`] = body[key];
  }
  console.log(output);
  return output;
}
