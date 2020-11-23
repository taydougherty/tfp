import React from "react";
// import "./style.css"
import { Link } from "react-router-dom";
// import image from "../../../../assets/images/sampleservice.png";
import rockClimber from "../../../../assets/blogImages/rockclimber.png"
import shielaSportClimb from "../../../../assets/blogImages/sheila_Sport_Climb.png"
import blackTriStars from "../../../../assets/blogImages/blackTriStars.png"
import Kyshatriya from "../../../../assets/blogImages/Kyshatriya.png"

// let images = [rockClimber, shielaSportClimb, blackTriStars, Kyshatriya]
let images = [
    {
        title: "rock climber",
        image: rockClimber
    },
    {
        title: "Shiela Leading",
        image: shielaSportClimb
    },
    {
        title: "Black Tri Stars",
        image: blackTriStars
    },
    {
        title: "Kyshatriya",
        image: Kyshatriya
    }
]

function Post(props) {
    let blogImage = '';
    for (let i = 0; i < images.length; i++) {
        if (images[i].title === props.image) {
            blogImage = images[i].image
        }
    }

    return (

        <div className="col-4">
            <div className="card " style={{ height: 600 + "px" }}>
                <div className="card-body d-flex flex-column">
                    <img src={blogImage}
                        className="card-img-top " style={{ height: 300 + "px" }} href="/home" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title text-center ">{props.title}</h5>
                        <p className="card-text crop-text-2 mx-auto">
                            {props.date}
                        </p>
                        <Link to={props.link} className="stretched-link" alt="..."></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;