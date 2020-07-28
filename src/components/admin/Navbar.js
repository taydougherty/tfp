import React from "react";
import logo from "../../logo.svg";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="navbar-brand">
        <img src={logo} alt="logo" style={{ width: "35px" }}></img>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <button className="btn btn-light my-2 my-sm-0 ml-auto" type="submit">
          Register
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
