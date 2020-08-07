import './style.scss';
import React, { Component } from "react";
import NavBar from '../../../components/public/NavBar';
import Post from '../../../components/public/blog/post'
import axios from 'axios';

class Blog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            author: "5f1b2bb5c5120f4b9c7efb54"
        }
    }

    componentDidMount() {
        this.getHistory()
    }
    getHistory() {

        axios.get(`/blog/posts/author/${this.state.author}`)
            .then(resp => {
                this.setState({
                    posts: resp.data
                })
                console.log(this.state.posts)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { posts } = this.state

        return (
            <div>
                <NavBar />
                <div style={{ height: 1000 + "px" }}>
                    <div className="row h-25 Blog">
                        <div className="col-12">
                            <div className="jumbotron bg-white">
                                <h1>Our Blog</h1>
                                <p style={{ fontSize: 25 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            </div>
                        </div>
                    </div>
                    <div className="row h-75 cards">
                        {this.state.posts.map((post =>
                            <Post
                                key={post._id}
                                title={post.title}
                                body={post.body}
                                link={"/blog/page/" + post._id}
                            />)
                        )}
                    </div>
                </div>
            </div >
        )
    }
}

export default Blog;
