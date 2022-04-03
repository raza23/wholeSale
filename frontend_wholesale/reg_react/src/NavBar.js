import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link, NavLink, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    let logout = e => {
      e.preventDefault();
      localStorage.removeItem("jwt");
      debugger;
      this.props.onChangeUser("null");
      window.location.reload();
      // this.props.history.push("/login");
      // history.push("login");
    };
    console.log(this.props);
    return (
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <ReactBootStrap.Navbar.Brand href="#home">
          <NavLink exact to="/login">
            PillTabs
          </NavLink>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="#pricing">
              Pricing
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown
              title="Dropdown"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                Action
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                Another action
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                Something
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4">
                Separated link
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link href="/survey">
              Survey
            </ReactBootStrap.Nav.Link>
            {this.props.user !== null ? (
              <NavLink exact to="/login" onClick={logout}>
                <ReactBootStrap.Nav.Link>Logout</ReactBootStrap.Nav.Link>
              </NavLink>
            ) : (
              <NavLink exact to="/login">
                <ReactBootStrap.Nav.Link href="#features">
                  Login
                </ReactBootStrap.Nav.Link>
              </NavLink>
            )}
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    );
  }
}

export default withRouter(Navbar);
