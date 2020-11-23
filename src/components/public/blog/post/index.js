import React from "react";
// import "./style.css"
import moment from 'moment';
import { Link } from "react-router-dom";
import CardActionArea from '@material-ui/core/CardActionArea';
import { blogImages } from "../../../../assets/blogImages/blogImages"

// import image from "../../../../assets/images/sampleservice.png";




let images = blogImages()

function Post(props) {
    let blogImage = '';
    for (let i = 0; i < images.length; i++) {
        if (images[i].title === props.image) {
            blogImage = images[i].image
        }
    }

    return (

        <div className="col-4 mb-5">

            <CardActionArea>
                <div className="card " style={{ height: 450 + "px" }}>
                    <div className="card-body d-flex flex-column">
                        <img src={blogImage}
                            className="card-img-top " style={{ height: 300 + "px" }} href="/home" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title text-center ">{props.title}</h5>
                            <p className="card-text crop-text-2 text-center">
                                {moment(props.date).format('MMM DD, YYYY')}
                            </p>
                            <Link to={props.link} className="stretched-link" alt="..."></Link>
                        </div>
                    </div>
                </div>
            </CardActionArea>

        </div>

    );
}

export default Post;