import React, { useState } from "react";
import "./Login.scss";
import * as ReactBootStrap from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LOGIN_URL = "http://localhost:3001/login";

// className Login extends React.Component {
//   state = {
//     email: "",
//     password: ""
//   };

//   handleSubmit = e => {
//     // debugger

//     e.preventDefault();
//     const reqObj = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ user: this.state })
//     };

//     fetch(LOGIN_URL, reqObj)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         localStorage.setItem("user_id", data.user.id);
//         localStorage.setItem("jwt", data.token);

//         this.props.onChangeUser(data.user);
//         // debugger;
//         if (data.category.category_type !== "Patient") {
//           this.props.history.push("/doctorprofile");
//         } else {
//           this.props.history.push("/profile");
//         }
//         // /home
//       });
//   };

//   handleChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   render() {
//     console.log(this.state);
//     console.log(this.props);
//     return (
//       <div className="App">
//         <ReactBootStrap.Form onSubmit={this.handleSubmit}>
//           <ReactBootStrap.Form.Group controlId="formBasicEmail">
//             <ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label>
//             <ReactBootStrap.Form.Control
//               name="email"
//               type="text"
//               placeholder="Enter email"
//               value={this.state.email}
//               onChange={this.handleChange}
//             />
//             <ReactBootStrap.Form.Text className="text-muted">
//               We'll never share your email with anyone else.
//             </ReactBootStrap.Form.Text>
//           </ReactBootStrap.Form.Group>

//           <ReactBootStrap.Form.Group controlId="formBasicPassword">
//             <ReactBootStrap.Form.Label>Password</ReactBootStrap.Form.Label>
//             <ReactBootStrap.Form.Control
//               name="password"
//               type="password"
//               placeholder="Password"
//               value={this.state.password}
//               onChange={this.handleChange}
//             />
//           </ReactBootStrap.Form.Group>
//           <ReactBootStrap.Form.Group controlId="formBasicCheckbox">
//             <ReactBootStrap.Form.Check type="checkbox" label="Check me out" />
//           </ReactBootStrap.Form.Group>
//           <ReactBootStrap.Button variant="primary" type="submit">
//             Submit
//           </ReactBootStrap.Button>
//         </ReactBootStrap.Form>
//       </div>
//     );
//   }
// }

// export default withRouter(Login);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="form">
        <form action="#" className="login-form">
          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="password" placeholder="Password" />
          <button type="submit" className="btn">
            Login
          </button>
          <p className="message">
            Already registered?<a href="#"> Sign in</a>
          </p>
        </form>
        <form action="#" className="register-form">
          <input type="text" name="email" placeholder="Email"></input>
          <input type="text" name="password" placeholder="Password"></input>
          <button type="submit" className="btn">
            Submit
          </button>
          <p className="message">
            New User? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
    // <div className="Login">
    //   <Form onSubmit={handleSubmit}>
    //     <Form.Group size="lg" controlId="email">
    //       <Form.Label>Email</Form.Label>
    //       <Form.Control
    //         autoFocus
    //         type="email"
    //         value={email}
    //         onChange={e => setEmail(e.target.value)}
    //       />
    //     </Form.Group>
    //     <Form.Group size="lg" controlId="password">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control
    //         type="password"
    //         value={password}
    //         onChange={e => setPassword(e.target.value)}
    //       />
    //     </Form.Group>
    //     <Button block size="lg" type="submit" disabled={!validateForm()}>
    //       Login
    //     </Button>
    //   </Form>
    // </div>
  );
}
