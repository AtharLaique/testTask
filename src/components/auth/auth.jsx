import React, { Component } from "react";
import Login from "./login/login";
import Signup from "./signup/signup";
import Footer from "../footer/footer";
import {Container , Col} from 'react-bootstrap';
import url from "../../assets/url";
import axios from 'axios';
import { connect } from 'react-redux';
class Auth extends Component {
  state = {
    isLogin: true,
    email:null,
    password:null,
    firstName:null,
    lastName:null,
    confirmPassword:null
  };
  Togle = () => {
    if (this.state.isLogin) {
      this.setState({ isLogin: false });
    } else {
      this.setState({ isLogin: true });
    }
  };
  onInputChange=(event)=>{
  this.setState({[event.target.name]:event.target.value})
  }
  onFormSubmit=async ()=>{
    //Login
    if(this.state.isLogin)
    {
      console.log('Login is called')
      
    }//signup
    else{
      console.log(this.state)
    }
  }
  render() {
    console.log( this.props.user)
    return (
      <div>
      <Container>
        <Col lg='5'>
        {!this.state.isLogin ? 
        <Signup change={this.onInputChange} submit={this.onFormSubmit}/> 
        : <Login change={this.onInputChange} submit={this.onFormSubmit}/>}
        </Col>
        <br/>
        <a onClick={this.Togle}>{this.state.isLogin ? 
        "Don't have acount yet ? Register" : " You can login from here !"}</a>
      </Container>
      <Footer id="0" />
      </div>
    );
  }
}
const mapStateToProps=(state)=>({
  user:state.auth
})  

export default connect(mapStateToProps,null) (Auth);