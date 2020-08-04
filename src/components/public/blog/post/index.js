import React from "react";
// import "./style.css"
import { Link, Route } from "react-router-dom";
import image from "../../../../assets/images/sampleservice.png";
import BlogPost from "../../../../pages/public/Blog/BlogPost";

function Post(props) {
    console.log(props)
    var title = props.title
    return (

        <div className="col-4">
            <div className="card " style={{ height: 600 + "px" }}>
                <div className="card-body d-flex flex-column">
                    <img src={image}
                        className="card-img-top " style={{ height: 300 + "px" }} href="/home"></img>
                    <div className="card-body">
                        <h5 className="card-title text-center ">{props.title}</h5>
                        <p className="card-text crop-text-2">
                            {props.body}
                        </p>
                        {/* 
                        <Link to={{
                            pathname: 'blog/page/:postTitle',
                        }} params={{ postId: props.title }} className="stretched-link"></Link> */}
                        <Route path={'blog/page/:"+{ title }"'} className="stretched-link" component={BlogPost}></Route>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;