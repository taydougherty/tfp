
// import './Post.css';
import React, { Component } from "react";
import axios from 'axios';
import moment from 'moment'

class Post extends Component {

    state = {
        posts: this.props.posts
    };

    render() {
        const {
            postTitle,
            postBody,
            postDate,
        } = this.props;
        return (
            <div>
                <Post />
            </div >
        )
    }
}

export default Post;
