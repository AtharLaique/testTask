import React from 'react';
import { Form, Button } from "react-bootstrap";

const Signup =(props)=>{
    return(
        <div>
             <h1> Signup</h1>
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

        <Form.Group controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
          name="firstName"
          type="name" 
          placeholder="Enter email" 
          onChange={props.change}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
          name="lastName"
          type="name" 
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

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control 
           type="password"
           name="confirmPassword"
           placeholder="Password"
           onChange={props.change}
            />
        </Form.Group>
        <Button variant="primary" type="button" onClick={props.submit}>
          Go !
        </Button>
      </Form>
        </div>
    )
}
export default  Signup;