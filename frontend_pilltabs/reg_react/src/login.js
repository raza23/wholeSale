import React from "react";
import * as ReactBootStrap from "react-bootstrap";

import "./App.css";

function Login() {
  return (
    <div className="App">
      <ReactBootStrap.Form>
        <ReactBootStrap.Form.Group controlId="formBasicEmail">
          <ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label>
          <ReactBootStrap.Form.Control type="email" placeholder="Enter email" />
          <ReactBootStrap.Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </ReactBootStrap.Form.Text>
        </ReactBootStrap.Form.Group>

        <ReactBootStrap.Form.Group controlId="formBasicPassword">
          <ReactBootStrap.Form.Label>Password</ReactBootStrap.Form.Label>
          <ReactBootStrap.Form.Control type="password" placeholder="Password" />
        </ReactBootStrap.Form.Group>
        <ReactBootStrap.Form.Group controlId="formBasicCheckbox">
          <ReactBootStrap.Form.Check type="checkbox" label="Check me out" />
        </ReactBootStrap.Form.Group>
        <ReactBootStrap.Button variant="primary" type="submit">
          Submit
        </ReactBootStrap.Button>
      </ReactBootStrap.Form>
    </div>
  );
}

export default Login;
