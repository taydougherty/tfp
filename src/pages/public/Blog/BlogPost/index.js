import './style.scss';
import React, { Component } from "react";
import { useParams } from "react-router-dom";
import NavBar from '../../../../components/public/NavBar';
// import PostArray from '../../../components/public/blog/postArray'
// import Post from '../../../components/public/blog/post'
import axios from 'axios';
import moment from 'moment'
import image from "../../../../assets/images/sampleservice.png";

class BlogPost extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         posts: [],
    //         author: "5f1b2bb5c5120f4b9c7efb54"
    //     }
    // }

    // componentDidMount() {
    //     this.getHistory()
    // }
    // getHistory() {

    //     axios.get(`/blog/posts/author/${this.state.author}`)
    //         // .then(resp => {
    //         //     resp.data.map(post => ({
    //         //         title: `${post.title}`,
    //         //         body: `${post.body}`,
    //         //         date: `${new Intl.DateTimeFormat('en-US').format(post.date)}`,
    //         //         author: `${post.author}`
    //         //     }))
    //         // })
    //         .then(resp => {
    //             this.setState({
    //                 posts: resp.data
    //             })
    //             console.log(this.state.posts)
    //         })


    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    render() {
        // const { posts } = this.state
        console.log("params", this.props.match.params)
        return (
            <div>
                <NavBar />
                <div className="col-4">
                    <div className="card " style={{ height: 600 + "px" }}>
                        <div className="card-body d-flex flex-column">
                            <img src={image}
                                className="card-img-top " style={{ height: 300 + "px" }} href="/home"></img>
                            <div className="card-body">
                                <h5 className="card-title text-center ">{this.props.match.params.title}</h5>
                                <p className="card-text crop-text-2">
                                    {this.props.match.params.body}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default BlogPost;
