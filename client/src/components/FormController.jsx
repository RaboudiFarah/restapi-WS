import React from 'react';
import {Form , Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import { postcontact } from '../JS/actions/contactActions';

const FormController = () => {
  return (
    <Form style ={{ margin:"auto" , width :"500px" , marginTop: "100px"}}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>FullName</Form.Label>
      <Form.Control type="email" placeholder="Enter your name" />
     
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" placeholder="Enter your email" />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="email" placeholder="Enter your phone" />
   
  </Form.Group>

    
   
    <Button variant="primary" type="submit">
      Add
    </Button>
  </Form>
  )
}

export default FormController