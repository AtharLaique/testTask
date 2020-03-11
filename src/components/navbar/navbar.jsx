import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "../../assets/data";
const Header = props => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/"> UCAS</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {data.paths.map((path, index) => {
              return (
                <Nav.Link   id={index}>
                  <Link
                    to={{
                      pathname: "/" + path,
                      state: {
                        id: index
                      }
                    }}
                  
                  >
                    {path}
                  </Link>
                </Nav.Link>
              );
            })}
            <Nav.Link onClick={props.click}>Create profile</Nav.Link>
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
