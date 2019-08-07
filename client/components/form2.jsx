/**F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number. */
import InputBar from "./inputBar.jsx";
import { handleSubmit, patchData } from "./functions.js";
import React, { Component } from "react";

export default class form2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Line1: "",
      Line2: "",
      City: "",
      State: "",
      ZipCode: "",
      PhoneNumber: ""
    };
    this.handleSubmit = handleSubmit.bind(this);
    this.patchData = patchData.bind(this);
  }

  render() {
    return (
      <div>
        hello you must create an account to create
        <form>
          <InputBar title="Line1" handleSubmit={this.handleSubmit} />
          <InputBar title="Line2" handleSubmit={this.handleSubmit} />
          <InputBar title="City" handleSubmit={this.handleSubmit} />
          <InputBar title="State" handleSubmit={this.handleSubmit} />
          <InputBar title="ZipCode" handleSubmit={this.handleSubmit} />
          <InputBar title="PhoneNumber" handleSubmit={this.handleSubmit} />
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
