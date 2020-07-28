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
    };

    handleChange(event) {
        const value = event.target.value
        const name = event.target.name

        this.setState({
            [name]: value
        })

    };


    //  async function
    async newPost(form) {
        console.log(form)
        await axios.post('/blog/newpost', form).then(res => {
            console.log(res)

        }
        ).catch(err => {
            console.log(err)
        })
    };

    handleSubmit(event) {
        event.preventDefault();
        let blogPost = {
            title: this.state.title,
            blog: this.state.blog
        }

        this.newPost(blogPost)
    };

    // clear form method
    clearForm = () => {
        this.setState({
            title: '',
            blog: ''
        })
    };

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
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} className="form-control" placeholder="Blog Title Here" />
                    </div>

                    {/* boostrap form Content */}
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Blog Content</label>
                        <textarea name="blog" value={this.state.blog} onChange={this.handleChange} type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Blog Content Here"></textarea>
                    </div>

                    {/* boostrap form Send It! button */}
                    <button className="btn btn-primary" type="submit">Submit Post</button>

                </form>
            </div >

        )
    }
}

export default NewBlogPost