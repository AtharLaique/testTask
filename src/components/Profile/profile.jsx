import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";


const Profile = props => {
    const { handleSubmit, register, errors } = useForm();
  return (
    <div>
      <h3> Personal Info</h3>
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
              min:11,
              max:11
            })}
          />
        </Form.Group>
        {errors.phone && "Your input required exactly 11"}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control
            name='address'
            as="textarea" rows="3"
            ref={register({
                required: "Required"
              })}
          />
        </Form.Group>
        <h3> Acadmic History</h3>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Qualification</Form.Label>
          <Form.Control
            name='qualification'
            type="text"
            ref={register({
                required: "Required"
              })}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Grade</Form.Label>
          <Form.Control
             name='grade'
             type="text"
             ref={register({
                 required: "Required"
               })}
          />
        </Form.Group>
        <h3> University Prefrence</h3>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            name='prefrence'
            as="textarea" rows="3"
            ref={register({
                required: "Required"
              })}
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
