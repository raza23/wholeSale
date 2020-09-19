import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./App.css";
import { Link, withRouter } from "react-router-dom";

const LOGIN_URL = "http://localhost:3001/login";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    // debugger

    e.preventDefault();
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: this.state })
    };

    fetch(LOGIN_URL, reqObj)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        localStorage.setItem("user_id", data.user.id);
        localStorage.setItem("jwt", data.token);

        this.props.onChangeUser(data.user);
        debugger;
        this.props.history.push("/profile");
        // /home
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <div className="App">
        <ReactBootStrap.Form onSubmit={this.handleSubmit}>
          <ReactBootStrap.Form.Group controlId="formBasicEmail">
            <ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control
              name="email"
              type="text"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <ReactBootStrap.Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </ReactBootStrap.Form.Text>
          </ReactBootStrap.Form.Group>

          <ReactBootStrap.Form.Group controlId="formBasicPassword">
            <ReactBootStrap.Form.Label>Password</ReactBootStrap.Form.Label>
            <ReactBootStrap.Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
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
}

export default withRouter(Login);
