import React, { Component } from "react";
import Profile from "./profile";
import { Container, Col } from "react-bootstrap";
import url from "../../assets/url";
import axios from "axios";
import { connect } from "react-redux";

class  CreateProfile extends Component {
  onFormSubmit =  data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <Container>
          <Col lg="5">
            <Profile submit={this.onFormSubmit} />
          </Col>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.Auth
});
export default connect(mapStateToProps)( CreateProfile);
