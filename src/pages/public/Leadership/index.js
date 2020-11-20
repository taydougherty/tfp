import React, { Component } from "react";
import NavBar from "../../../components/public/NavBar/NavBar";
import './style.scss'

class Leadership extends Component {

    state = {

    };

    render() {
        return (
            <div className="leadershipPage">
                <NavBar />
                <div className="container leadershipContent">
                    <div className="row">
                        <div className="col-12">
                            <div className="bg-white leadershipHeader">
                                <h1>Leadership</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center cards">
                        <div className="col-6 cardContainer">
                            <div class="card border-white imageCard leadershipCard">
                                <div class="card-body d-flex flex-column leadershipCardBody leadershipCardImage">
                                    <img src="https://picsum.photos/seed/picsum/200/300" alt="placeholder" className="photo"></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 cardContainer">
                            <div class="card border-white leadershipCard">
                                <div class="row card-body d-flex flex-column profileCard leadershipCardBody leadershipCardInfo">
                                    <h5 class="card-title">Sheila Mojtehedi, CEO</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div class=" row card-body d-flex flex-column leadershipCardBody">
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
                {/* <Footer /> */}
            </div >
        )
    }
}

export default Leadership;