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
          // console.log("data stuff", data.data);
          if (data.data.duplicateUser) {
            // Replace with Modal
            alert(
              "Sorry, that email address is already registered with an account. Please login or use a new email address."
            );
          } else if (data.data.success) {
            console.log("yay!");
            // this.props.authenticate();
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
                <button className="registerSubmitBtn">Submit</button>
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
