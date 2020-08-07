const Post = require('../models/Post')

exports.findPost = (req, res) => {
    // find posts to display on the client side & manager side
    Post.find().then(dbPost => {
        res.json(dbPost)
        res.send(dbPost)
    })

}

// Find all posts by Author.user.id
exports.findAuthorPosts = (req, res) => {
    Post.find({ "author": req.params.id }).then(dbPost => {
        res.json(dbPost)
    })
}

// New post from Admin Portal, auth required
exports.createPost = (req, res) => {
    let newPost = new Post(req.body);
    newPost.save()
        .then(dbPost => {
            res.json(dbPost)
        })
}

// Delete post from Admin Portal, auth required
exports.deletePost = (req, res) => {
    Post.findOneAndRemove({ _id: req.params.id })
        .then(resp => {
            res.json(resp)
        })
}

