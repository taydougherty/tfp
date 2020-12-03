import React, { Component } from 'react';
import NewBlogPost from "../../../components/admin/NewBlogPost/NewBlogPost";
import PreviousBlogPost from "../../../components/admin/PreviousBlogPost/PreviousBlogPost";
import Navigation from "../../../components/admin/Navbar/Navbar";


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

                    <NewBlogPost />
                    <br /><br /><br />
                    <PreviousBlogPost />
                </div>
            </div>
        )
    }
}
