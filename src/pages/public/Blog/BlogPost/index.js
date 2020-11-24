import "./style.scss";
import React, { Component } from "react";
import NavBar from "../../../../components/public/NavBar/NavBar";
import axios from "axios";
import moment from "moment";
import { blogImages } from "../../../../assets/blogImages/blogImages";
import HeaderLine from "../../../../components/public/headerLine/index";

let images = blogImages();

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: "",
    };
  }

  componentDidMount() {
    this.getHistory();
  }

  getHistory() {
    axios
      .get(`/blog/posts/${this.props.match.params._id}`)

      .then((resp) => {
        console.log("resp=", resp);
        this.setState({
          post: resp.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { post } = this.state;
    console.log(post.image);
    let blogImage = "";
    for (let i = 0; i < images.length; i++) {
      if (images[i].title === post.image) {
        blogImage = images[i].image;
      }
    }

    return (
      <div>
        <NavBar />
        <HeaderLine />
        <div className="row h100">
          <div className="col-2"></div>
          <div className="col-8">
            <div className="card">
              <div className="card-body d-flex flex-column">
                <img
                  src={blogImage}
                  className="card-img-top mx-auto"
                  style={{ width: 75 + "%" }}
                  href="/home"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title text-center ">{post.title}</h5>
                  <h6 className="card-title text-center ">
                    {moment(post.date).format("MMM DD YYYY")}
                  </h6>
                  <p className="card-text post-body">{post.body}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPost;
