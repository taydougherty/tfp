
import './[SampleService.css]';
import React, { Component } from "react";
import NavBar from '../components/NavBar'
import image from '../sampleservice.png'

class SampleService extends Component {

    state = {

    };

    render() {
        return (
            <div>
                <NavBar></NavBar>
                <div style={{ height: 1000 + "px" }}>
                    <div className="row h-25 SampleService text-center">
                        <div className="col-12">
                            <div className="jumbotron bg-white">
                                <h1>Sample Service</h1>
                                <p style={{ fontSize: 35 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore</p>
                            </div>
                        </div>
                    </div>
                    <div className="row h-75 cards">
                        <div className="col-6">
                            <div class="card border-light" style={{ height: 400 + "px" }}>
                                <div class="card-body d-flex flex-column list">
                                    <h5 class="card-title">What We Do</h5>
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
                            <div class="card border-light">
                                <div class="card-body d-flex flex-column Image">
                                    <img src={image} className="card-img-top " style={{ height: 825 + "px", width: 1000 + "px" }} alt="..."></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default SampleService;
