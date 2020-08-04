const express = require('express')
const router = express.Router()

const postController = require('../controllers/posts')
const authCheck = require('../config/middleware/authCheck')

// CLIENT/MANAGER side blog posts
router.get('/posts', postController.findPost)
router.get('/posts/author/:id', postController.findAuthorPosts)
router.get('/posts/:id', postController.findPostId)

// MANAGER side blog posts
// add authCheck middleware once user Front end is complete
router.post('/newpost', authCheck, postController.createPost)

router.delete('/deletepost/:id', authCheck, postController.deletePost)

module.exports = router;