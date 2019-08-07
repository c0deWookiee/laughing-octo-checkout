import React, { Component } from "react";
import FinalFormList from "./finalFormList.jsx";

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
        ZipCode: null,
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
      await this.setState(json);
      console.log(this.state);
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    return (
      <div>
        {Object.keys(this.state).map(form => {
          if (form.length === 5)
            return <FinalFormList form={this.state[form]} />;
          return undefined;
        })}
        Is All your information correct?
        <form action="/">
          <button>CHECKOUT</button>
        </form>
      </div>
    );
  }
}
