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
            author: ""
        }
    }

    componentDidMount() {
        const userId = localStorage.getItem("user")
        console.log(userId)
        this.setState({ author: userId })
    }

    handleDelete(event) {
        let objId = event.target.value
        axios.delete(`/blog/deletepost/${objId}`)
            .then(resp => {
                console.log(resp)
            })
    }

    // populate history table
    getHistory() {
        axios.get(`/blog/author/${this.state.author}`)
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
                <table className="table table-hover">
                    {/* boostrap TABLE HEADERS - Date, Title, Content, DELETE*/}
                    <thead>
                        <tr>
                            <th scope="col" className="title-col">DATE</th>
                            <th scope="col" className="title-col">TITLE</th>
                            <th scope="col">CONTENT</th>
                            <th scope="col" className="delete-col"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* For Loop Row Data*/}
                        {posts.map((post, i) =>
                            <tr key={i}>
                                <td > {moment(this.state.posts[i].date).format("MMM Do YYYY")} </td>
                                <td className="card-title" defaultValue={post.title}>{this.state.posts[i].title}</td>
                                <td className="card-text" defaultValue={post.body}>{this.state.posts[i].body}</td>
                                <td ><button className="btn btn-warning" value={this.state.posts[i]._id} type="submit" onClick={this.handleDelete}>DELETE</button></td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default PreviousBlogPost;