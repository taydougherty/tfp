import "./Services.css";
import React, { Component } from "react";
import NavBar from "../../components/public/NavBar";

class Services extends Component {
  state = {};

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div style={{ height: 1000 + "px" }}>
          <div className="row h-25 Services">
            <div className="col-12">
              <div className="jumbotron bg-white">
                <h1>Our Services</h1>
                <p style={{ fontSize: 25 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>
          </div>
          <div className="row h-75 cards">
            <div className="col-6">
              <div className="card border-light" style={{ height: 400 + "px" }}>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Client Services</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a
                    type="button"
                    className="btn btn-outline-info mt-auto"
                    href="sampleservice"
                    style={{
                      height: 75 + "px",
                      width: 150 + "px",
                      lineHeight: 62.5 + "px",
                    }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card border-light" style={{ height: 400 + "px" }}>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Attorney Partnerships</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a
                    type="button"
                    className="btn btn-outline-info mt-auto"
                    href="sampleservice"
                    style={{
                      height: 75 + "px",
                      width: 150 + "px",
                      lineHeight: 62.5 + "px",
                    }}
                  >
                    {" "}
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
