import image from "../../../assets/images/rockclimber.png";
import NavBar from "../../../components/public/NavBar";
import Footer from '../../../components/admin/Footer/Footer';
import "./Home.css";
import React, { Component } from "react";

class Services extends Component {
  state = {};

  render() {
    return (
      <div>
        <NavBar />
        <div className="Home">
          <div className="col-12 rock">
            <div className="card relative">
              <img src={image} className="card-img-top" alt="..."></img>
              <h1 className="overlay">Text Overlay Goes Here</h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Services;
