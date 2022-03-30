import React, { useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";

import {Navigate} from 'react-router-dom'
//import { authcontext } from "./Contest/AuthContest";
import axios from "axios";
export default function Loginwithcontext() {
  //validation
  try {
    const Submit = async (data) => {
     //   const{saveAuthinfo} = useContext(authcontext)

      const { username, email, password } = data;
      const res = await axios.post("api", {
        username,
        email,
        password,
      });
      console.log(res.data);
      //saveAuthinfo(res.data);
      <Navigate to="/home" replace />
    };
  } catch (err) {
    console.log(err.response.data);
  }

  return (
    <div>
      <Container className="mx-5 w-50 mx-auto">
        <h2> Login with contest </h2>{" "}
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label> Name </Form.Label>{" "}
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>{" "}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Email address </Form.Label>{" "}
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> Password </Form.Label>{" "}
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>{" "}
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>{" "}
          <Button variant="primary" type="submit">
            Submit{" "}
          </Button>{" "}
        </Form>{" "}
      </Container>{" "}
    </div>
  );
}
