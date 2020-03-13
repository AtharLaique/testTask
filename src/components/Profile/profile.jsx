import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";


const Profile = props => {
    const { handleSubmit, register, errors } = useForm();
  return (
    <div>
      <h1> Personal Info</h1>
      <Form onSubmit={handleSubmit(props.submit)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter Your Name</Form.Label>
          <Form.Control
            name="name"
            ref={register({
              required: "Required"
            })}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
          name="phone"
            ref={register({
              required: "Required",
              minLength:11,
              maxLength:11
            })}
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
        <Button variant="primary" type="submit">
          Go !
        </Button>
      </Form>
    </div>
  );
};
export default Profile;
