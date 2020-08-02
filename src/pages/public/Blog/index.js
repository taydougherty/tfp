import './style.scss';
import React, { Component } from "react";
import NavBar from '../../../components/public/NavBar';
// import PostArray from '../../../components/public/blog/postArray'
// import Post from '../../../components/public/blog/post'
import axios from 'axios';
import moment from 'moment'
import image from "../../../assets/images/sampleservice.png";

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
            // .then(resp => {
            //     resp.data.map(post => ({
            //         title: `${post.title}`,
            //         body: `${post.body}`,
            //         date: `${new Intl.DateTimeFormat('en-US').format(post.date)}`,
            //         author: `${post.author}`
            //     }))
            // })
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
                        {posts.map((post, i) =>
                            <div className="col-4">
                                <div className="card " style={{ height: 600 + "px" }}>
                                    <div className="card-body d-flex flex-column">
                                        <img src={image}
                                            className="card-img-top " style={{ height: 300 + "px" }} href="/home"></img>
                                        <div className="card-body">
                                            <h5 className="card-title text-center ">{posts[i].title}</h5>
                                            <p className="card-text crop-text-2">
                                                {posts[i].body}
                                            </p>
                                            <a href="home" className="stretched-link"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div >
        )
    }
}

export default Blog;
