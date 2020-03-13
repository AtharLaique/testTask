import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link , Redirect } from "react-router-dom";
import data from "../../assets/data";
import { connect } from 'react-redux'; 
const Header = props => {
  const isLogin=props.user.isLogin;
  console.log(props)
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
            {isLogin? 
            <React.Fragment>
            <Nav.Link onClick={props.click}>Create profile</Nav.Link>
           <Nav.Link onClick={props.onLogout}>Logout</Nav.Link>
           </React.Fragment>
            :<Nav.Link>
            <Link to="/login"> <i class="fa fa-user-circle-o" aria-hidden="true"></i></Link>
          </Nav.Link>}
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
const mapStateToProps=(state)=>({
  user:state.Auth
})  
const mapDispatchToProps = dispatch => {
  return {
     onLogout: () => {
       localStorage.removeItem('user')
       dispatch({type:"LOGOUT"})
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps) ( Header);
