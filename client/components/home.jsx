import React, { Component } from "react";
import Form1 from "./form1.jsx";
import Form2 from "./form2.jsx";
import Form3 from "./form3.jsx";
import FinalForm from "./theFinalForm.jsx";
import { handleClick } from "./functions";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderID: null,
      Form1: false,
      Form2: false,
      Form3: false
    };
    this.handleClick = handleClick.bind(this);
  }
  render() {
    return (
      <div>
        {!this.state.Form1 ? (
          <Form1 handleClick={this.handleClick} form="Form1" />
        ) : !this.state.Form2 ? (
          <Form2
            handleClick={this.handleClick}
            form="Form2"
            orderID={this.state.orderID}
          />
        ) : !this.state.Form3 ? (
          <Form3
            handleClick={this.handleClick}
            form="Form3"
            orderID={this.state.orderID}
          />
        ) : (
          <FinalForm orderID={this.state.orderID} />
        )}
      </div>
    );
  }
}
