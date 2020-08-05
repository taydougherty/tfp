import React, { Component } from 'react';
import axios from 'axios';
import rockClimber from "../../../assets/blogImages/rockclimber.png";
import shielaSportClimb from "../../../assets/blogImages/sheila_Sport_Climb.png"
import blackTriStars from "../../../assets/blogImages/blackTriStars.png"
import Kyshatriya from "../../../assets/blogImages/Kyshatriya.png"
require('./newBlogPost.scss')

class NewBlogPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            author: '',
            // array of images sourced from the assets blog images folder
            images: [
                {
                    title: "rock climber",
                    image: rockClimber
                },
                {
                    title: "Shiela Leading",
                    image: shielaSportClimb
                },
                {
                    title: "Black Tri Stars",
                    image: blackTriStars
                },
                {
                    title: "Kyshatriya",
                    image: Kyshatriya
                }
            ],
            // selected blog image from UI to be references in DB & pulled into front end based on the routing
            blogImage: rockClimber
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
    newPost(form) {
        axios.post("/blog/newpost", form)
            .then(res => {
                console.log(res)
            }
            ).catch(err => {
                console.log(`Error: ${err}`)
            })
    };

    handleSubmit(event) {
        event.preventDefault();
        // include image into this state
        // this.selectImage()
        let blogPost = {
            title: this.state.title,
            body: this.state.body,
            author: this.state.author
        }
        console.log(blogPost)
        this.newPost(blogPost)
        this.clearForm()
    };

    setImage(event) {
        // selects image from the drpdown list to setState of blogImage 
        let selectedImage = this.state.images.filter(image => {
            if (image.title === event.target.value) {
                return image.image
            }
        })

        console.log(selectedImage[0].image)
        this.setState({ blogImage: selectedImage })
    }

    // clear form method
    clearForm = () => {
        this.setState({
            title: '',
            body: '',
            blogImage: null
        })
    };

    // componentDidUpdate(prevState) {
    //     if (prevState.posts !== this.state.posts) {
    //         this.getHistory()
    //         this.selectImage()
    //     }
    // }

    render() {
        const { images } = this.state
        return (
            <div>
                {/* NEW BLOG POST */}
                <h2>New Blog Post</h2>
                {/* box - centered */}
                <form onSubmit={this.handleSubmit}>
                    {/* boostrap form Title */}
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1" >Blog Title</label>
                        <input name="title" value={this.state.name} onChange={this.handleChange} type="text" className="form-control" placeholder="Blog Title Here" />
                    </div>

                    {/* boostrap form Content */}
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Blog Content</label>
                        <textarea name="body" value={this.state.body} onChange={this.handleChange} type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Blog Content Here"></textarea>
                    </div>
                    <label htmlFor="exampleFormControlTextarea1">Blog Image</label>
                    <div className="row">

                        <div className="col-4">
                            <select className="dropdown" onChange={this.setImage} >
                                {/* <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown button</button> */}
                                {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" > */}
                                <option>Pick a Blog Image</option>
                                {images.map((picture, i) =>
                                    <option key={i} value={picture.title} className="dropdown-item"> {picture.title}</option>
                                )}
                                {/* </div> */}
                            </select>
                        </div>

                        <div className="col-8">
                            {/* preview image based on droplist */}
                            <img src={this.state.blogImage[0].image} className="card-img-top" alt="blog"></img>
                        </div>
                    </div>
                    <br />
                    {/* boostrap form Send It! button */}
                    <button className="btn btn-primary" type="submit">Submit Post</button>

                </form>
            </div >

        )
    }
}

export default NewBlogPost