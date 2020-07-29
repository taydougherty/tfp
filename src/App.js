import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navigation from "./components/admin/Navbar";
import Login from "./components/admin/Login";
import Register from "./components/admin/Register";
import Footer from "./components/admin/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
