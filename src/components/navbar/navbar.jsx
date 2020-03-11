import React from "react";
import { Navbar, Nav,Container } from "react-bootstrap";
const Header = () => {
  return (     
      <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="#home">UCAS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Further Education</Nav.Link>
            <Nav.Link href="#link">Undergraduate</Nav.Link>
            <Nav.Link href="#link">Postgraduate</Nav.Link>
            <Nav.Link href="#link">Alternatives</Nav.Link>
            <Nav.Link href="#link">Careers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};
export default Header;
