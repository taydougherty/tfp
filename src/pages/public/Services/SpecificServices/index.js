import "./style.css";
import React, { Component } from "react";
import NavBar from "../../../../components/public/NavBar/NavBar";
import Footer from "../../../../components/public/footer/footer"
import image from "../../../../assets/images/sampleservice.png";

class SampleService extends Component {
  state = {};

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div style={{ height: 1000 + "px" }}>
          <div className="row h-20 SampleService text-center">
            <div className="col-12">
              <div className="jumbotron bg-white">
                <h1>Sample Service</h1>
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
                <div className="card-body d-flex flex-column list">
                  <h5 className="card-title">What We Do</h5>
                  <ul>
                    <li>XXXX</li>
                    <li>XXXX</li>
                    <li>XXXX</li>
                    <li>XXXX</li>
                    <li>XXXX</li>
                    <li>XXXX</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card border-light">
                <div className="card-body d-flex flex-column Image">
                  <img
                    src={image}
                    className="card-img-top "
                    style={{ height: 825 + "px", width: 1000 + "px" }}
                    alt="..."
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default SampleService;
