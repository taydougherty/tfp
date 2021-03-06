import React, { Component } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardActions,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText
} from '@material-ui/core';


import { blogImages } from "../../../assets/blogImages/blogImages";

require('./newBlogPost.scss')

class NewBlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      author: "",
      images: blogImages(),
      blogImage: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setImage = this.setImage.bind(this);
  }

  componentDidMount() {
    const userId = localStorage.getItem("user");
    this.setState({ author: userId });
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  }

  //  make into async function
  async newPost(form) {
    await axios
      .post("/blog/newpost", form)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }

  handleSubmit(event) {
    event.preventDefault();

    let blogPost = {
      title: this.state.title,
      body: this.state.body,
      image: this.state.blogImage[0].title,
      author: this.state.author,
    };

    this.newPost(blogPost)
    this.clearForm()
  };

  setImage(event) {

    let selectedImage = this.state.images.filter(image => {
      if (image.title === event.target.value) {
        return image.image
      }
    });
    this.setState({ blogImage: selectedImage });
  };

  clearForm = () => {

    this.title.value = '';

    this.setState({
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
      previewPic = <img src={this.state.images[0].image} className="card-img-top" alt="blog"></img>
    }

    return (
      <Card className="mt-10">
        <CardContent>
          <h2>New Blog Post</h2>

          <form onSubmit={this.handleSubmit}>

            <div className="form-group mb-10">
              <TextField
                id="outlined-basic"
                label="Blog Title"
                name="title"
                value={this.state.name}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                inputRef={el => this.title = el} />
            </div>
            <br />

            <div className="form-group">
              <textarea
                id="exampleFormControlTextarea1"
                name="body"
                className="form-control blog-content"
                placeholder="Blog Content"
                rows="10"
                aria-label="maximum height"
                value={this.state.body}
                onChange={this.handleChange} type="text"></textarea>
            </div>

            <div className="row">
              <div className="col-4">
                <FormControl>
                  <InputLabel id="demo-simple-select-helper-label"
                    style={{ disableAnimation: false }}
                    disableAnimation={false}
                  >
                    Blog Image
                  </InputLabel>

                  <Select
                    className="dropdown"
                    onChange={this.setImage}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper">

                    <MenuItem disabled value="Please select an image">
                      <em>Please select an image</em>
                    </MenuItem>

                    {images.map((picture, i) =>
                      <MenuItem
                        key={i}
                        value={picture.title}
                        className="dropdown-item">
                        {picture.title}
                      </MenuItem>)}
                  </Select>

                  <FormHelperText>Pick an image for your blog post.</FormHelperText>
                </FormControl>
              </div>

              <div className="col-8">
                {previewPic}
              </div>

            </div>
            <br />
            <CardActions className="d-flex flex-row-reverse">
              <button className="blogSubmit " type="submit">SUBMIT</button>
            </CardActions>
          </form>

        </CardContent>

      </Card >

    )
  }

}

export default NewBlogPost;
