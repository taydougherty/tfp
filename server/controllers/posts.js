const Post = require('../models/Post')

exports.findPost = (req, res) => {
    // find posts to display on the client side & manager side
    Post.find().then(dbPost => {
        res.json(dbPost)
    })

}

exports.createPost = (req, res) => {

    // req.body.UserId = req.user.id;
    let newPost = new Post(req.body);

    newPost.save().then(dbPost => {
        res.json(dbPost)
    })

    // newPost.create(req.body)

}

exports.deletePost = (req, res) => {
    // deletes post from the Manager Side
    Post.remove({ id: "objectId" })

}

