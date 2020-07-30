import React from "react";
import logo from "../../logo.svg";
import "./Navbar.scss";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <img src={logo} alt="logo" style={{ width: "35px" }}></img>
    </nav>
  );
}

export default Navigation;
