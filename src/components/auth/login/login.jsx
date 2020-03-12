import React from "react";
import { Form, Button } from "react-bootstrap";

const Login = (props) => {
  return (
    <div>
      <h1> Login</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          name="email"
          type="email" 
          placeholder="Enter email" 
          onChange={props.change}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
           type="password"
           name="password"
           placeholder="Password"
           onChange={props.change}
            />
        </Form.Group>
        <Button variant="primary" type="button" onClick={props.submit}>
          Go !
        </Button>
      </Form>
    </div>
  );
};
export default Login;
