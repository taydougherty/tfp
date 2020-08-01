import React, { Component } from 'react'
import NewBlogPost from "../../../components/admin/NewBlogPost/NewBlogPost"
import PreviousBlogPost from "../../../components/admin/PreviousBlogPost/PreviousBlogPost"
import Navigation from "../../../components/admin/Navbar/Navbar"
// pass down user login information props to this component
// New blog post will need the user object _id, will be passed in the newBlogPost request


export default class AdminBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false
        };


        this.authenticate = this.authenticate.bind(this);
        this.deAuthenticate = this.deAuthenticate.bind(this);
    }

    authenticate() {
        this.setState({
            authenticated: true
        })
    }

    deAuthenticate() {
        this.setState({
            authenticated: false
        })
    }
    render() {
        return (
            <div>
                <Navigation
                    authenticated={this.props.authenticated}
                    authenticate={this.props.authenticate}
                    deAuthenticate={this.props.deAuthenticate}
                    logout={this.props.logout}
                />
                <div className="container" >
                    {/* will need to pass props of user information to NewBlogPost */}
                    < NewBlogPost />
                    <br /><br /><br />
                    <PreviousBlogPost />
                </div>
            </div>
        )
    }
}
