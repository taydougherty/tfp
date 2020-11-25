import "./style.scss";
import React, { Component } from "react";
import NavBar from "../../../components/public/NavBar/NavBar";
import HeaderLine from "../../../components/public/headerLine/index";
import Scale from "../../../assets/images/scaleOfJustice.png";
import Gavel from "../../../assets/images/gavelOfJustice.png";

class Services extends Component {
  state = {};

  render() {
    return (
      <div>
        <NavBar />
        <HeaderLine />
        <div className="row h-75 servicesCards">
          <div className="col-2"></div>
          <div className="col-3">
            <div className="card border-light servicesCard text-center">
              <div className="card-body d-flex flex-column">
                <img src={Scale} className="rounded mx-auto"></img>
                <h5 className="card-title">Clients</h5>
                <p className="card-text tagline">
                  This is some text inside of a div block.
                </p>
                <a type="button" className="learnMoreBtn" href="client">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-3">
            <div className="card border-light servicesCard text-center">
              <div className="card-body d-flex flex-column">
                <img src={Gavel} className="rounded mx-auto"></img>
                <h5 className="card-title">Attorneys</h5>
                <p className="card-text tagline">
                  This is some text inside of a div block.
                </p>
                <a type="button" className="learnMoreBtn" href="attorney">
                  {" "}
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
