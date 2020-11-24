import React, { Component } from "react";
import NavBar from "../../../components/public/NavBar/NavBar";
import "./style.scss";
import Sheila from "../../../assets/images/SheilaMojtehedi.png";
import HeaderLine from "../../../components/public/headerLine/index";

class Leadership extends Component {
  state = {};

  render() {
    return (
      <div className="leadershipPage">
        <NavBar />
        <HeaderLine />

        <div className="container leadershipContent">
          <div className="row d-flex justify-content-center cards">
            <div className="col-6 cardContainer">
              <div class="card border-white imageCard leadershipCard mx-auto">
                <div class="card-body d-flex flex-column leadershipCardBody leadershipCardImage">
                  <img
                    src={Sheila}
                    alt="Sheila Mojtehedi"
                    className="photo img-thumbnail"
                  ></img>
                </div>
              </div>
            </div>

            <div className="col-6 cardContainer">
              <div className="card border-white leadershipCard">
                <div className="row card-body d-flex flex-column profileCard leadershipCardBody leadershipCardInfo">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>

            <div className="cardContainer">
              <div className=" row card-body d-flex flex-column leadershipCardBody">
                <h5 className="notable-wins">Notable Wins</h5>
                <ul className="winList">
                  <li>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </li>
                  <li>
                    o eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti
                    quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum
                    fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore, cum soluta nobis est
                    eligendi optio cumque nihil impedit quo minus id quod maxime
                    placeat{" "}
                  </li>
                  <li>
                    {" "}
                    fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Leadership;
