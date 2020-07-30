import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/admin/Login/Login";
import Register from "./pages/admin/Register/Register";
import Footer from "./components/admin/Footer";
import Home from "./pages/public/Home";
import Services from "./pages/public/Services";
import SampleService from "./pages/public/SampleService";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/admin" component={Login} />
              <Route path="/admin/login" component={Login} />
              <Route path="/admin/register" component={Register} />
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/sampleservice" component={SampleService} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
