import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import logo from "../../logo.svg";

function Navigation() {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#home" className="ml-5">
        <img src={logo} alt="logo" style={{ width: "35px" }}></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto"></Nav>
        <Nav>
          <Button className="pull-right" variant="light">
            Register
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
