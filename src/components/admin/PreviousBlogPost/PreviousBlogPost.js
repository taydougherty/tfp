import React, { Component } from 'react';
import axios from 'axios';

require('./previousBlogPost.css')

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
        console.log(this.state.posts)

    }

    handleDelete(event) {
        event.preventDefaul()
        let objId = "TESTID "
        axios.delete('/blog/deletepost', objId)
            .then(resp => {
                console.log(resp)
            })
    }

    // populate history table
    getHistory() {

        axios.get(`/blog/posts/author/${this.state.author}`)
            .then(resp => {
                this.setState({ posts: resp.data },
                    () => { })
            })
            .catch(err => {
                console.log(err)
            })
        // maybe implement a looping list component?
    }



    render() {
        const { posts } = this.state
        return (
            <div>
                <h2>Blog History</h2>
                {/* box - centered */}
                {/* PREVIOUS BLOG POST */}
                <table class="table">
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

                        <tr>
                            <th scope="row">04/20/2020</th>
                            <td>Lorem Ipsum</td>

                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus consequat pellentesque. Ut id hendrerit ex. Morbi gravida, arcu vitae venenatis vestibulum, leo sapien blandit turpis, ut tempus enim nunc at felis. Mauris dictum sem nec ultrices commodo. Mauris aliquam venenatis mi in viverra. Maecenas vitae fermentum neque. Proin tincidunt risus non nisl ultrices, non consectetur metus facilisis. Mauris ante sem, sollicitudin et eros nec, fringilla luctus leo. </td>

                            {/* DELETE button*/}
                            <td><button className="btn btn-primary" type="submit" onSubmit={this.handleDelete}>DELETE</button></td>
                        </tr>




                    </tbody>
                </table>
            </div>
        )
    }
}

export default PreviousBlogPost;