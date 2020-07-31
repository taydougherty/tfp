import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Login from "./pages/admin/Login/Login";
import Register from "./pages/admin/Register/Register";
import adminBlog from "./pages/admin/Blog/index";
import Footer from "./components/admin/Footer/Footer";
import Home from "./pages/public/Home/Home";
import Services from "./pages/public/Services/Services";
import SampleService from "./pages/public/Services/SampleService";
// import Leadership from "";
import Blog from "./pages/public/Blog/Blog";
import Contact from "./pages/public/Contact/ContactUs";

export default class App extends Component {
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

  logout() {
    axios
      .get("/user/logout")
      .then(
        function (data) {
          this.deAuthenticate();
          window.location.reload();
        }.bind(this)
      )
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                {/* Admin Routing */}
                <Route path="/admin/register" component={Register} />
                {/* <Route exact path="/admin" component={Login} /> */}
                <Route
                  exact
                  path="/admin"
                  render={(props) => (
                    <Login
                      {...props}
                      authenticate={this.authenticate}
                      deAuthenticate={this.deAuthenticate}
                      authenticated={this.state.authenticated}
                      logout={this.logout}
                    />
                  )}
                />
                <Route
                  path="/admin/blog"
                  render={(props) => (
                    <adminBlog
                      {...props}
                      authenticate={this.authenticate}
                      deAuthenticate={this.deAuthenticate}
                      authenticated={this.state.authenticated}
                      logout={this.logout}
                    />
                  )}
                />

                {/* Client Routing */}
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/sampleservice" component={SampleService} />
                {/* <Route exact path="/leadership" component={Leadership} /> */}
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
