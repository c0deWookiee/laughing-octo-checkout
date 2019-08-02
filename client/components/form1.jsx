/**collects name and email and password for account creaation */
import InputBar from "./inputBar.jsx";
import { handleSubmit } from "./functions.js";
import React, { Component } from "react";

export default class form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Email: "",
      Password: ""
    };
    this.handleSubmit = handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        hello you must create an account to create
        <form>
          <InputBar title="Name" handleSubmit={this.handleSubmit} />
          <InputBar title="Email" handleSubmit={this.handleSubmit} />
          <InputBar title="Password" handleSubmit={this.handleSubmit} />
        </form>
        <button onClick={() => this.props.handleClick(this.props.form)}>
          Next page
        </button>
      </div>
    );
  }
}
