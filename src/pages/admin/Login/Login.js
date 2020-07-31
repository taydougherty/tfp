import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Navigation from "../../../components/admin/Navbar/Navbar";
// import "./Login.scss";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirectToReferrer: false,
      user: {}
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
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
      .post("/user/login", submitObject)
      .then(
        function (data) {
          console.log(data.data);
          if (data.data.success) {
            this.props.authenticate();
            this.setState({
              redirectToReferrer: true,
              user: data.data
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
    const { from } = this.props.location.state || {
      from: { pathname: "/admin/blog" },
    };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <Navigation />
        <div className="container">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h3>Sign In</h3>

            <div className="form-group">
              <label htmlFor="emailInput">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={this.handleEmailChange}
                value={this.state.email}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control is-invalid"
                placeholder="Enter password"
                onChange={this.handlePasswordChange}
                value={this.state.password}
              />
              <div className="invalid-feedback">
                Please enter a valid password.
            </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Submit
          </button>
            <p className="register text-right">
              <Link to={"/admin/register"}> Register </Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
