import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Navigation from "../../../components/admin/Navbar/Navbar";
import "./Register.scss";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const countErrors = (errors) => {
  let count = 0;
  Object.values(errors).forEach((val) => val.length > 0 && (count = count + 1));
  return count;
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      email: "",
      emailRepeat: "",
      password: "",
      passwordRepeat: "",
      errorCount: null,
      errors: {
        email: "",
        password: "",
      },
    };

    this.handlePasswordValidation = this.handlePasswordValidation.bind(this);
    this.handlePasswordRepeat = this.handlePasswordRepeat.bind(this);
    this.handleEmailValidation = this.handleEmailValidation.bind(this);
    this.handleEmailRepeat = this.handleEmailRepeat.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleEmailValidation = (event) => {
    const emailVal = event.target.value;

    this.setState({
      email: emailVal,
    });

  };

  handleEmailRepeat = (event) => {
    const emailVal = event.target.value;

    this.setState({
      emailRepeat: emailVal,
    });

  };

  handlePasswordValidation = (event) => {
    // password is passed in
    const passwordVal = event.target.value;

    this.setState({
      password: passwordVal,
    });

  };

  handlePasswordRepeat = (event) => {

    const passwordRepeat = event.target.value;

    this.setState({
      passwordRepeat: passwordRepeat,
    });

  };

  registerUser = (userData) => {
    axios
      .post("/user/register", {
        email: userData.email,
        password: userData.password,
      })
      .then(
        function (data) {

          if (data.data.duplicateUser) {

            alert(
              "Sorry, that email address is already registered with an account. Please login or use a new email address."
            );
          } else if (data.data.success) {
            this.setState({
              redirectToReferrer: true,
            });
          }
        }.bind(this)
      )
      .catch(function (err) {
        console.log(err);
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const email = this.state.email;
    const password = this.state.password;

    let userData = {
      email: email,
      password: password,
    };

    if (!userData.email || !userData.password) {
      return alert("Please don't leave fields blank");
    }
    if (userData.email !== this.state.emailRepeat) {
      return alert("Email Confirmation Does Not Match")
    }
    // If we have an email and password, run the signUpUser function
    if (userData.password !== this.state.passwordRepeat) {
      return alert("Password Confirmation Does Not Match")
    }
    else {
      this.registerUser(userData);

      this.setState({ errorCount: countErrors(this.state.errors) });

      this.setState({
        value: "",
        email: "",
        emailRepeat: "",
        password: "",
        passwordRepeat: "",
        redirectToReferrer: false,
      });
    }
  };

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/admin/blog" },
    };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    const { errors } = this.state;

    return (
      <div>
        <Navigation
          authenticated={this.props.authenticated}
          authenticate={this.props.authenticate}
          deAuthenticate={this.props.deAuthenticate}
          logout={this.props.logout}
        />
        <div className="wrapper registerWrapper">
          <div className="form-wrapper">
            <h2>Register</h2>
            <form className="registerForm" onSubmit={this.handleSubmit.bind(this)} noValidate>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  noValidate
                />
                {errors.email.length > 0 && (
                  <span className="error">{errors.email}</span>
                )}
              </div>
              <div className="email">
                <label htmlFor="email">Confirm Email</label>
                <input
                  type="email"
                  name="email"
                  id="repeat-email-input"
                  value={this.state.emailRepeat}
                  onChange={this.handleEmailRepeat}
                  noValidate
                />
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  noValidate
                />
                {errors.password.length > 0 && (
                  <span className="error">{errors.password}</span>
                )}
              </div>
              <div className="password">
                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  name="password"
                  id="repeat-password-input"
                  value={this.state.passwordRepeat}
                  onChange={this.handlePasswordRepeat}
                  noValidate
                />
              </div>
              <div className="info">
                <small>Password must be eight characters in length.</small>
              </div>
              <div className="submit">
                <button className="registerSubmitBtn">SUBMIT</button>
              </div>
              <p>
                <Link to={"/admin"}> Login </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
