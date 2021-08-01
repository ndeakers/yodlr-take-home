import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { useHistory } from "react-router";
import DisplayError from "./DisplayError";
import Button from "react-bootstrap/esm/Button";
const initialState = {
  email: "",
  firstName: "",
  lastName: "",
}


function SignUpForm({ handleSignUp }) {
  const [formData, setFormData] = useState(initialState);
  const history = useHistory();
  const [errorMessages, setErrorMessages] = useState([]);
  console.log(formData);


  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    console.log("formData handleSubmit", formData);
    evt.preventDefault();
    const response = await handleSignUp(formData);
    if (response.success === true) {
      history.push("/admin");
    } else {
      setErrorMessages([response.errors]);
    }
  }

  return (
    <Container className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
      <h3 className="text-center mt-4">Sign Up</h3>
      {errorMessages.length !== 0
        ? <DisplayError errors={errorMessages} />
        : <></>}

      <Form className="align-items-center" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="SignUpEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
            name="email"
            value={FormData.email}
            onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="SignUpFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="SignUpLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">Sign Up</Button>
      </Form>
    </Container>

  )
}

export default SignUpForm;