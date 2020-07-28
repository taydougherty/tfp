import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Navigation from "./Navbar";
import "./Login.scss";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirectToReferrer: false,
    };
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  loginUser = (submitObject) => {
    axios
      .post("/apis/users/login", submitObject)
      .then(
        function (data) {
          console.log(data.data);
          if (data.data.success) {
            this.props.authenticate();
            this.setState({
              redirectToReferrer: true,
            });
          } else {
            alert(data.data.message);
          }
        }.bind(this)
      )
      .catch(function (err) {
        console.log(err);
      });

    this.setState({
      email: "",
      password: "",
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const emailInput = this.state.email;
    const passwordInput = this.state.password;

    const objSubmit = {
      email: emailInput,
      password: passwordInput,
    };

    if (!objSubmit.email || !objSubmit.password) {
      return;
    }
    // If we have an email and password we run the loginUser function and clear the form
    this.loginUser(objSubmit);
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <Navigation
          authenticated={this.props.authenticated}
          authenticate={this.props.authenticate}
          deAuthenticate={this.props.deAuthenticate}
          logout={this.props.logout}
        />
        <div className="loginmodal-container">
          <h1>Log In</h1>
          <br />
          <form className="login" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email-input"
                name="email"
                placeholder="Email"
                onChange={this.handleemailChange}
                value={this.state.email}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control is-invalid"
                id="password-input"
                name="pass"
                placeholder="Password"
                onChange={this.handlePasswordChange}
                value={this.state.password}
                required
              />
              <div class="invalid-feedback">Please enter a valid password.</div>
            </div>
            <button
              type="submit"
              name="login"
              className="btn btn-primary login loginmodal-submit"
              value="Login"
            >
              Submit
            </button>
          </form>

          <div className="login-help">
            <Link to={"/register"}> Register </Link>
          </div>
        </div>
      </div>
    );
  }
}
