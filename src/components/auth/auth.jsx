import React, { Component } from "react";
import Login from "./login/login";
import Signup from "./signup/signup";
import Footer from "../footer/footer";
import {Container} from 'react-bootstrap';
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
      <Container>
        {!this.state.isLogin ? <Signup /> : <Login />}
        <a onClick={this.Togle}>{this.state.isLogin ? "Signup" : "Login"}</a>
      </Container>
      <Footer id="0" />
      </div>
    );
  }
}
export default Auth;
