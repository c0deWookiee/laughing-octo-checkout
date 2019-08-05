/**collects name and email and password for account creaation */
import InputBar from "./inputBar.jsx";
import { handleSubmit, postData } from "./functions.js";
import React, { Component } from "react";

export default class Form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Email: "",
      Password: ""
    };
    this.handleSubmit = handleSubmit.bind(this);
    this.postData = postData.bind(this);
    this.handleClick = this.props.handleClick.bind(this);
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
        <button
          onClick={() => {
            this.handleClick(this.props.form, "POST");
            postData("/api/db")
              .then(response => response.json())
              .then(data => console.log(data));
          }}
        >
          Next page
        </button>
      </div>
    );
  }
}
