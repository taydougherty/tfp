import homeImage from "../../../assets/images/homePageClimber";
import NavBar from "../../../components/public/NavBar/NavBar";
import Footer from "../../../components/admin/Footer/Footer";
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
                <h1 className="overlay">
                  Solutions to problems are not always obvious
                </h1>
                <h5 className="overlay">Sub tagline here</h5>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Services;
