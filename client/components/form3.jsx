//F3 collects credit card #, expiry date, CVV, and billing zip code.
import InputBar from "./inputBar.jsx";
import { handleSubmit, patchData } from "./functions.js";
import React, { Component } from "react";

export default class form3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CreditCardNumber: "",
      ExpiryDate: "",
      CVV: "",
      ZipCode: ""
    };
    this.handleSubmit = handleSubmit.bind(this);
    this.patchData = patchData.bind(this);
  }

  render() {
    return (
      <div>
        <form>
          <InputBar title="CreditCardNumber" handleSubmit={this.handleSubmit} />
          <InputBar title="ExpiryDate" handleSubmit={this.handleSubmit} />
          <InputBar title="CVV" handleSubmit={this.handleSubmit} />
          <InputBar title="ZipCode" handleSubmit={this.handleSubmit} />
        </form>
        <button
          onClick={() => {
            if (Object.values(this.state).includes(""))
              return alert("You must fill in all fields to proceed");

            this.props.handleClick(this.props.form);
            this.patchData("/api/db");
          }}
        >
          Next page
        </button>
      </div>
    );
  }
}
