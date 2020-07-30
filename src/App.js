import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/admin/Login/Login";
import Register from "./pages/admin/Register/Register";
import adminBlog from "./pages/admin/Blog/index";
import Footer from "./components/admin/Footer/Footer";
import Home from "./pages/public/Home/Home";
import Services from "./pages/public/Services/Services";
import SampleService from "./pages/public/Services/SampleService";
// import Blog from "";
import Contact from "./pages/public/Contact/ContactUs";

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
              <Route path="/admin/blog" component={adminBlog} />
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/sampleservice" component={SampleService} />
              {/* <Route exact path="/blog" component={Blog} /> */}
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
