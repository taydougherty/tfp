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
    constructor(props) {
        super(props)
        this.state = {
            post: []
        }
    }

    componentDidMount() {
        this.getHistory()
    }

    getHistory() {

        axios.get(`/blog/posts/${this.props.match.params}`)

            .then(resp => {
                console.log("resp=", resp)
                this.setState({
                    post: resp.data
                })
                console.log(this.state.posts)
            })


            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { post } = this.state
        console.log("params", this.props.match.params)
        return (
            <div>
                <NavBar />
                <div className="row h100">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="card " >
                            <div className="card-body d-flex flex-column">
                                <img src={image}
                                    className="card-img-top " style={{ height: 300 + "px" }} href="/home"></img>
                                <div className="card-body">
                                    <h5 className="card-title text-center ">{post.title}</h5>
                                    <p className="card-text crop-text-2">
                                        {post.body}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default BlogPost;
