/**F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number. */
import InputBar from "./inputBar.jsx";
import { handleSubmit, patchData } from "./functions.js";
import React, { Component } from "react";

export default class form2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      line1: "",
      line2: "",
      city: "",
      state: "",
      zipCode: ""
    };
    this.handleSubmit = handleSubmit.bind(this);
    this.patchData = patchData.bind(this);
  }

  render() {
    return (
      <div>
        hello you must create an account to create
        <form>
          <InputBar title="line1" handleSubmit={this.handleSubmit} />
          <InputBar title="line2" handleSubmit={this.handleSubmit} />
          <InputBar title="city" handleSubmit={this.handleSubmit} />
          <InputBar title="state" handleSubmit={this.handleSubmit} />
          <InputBar title="zipCode" handleSubmit={this.handleSubmit} />
        </form>
        <button
          onClick={() => {
            this.props.handleClick("Form2");
            patchData("/api/db");
          }}
        >
          Next page
        </button>
      </div>
    );
  }
}
