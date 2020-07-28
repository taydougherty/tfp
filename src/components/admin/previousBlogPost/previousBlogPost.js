import React, { Component } from 'react';
import axios from 'axios';

require('./previousBlogPost.css')

class PreviousBlogPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    // handleDelete(event) { }

    // populate history table
    getHistory() {
        axios.get('/blog/posts')
            .then(resp => {
                console.log(resp)
            })
            .catch(err => {
                console.log(err)
            })
        // maybe implement a looping list component?
    }

    render() {
        return (
            <div>
                <h2>Previous Blog Post</h2>
                {/* box - centered */}
                {/* PREVIOUS BLOG POST */}
                {/* boostrap TABLE HEADERS - Date, Title, Content */}
                {/* For Loop Row Data*/}
                {/* DELETE button*/}

            </div>
        )
    }
}

export default PreviousBlogPost;