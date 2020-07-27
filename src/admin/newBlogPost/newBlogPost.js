import React, { Component } from 'react';
import axios from 'axios';

require('./newBlogPost.css')

class newBlogPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            blog: ''
        }
    }



    render() {
        return (
            <div>
                <h2>New Blog Post</h2>
                {/* box - centered */}
                {/* NEW BLOG POST */}
                {/* boostrap form Title */}
                {/* boostrap form Content */}
                {/* boostrap form Send It! button */}
            </div>

        )
    }
}

export default newBlogPost