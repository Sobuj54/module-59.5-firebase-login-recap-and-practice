import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import app from "../../firebase.config";

const User = () => {
  const auth = getAuth(app);

  const handleOnSubmitForm = (event) => {
    event.preventDefault();

    // getting email and password from input field
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <h2>user log in page</h2>

      <Form onSubmit={handleOnSubmitForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default User;
