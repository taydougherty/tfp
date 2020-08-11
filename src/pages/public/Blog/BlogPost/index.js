import './style.scss';
import React, { Component } from "react";
import NavBar from '../../../../components/public/NavBar';
import axios from 'axios';
// import image from "../../../../assets/images/sampleservice.png";
import rockClimber from "../../../../assets/blogImages/rockclimber.png"
import shielaSportClimb from "../../../../assets/blogImages/sheila_Sport_Climb.png"
import blackTriStars from "../../../../assets/blogImages/blackTriStars.png"
import Kyshatriya from "../../../../assets/blogImages/Kyshatriya.png"

let images = [
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
]

class BlogPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: ""
        }
    }

    componentDidMount() {
        this.getHistory()
    }

    getHistory() {
        axios.get(`/blog/posts/${this.props.match.params._id}`)

            .then(resp => {
                console.log("resp=", resp)
                this.setState({
                    post: resp.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    // getHistory() {
    //     axios.get(`/blog/posts`)

    //         .then(resp => {
    //             // console.log("resp=", resp)
    //             this.setState({
    //                 post: resp.data
    //             })
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }
    render() {
        const { post } = this.state
        console.log(post.image)
        let blogImage = '';
        for (let i = 0; i < images.length; i++) {
            if (images[i].title === post.image) {
                blogImage = images[i].image
            }
        }

        return (
            <div>
                <NavBar />
                <div className="row h100">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="card " >
                            <div className="card-body d-flex flex-column">
                                <img src={blogImage}
                                    className="card-img-top " style={{ height: 300 + "px" }} href="/home" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title text-center ">{post.title}</h5>
                                    <p className="card-text post-body">
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
