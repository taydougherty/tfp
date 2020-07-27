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

    //  async function
    newPost(form) {
        axios.post('/blog/newpost', form)
            .then(resp => {
                console.log(resp.data)
            }
            )
    }

    // handleSubmit(event) {
    //     event.preventDefault();

    //     const blog = {
    //         title = this.state.title,
    //         blog = this.state.blog
    //     }

    //     this.newPost(blog)
    // }

    // clear form method

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