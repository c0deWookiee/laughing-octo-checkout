/**collects name and email and password for account creaation */

import React, { Component } from "react";

export default class form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }
  render() {
    return <div>hello you must create an account to continue</div>;
  }
}
