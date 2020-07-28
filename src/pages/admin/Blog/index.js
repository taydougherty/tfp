import React from 'react'

import NewBlogPost from "../../../components/admin/NewBlogPost/NewBlogPost"
import PreviousBlogPost from "../../../components/admin/PreviousBlogPost/PreviousBlogPost"

// pass down user login information props to this component
// New blog post will need the user object _id, will be passed in the newBlogPost request

function Blog() {
    return (
        <div>
            <NewBlogPost />
            <PreviousBlogPost />
        </div>
    )
}

export default Blog;