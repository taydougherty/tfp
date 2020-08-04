import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Navigation from "../../../components/admin/Navbar/Navbar";
import "./Register.scss";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      email: "",
      emailRepeat: "",
      password: "",
      passwordRepeat: "",
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

  handleEmailValidation = (event) => {
    const emailVal = event.target.value;
    // const emailForm = event.target.emailForm;
    // const emailFeedback = event.target.emailFeedback;
    // const emailAdditionalFeedback = event.target.emailAdditionalFeedback;
    // const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    this.setState({
      email: emailVal,
    });

    // if (!emailRegEx.test(emailVal)) {
    //   emailForm.classList.remove("has-success");

    //   emailForm.classList.add("has-error");
    //   emailFeedback.textContent = "Invalid Email";
    //   emailAdditionalFeedback.textContent = "Ex: someone@example.com";
    // } else {
    //   emailForm.classList.remove("has-error");

    //   emailForm.classList.add("has-success");
    //   emailFeedback.textContent = "Valid Email!";
    //   emailAdditionalFeedback.textContent = "";
    // }
  };

  handleEmailRepeat = (event) => {
    const emailVal = event.target.value;
    // const emailForm = this.refs.emailRepeatForm;
    // const emailFeedback = this.refs.emailRepeatFeedback;
    // const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    this.setState({
      emailRepeat: emailVal,
    });

    //   if (!emailRegEx.test(emailVal)) {
    //     emailForm.classList.remove("has-success");

    //     emailForm.classList.add("has-error");
    //     emailFeedback.textContent = "Emails Don't Match";
    //   } else {
    //     emailForm.classList.remove("has-error");

    //     emailForm.classList.add("has-success");
    //     emailFeedback.textContent = "Emails Match!";
    //   }
  };

  handlePasswordValidation = (event) => {
    // password is passed in
    const passwordVal = event.target.value;
    // const passwordForm = this.refs.passwordForm;
    // const passwordFeedback = this.refs.passwordFeedback;

    this.setState({
      password: passwordVal,
    });

    // const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    // if (!passwordRegEx.test(passwordVal)) {
    //   passwordForm.classList.remove("has-success");
    //   passwordForm.classList.add("has-error");
    //   passwordFeedback.textContent =
    //     "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and must be at least 8 characters long.";
    // } else {
    //   passwordForm.classList.remove("has-error");

    //   passwordForm.classList.add("has-success");
    //   passwordFeedback.textContent = "Password set correctly!";
    // }
  };

  handlePasswordRepeat = (event) => {
    // const passwordVal = this.state.password;
    const passwordRepeat = event.target.value;
    // const repeatPasswordForm = this.refs.repeatPasswordForm;
    // const repeatPasswordFeedback = this.refs.repeatPasswordFeedback;

    this.setState({
      passwordRepeat: passwordRepeat,
    });

    // if (passwordVal !== passwordRepeat) {
    //   repeatPasswordForm.classList.remove("has-success");

    //   repeatPasswordForm.classList.add("has-error");
    //   repeatPasswordFeedback.textContent = "Passwords Don't Match";
    // } else {
    //   repeatPasswordForm.classList.remove("has-error");

    //   repeatPasswordForm.classList.add("has-success");
    //   repeatPasswordFeedback.textContent = "Passwords Match!";
    // }
  };

  registerUser = (userData) => {
    axios
      .post("/user/register", {
        email: userData.email,
        password: userData.password,
      })
      .then(
        function (data) {
          console.log("data stuff", data.data);
          if (data.duplicateUser) {
            // Replace with Modal
            alert(
              "Sorry, that email address is already registered with an account. Please login or use a new email address."
            );
          } else if (data.data.success) {
            console.log("yay!");
            this.props.authenticate();
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

    // If we have an email and password, run the signUpUser function
    this.registerUser(userData);

    this.setState({
      value: "",
      email: "",
      emailRepeat: "",
      password: "",
      passwordRepeat: "",
      redirectToReferrer: false,
    });
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
        <Navigation
          authenticated={this.props.authenticated}
          authenticate={this.props.authenticate}
          deAuthenticate={this.props.deAuthenticate}
          logout={this.props.logout}
        />
        <div className="wrapper">
          <div className="form-wrapper">
            <h2>Register</h2>
            <form onSubmit={this.handleSubmit.bind(this)} noValidate>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  noValidate
                />
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
                <button>Register</button>
              </div>
              <p>
                <Link to={"/admin"}> Login </Link>
              </p>
            </form>
          </div>
        </div>
        {/* <div id="registration-container" className="container-fluid">
          <section className="container">
            <div className="container-page">
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="col-md-6">
                  <h3 className="dark-grey">Registration</h3>

                  <div id="email-form" className="form-group col-lg-12">
                    <label>Email Address</label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      id="email-input"
                      value={this.state.email}
                      onChange={this.handleChange}
                      noValidate
                    />

                    <p id="email-feedback"></p>
                    <small
                      id="email-additional-feedback"
                      className="form-text text-muted"
                    ></small>
                  </div>

                  <div id="email-repeat-form" className="form-group col-lg-12">
                    <label>Confirm Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="repeat-email-input"
                      value={this.state.emailRepeat}
                      onChange={this.handleEmailRepeat}
                    />
                    <small id="email-repeat-feedback"></small>
                  </div>

                  <div id="password-form" className="form-group col-lg-12">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password-input"
                      value={this.state.password}
                      onChange={this.handleChange}
                      noValidate
                    />
                    <small id="password-feedback"></small>
                    <div className="info">
                      <small>
                        Password must be eight characters in length.
                      </small>
                    </div>
                  </div>

                  <div
                    id="repeat-password-form"
                    className="form-group col-lg-12"
                  >
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="repeat-password-input"
                      value={this.state.passwordRepeat}
                      onChange={this.handlePasswordRepeat}
                    />
                    <small id="repeat-password-feedback"></small>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary register">
                  Register
                </button>
                <p className="register text-right">
                  <Link to={"/admin"}> Login </Link>
                </p>
              </form>
            </div>
          </section>
        </div> */}
      </div>
    );
  }
}
