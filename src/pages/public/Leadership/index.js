import React, { Component } from "react";
import NavBar from "../../../components/public/NavBar";
import Footer from '../../../components/admin/Footer/Footer'
import './style.scss'

class Leadership extends Component {

    state = {

    };

    render() {
        return (
            <div>
                <NavBar />
                <div>
                    <div className="row">
                        <div className="col-12">
                            <div className="jumbotron bg-white">
                                <h1>Leadership</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row h-75 cards">
                        <div className="col-6">
                            <div class="card border-light">
                                <div class="card-body d-flex flex-column">
                                    <img src="https://picsum.photos/seed/picsum/200/300" alt="placeholder"></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="card border-light">
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Sheila Mojtehedi, CEO</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div class="card-body d-flex flex-column">
                                    <h5>Notable Wins</h5>
                                    <ul class="winList">
                                        <li>Winner</li>
                                        <li>Winner</li>
                                        <li>Chicken Dinner</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        )
    }
}

export default Leadership;