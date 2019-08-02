//F3 collects credit card #, expiry date, CVV, and billing zip code.
import InputBar from "./inputBar.jsx";
import { handleSubmit } from "./functions.js";
import React, { Component } from "react";

export default class form3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCardNumber: "",
      expiryDate: "",
      CVV: "",
      zipCode: ""
    };
    this.handleSubmit = handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        hello you must create an account to create
        <form>
          <InputBar title="creditCardNumber" handleSubmit={this.handleSubmit} />
          <InputBar title="expiryDate" handleSubmit={this.handleSubmit} />
          <InputBar title="CVV" handleSubmit={this.handleSubmit} />
          <InputBar title="zipCode" handleSubmit={this.handleSubmit} />
        </form>
        <button>Next page</button>
      </div>
    );
  }
}
