import React, { Component } from "react";

export default class theFinalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Form1: {
        Name: null,
        Email: null,
        Password: null,
        orderID: null
      },

      Form2: {
        Line1: null,
        Line2: null,
        City: null,
        State: null,
        Zipcode: null,
        PhoneNumber: null
      },
      Form3: {
        CreditCardNumber: null,
        ExpiryDate: null,
        CVV: null,
        ZipCode: null
      }
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("/api/db", {
        headers: {
          orderid: this.props.orderID
        }
      });
      const json = await response.json();
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    return <div />;
  }
}
