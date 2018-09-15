import React, { Component } from "react";
import { withRouter } from "react-router";
import app from "../value";

import LoginView from "./LoginView";

class LogInContainer extends Component {
  handleLogin = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <LoginView onSubmit={this.handleLogin} />;
  }
}

export default withRouter(LogInContainer);
