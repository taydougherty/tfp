import React, { Component } from 'react';
import axios from 'axios';
import PrevBlogEntry from './PrevBlogEntry/PrevBlogEntry'


require('./previousBlogPost.scss')

class PreviousBlogPost extends Component {

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

                <table className="table table-hover">

                    <thead>
                        <tr>
                            <th scope="col" className="title-col">DATE</th>
                            <th scope="col" className="title-col">TITLE</th>
                            <th scope="col" className="body-col">CONTENT</th>
                            <th scope="col" className="title-col">IMAGE</th>
                            <th scope="col" className="delete-col"></th>
                        </tr>
                    </thead>

                    {posts.map((post, i) =>
                        <PrevBlogEntry
                            key={i}
                            date={post.date}
                            title={post.title}
                            body={post.body}
                            image={post.image}
                            id={post._id} />
                    )}

                </table>
            </div>
        )
    }
}

export default PreviousBlogPost;