import React, { Component } from 'react';
import axios from 'axios';

require('./newBlogPost.css')

class NewBlogPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    // componentDidMount = set state user object id

    handleChange(event) {
        const value = event.target.value
        const name = event.target.name

        this.setState({
            [name]: value
        })

    };


    //  make into async function
    newPost(form) {

        axios.post("/blog/newpost", form)
            .then(res => {
                console.log(res)
                console.log("here")
            }
            ).catch(err => {
                console.log(`Error: ${err}`)
            })
    };

    handleSubmit(event) {
        event.preventDefault();
        let blogPost = {
            title: this.state.title,
            body: this.state.body,
            author: "5f1b2bb5c5120f4b9c7efb54"
        }
        console.log(blogPost)
        this.newPost(blogPost)
        this.clearForm()
    };

    // clear form method
    clearForm = () => {
        this.setState({
            title: '',
            body: ''
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
                        <input name="title" value={this.state.title} onChange={this.handleChange} type="text" className="form-control" placeholder="Blog Title Here" />
                    </div>

                    {/* boostrap form Content */}
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Blog Content</label>
                        <textarea name="body" value={this.state.body} onChange={this.handleChange} type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Blog Content Here"></textarea>
                    </div>

                    {/* boostrap form Send It! button */}
                    <button className="btn btn-primary" type="submit">Submit Post</button>

                </form>
            </div >

        )
    }
}

export default NewBlogPost