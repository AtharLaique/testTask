import React from 'react';
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Signup =(props)=>{
  const { handleSubmit, register, errors } = useForm();
    return(
        <div>
             <h1> Signup</h1>
             <Form onSubmit={handleSubmit(props.submit)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          name="email"
          ref={register({
            required: 'Required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
            }
          })}
          />
        </Form.Group>
        {errors.email && "invalid email address"}

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
           type="password"
           name="password"
           ref={register({
            required: "Required",
            minLength:8
          })}
            />
               {errors.password && "password must be 8 chracter long"}
        </Form.Group>
        <Button variant="primary" type="submit" >
          Go !
        </Button>
      </Form>
        </div>
    )
}
export default  Signup;