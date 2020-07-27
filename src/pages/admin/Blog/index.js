import React from 'react'

import NewBlogPost from "../../../components/admin/newBlogPost/NewBlogPost"
import PreviousBlogPost from "../../../components/admin/previousBlogPost/PreviousBlogPost"

function Blog() {
    return (
        <div>
            <NewBlogPost />
            <PreviousBlogPost />
        </div>
    )
}

export default Blog;