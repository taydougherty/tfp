import React, { Component } from 'react';
import axios from 'axios';

require('./newBlogPost.css')

class NewBlogPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            blog: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ title: event.target.title });
        this.setState({ blog: event.target.blog })
    }
    // eslint-disable-next-line
    //  async function
    newPost(form) {
        axios.post('localhost:8080/blog/newpost', form).then(post => {
            console.log(post)
        }
        ).catch(err => {
            console.log(err)
        })
        console.log("HERE")
    }

    handleSubmit(event) {
        event.preventDefault();

        const blog = {
            title: this.state.title,
            blog: this.state.blog
        }
        console.log(blog)
        this.newPost(blog)
    }

    // clear form method

    render() {
        return (
            <div>
                {/* NEW BLOG POST */}
                <h2>New Blog Post</h2>
                {/* box - centered */}
                <form onSubmit={this.handleSubmit}>
                    {/* boostrap form Title */}
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1" >Blog Title</label>
                        <input value={this.state.title} onChange={this.handleChange} className="form-control" type="text" placeholder="Blog Title Here" />
                    </div>

                    {/* boostrap form Content */}
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Blog Content</label>
                        <textarea value={this.state.blog} onChange={this.handleChange} className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Blog Content Here"></textarea>
                    </div>

                    {/* boostrap form Send It! button */}
                    <button className="btn btn-primary" type="submit">Submit Post</button>

                </form>
            </div >

        )
    }
}

export default NewBlogPost