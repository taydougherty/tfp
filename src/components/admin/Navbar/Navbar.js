import React, { Component } from "react";
import axios from 'axios';
import logo from "../../../assets/images/logo.svg";
import "./Navbar.scss";

class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
    };

    this.logout = this.logout.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.deAuthenticate = this.deAuthenticate.bind(this);
  }

  authenticate() {
    this.setState({
      authenticated: true,
    });
  }

  deAuthenticate() {
    this.setState({
      authenticated: false,
    });
  }
  // Log Out Method

  logout() {
    axios
      .get("/user/logout")
      .then(
        function (data) {
          this.deAuthenticate();
          localStorage.removeItem("authenticated");
          window.location.reload();
        }.bind(this)
      )
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <img src={logo} alt="logo" style={{ width: "35px" }}></img>
          <button className="btn-primary " type="submit" onClick={this.logout}>Log Out </button>
        </nav>


      </div >
    );
  }
}

export default Navigation;
