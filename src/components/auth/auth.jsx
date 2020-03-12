import React, { Component } from "react";
import Login from "./login/login";
import Signup from "./signup/signup";
import Footer from "../footer/footer";

class Auth extends Component {
  state = {
    isLogin: true
  };
  Togle = () => {
    if (this.state.isLogin) {
      this.setState({ isLogin: false });
    } else {
      this.setState({ isLogin: true });
    }
  };
  render() {
    return (
      <div>
        {this.state.isLogin ? <Signup /> : <Login />}
        <a onClick={this.Togle}>{this.state.isLogin ? "Login" : "Signup"}</a>
        <Footer id="0" />
      </div>
    );
  }
}
export default Auth;
