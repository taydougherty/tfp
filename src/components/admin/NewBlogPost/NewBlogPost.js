import React, { Component } from 'react';
import axios from 'axios';
import rockClimber from "../../../assets/images/rockclimber.png";

import { blogImages } from "../../../assets/blogImages/blogImages"

require('./newBlogPost.scss')

class NewBlogPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            author: '',
            images: blogImages(),
            blogImage: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setImage = this.setImage.bind(this)
    };

    componentDidMount() {
        const userId = localStorage.getItem("user")
        this.setState({ author: userId })
    }

    handleChange(event) {
        const value = event.target.value
        const name = event.target.name

        this.setState({
            [name]: value
        })

    };


    //  make into async function
    async newPost(form) {
        await axios.post("/blog/newpost", form)
            .then(res => {
                console.log(res)
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
            image: this.state.blogImage[0].title,
            author: this.state.author
        }
        console.log(blogPost)
        this.newPost(blogPost)
        this.clearForm()
    };

    setImage(event) {

        let selectedImage = this.state.images.filter(image => {
            if (image.title === event.target.value) {
                return image.image
            }
        })

        console.log(selectedImage[0].image)
        this.setState({ blogImage: selectedImage })
    }

    clearForm = () => {
        this.setState({
            title: '',
            body: '',
            blogImage: null
        })
    };

    render() {
        const { images, blogImage } = this.state

        let previewPic;

        if (blogImage) {
            previewPic = <img src={this.state.blogImage[0].image} className="card-img-top" alt="blog"></img>
        } else {
            previewPic = <img src={rockClimber} className="card-img-top" alt="blog"></img>
        }

        return (
            <div>
                <h2>New Blog Post</h2>

                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1" >Blog Title</label>
                        <input name="title" value={this.state.name} onChange={this.handleChange} type="text" className="form-control" placeholder="Blog Title Here" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Blog Content</label>
                        <textarea name="body" value={this.state.body} onChange={this.handleChange} type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Blog Content Here"></textarea>
                    </div>

                    <label htmlFor="exampleFormControlTextarea1">Blog Image</label>
                    <div className="row">

                        <div className="col-4">
                            <select className="dropdown" onChange={this.setImage} >
                                <option>Pick a Blog Image</option>
                                {images.map((picture, i) =>
                                    <option key={i} value={picture.title} className="dropdown-item"> {picture.title}</option>
                                )}
                            </select>
                        </div>

                        <div className="col-8">
                            {previewPic}
                        </div>

                    </div>
                    <br />
                    <button className="btn btn-primary" type="submit">Submit Post</button>

                </form>
            </div >

        )
    }
}

export default NewBlogPost