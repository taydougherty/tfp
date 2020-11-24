import "./style.scss";
import React, { Component } from "react";
import NavBar from "../../../components/public/NavBar/NavBar";
import Post from "../../../components/public/blog/post";
import axios from "axios";
import HeaderLine from "../../../components/public/headerLine/index";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      author: "5f2353d76441301910bc9538",
    };
  }

  componentDidMount() {
    this.getHistory();
  }

  getHistory() {
    axios
      .get(`/blog/posts`)
      .then((resp) => {
        this.setState({
          posts: resp.data,
        });
        console.log(this.state.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <NavBar />
        <HeaderLine />
        <div style={{ height: 750 + "px" }} className="posts">
          <div className="h-75 cards">
            {this.state.posts.map((post) => (
              <Post
                key={post._id}
                title={post.title}
                body={post.body}
                date={post.date}
                image={post.image}
                link={"/blog/page/" + post._id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
