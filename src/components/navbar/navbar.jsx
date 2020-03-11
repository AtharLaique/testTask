import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/"> UCAS</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/a">Further Education</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/b">Undergraduate</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/c">Postgraduate</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/d">Alternatives</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/e">Careers</Link>
            </Nav.Link>
            <Nav.Link>
                 <i class="fa fa-user-circle-o" aria-hidden="true"></i>
            </Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
