const express = require('express')
const router = express.Router()

const postController = require('../controllers/posts')
// const authCheck = require('../config/middleware/authCheck')

// CLIENT/MANAGER side blog posts
router.get('/posts', postController.findPost)
router.get('/posts/author/:id', postController.findAuthorPosts)


// MANAGER side blog posts
// add authCheck middleware once user Front end is complete
router.post('/newpost', postController.createPost)

router.delete('/deletepost/:id', postController.deletePost)

module.exports = router;