import homeImage from "../../../assets/images/newImage.jpg";
import NavBar from "../../../components/public/NavBar/NavBar";
<<<<<<< HEAD
=======
import Footer from "../../../components/admin/Footer/Footer";
>>>>>>> master
import "./Home.scss";
import React, { Component } from "react";

class Services extends Component {
  state = {};

  render() {
    return (
      <div className="wrapper homeWrapper">
        <NavBar />
        <div className="homeContent">
          <div className="Home">
            <div className="col-12 rock">
              <div className="card relative">
                <img src={homeImage} className="card-img-top" alt="..."></img>
                <h1 className="overlayHeader">
                  Solutions to problems are not always obvious.
                </h1>
                <h5 className="overlayTagline">Sub Tagline.</h5>
                <a type="button" className="learnMore" href="services">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
=======
        <Footer />
>>>>>>> master
      </div>
    );
  }
}

export default Services;
