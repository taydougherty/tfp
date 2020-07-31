
// import './Post.css';
import React, { Component } from "react";
import axios from 'axios';
import moment from 'moment'

class Post extends Component {

    state = {

    };

    render() {
        const {
            postTitle,
            postBody
        } = this.props;
        return (
            <div>
                <div className="col-3">
                    <div class="card " style={{ height: 400 + "px" }}>
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">{postTitle}</h5>
                            <p class="card-text">{postBody}</p>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Post;
