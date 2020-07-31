import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/public/Home';
import Services from './pages/public/Services';
import SampleService from './pages/public/SampleService';
import Blog from './pages/public/Blog';
import NavBar from './components/NavBar';
import ContactUsPage from './pages/public/ContactUs'
import App from './App.js'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>

    <NavBar />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/sampleservice" component={SampleService} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/admin" component={App} />
        <Route exact path="/contactus" component={ContactUsPage} />
      </Switch>
    </Router>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
