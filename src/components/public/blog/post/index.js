import React from "react";
// import "./style.css"
import { Link } from "react-router-dom";
import image from "../../../../assets/images/sampleservice.png";

function Post(props) {
    return (

        <div className="col-4">
            <div className="card " style={{ height: 600 + "px" }}>
                <div className="card-body d-flex flex-column">
                    <img src={image}
                        className="card-img-top " style={{ height: 300 + "px" }} href="/home" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title text-center ">{props.title}</h5>
                        <p className="card-text crop-text-2">
                            {props.body}
                        </p>
                        <Link to={props.link} className="stretched-link" alt="..."></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;