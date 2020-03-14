import React, { Component } from "react";
import Profile from "./profile";
import { Container, Col } from "react-bootstrap";
import url from "../../assets/url";
import axios from "axios";
class  CreateProfile extends Component {
  onFormSubmit =  data => {
    axios.post(url.profile,data)
    .then(res=>{
        alert('profile created successfully')
    })
  };
  render() {
    return (
      <div>
        <Container>
          <Col lg="5">
            <Profile submit={this.onFormSubmit} />
          </Col>
          <Col lg="7">
            <Profile submit={this.onFormSubmit} />
          </Col>
        </Container>
      </div>
    );
  }
}
export default  CreateProfile;
