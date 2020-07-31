import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment'

require('./previousBlogPost.scss')

class PreviousBlogPost extends Component {

    // this.state.author information to be passed down in a prop
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

    handleDelete(event) {
        let objId = event.target.value
        console.log(objId)
        axios.delete(`/blog/deletepost/${objId}`)
            .then(resp => {
                console.log(resp)
            })
    }

    // populate history table
    getHistory() {
        // 
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
            })


            .catch(err => {
                console.log(err)
            })
        // maybe implement a looping list component?
    }

    componentDidUpdate(prevState) {
        if (prevState.posts !== this.state.posts) {
            this.getHistory()
        }
    }

    render() {
        const { posts } = this.state

        return (
            <div>
                <h2>Blog History</h2>
                {/* box - centered */}

                {/* PREVIOUS BLOG POST */}
                <table className="table">
                    {/* boostrap TABLE HEADERS - Date, Title, Content */}
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Title</th>
                            <th scope="col">Body</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* For Loop Row Data*/}
                        {posts.map((post, i) =>
                            <tr key={i}>
                                <td> {moment(this.state.posts[i].date).format("MMM Do YY")} </td>
                                <td className="card-title" defaultValue={post.title}>{this.state.posts[i].title}</td>
                                <td className="card-text" defaultValue={post.body}>{this.state.posts[i].body}</td>
                                <td ><button className="btn btn-primary" value={this.state.posts[i]._id} type="submit" onClick={this.handleDelete}>DELETE</button></td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default PreviousBlogPost;