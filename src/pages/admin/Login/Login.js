import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Navigation from "../../../components/admin/Navbar/Navbar";
import "./Login.scss";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const countErrors = (errors) => {
  let count = 0;
  Object.values(errors).forEach((val) => val.length > 0 && (count = count + 1));
  return count;
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirectToReferrer: false,
      errorCount: null,
      errors: {
        email: "",
        password: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
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

  // handleEmailChange = (event) => {
  //   this.setState({
  //     email: event.target.value,
  //   });
  // };

  // handlePasswordChange = (event) => {
  //   this.setState({
  //     password: event.target.value,
  //   });
  // };

  loginUser = (submitObject) => {
    axios
      .post("/user/login", submitObject)
      .then(
        function (data) {
          // console.log(data.data);
          if (data.data.success) {
            this.props.authenticate();
            localStorage.setItem("authenticated", this.props.authenticated);
            localStorage.setItem("user", data.data.user._id);
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

    this.setState({ errorCount: countErrors(this.state.errors) });
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
        <Navigation />
        <div className="wrapper">
          <div className="form-wrapper">
            <h2>Login</h2>
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
                {errors.email.length > 0 && (
                  <span className="error">{errors.email}</span>
                )}
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
              <div className="submit">
                <button>Submit</button>
              </div>
              <p className="register text-right">
                <Link to={"/admin/register"}> Register </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
