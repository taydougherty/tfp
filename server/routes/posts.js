const express = require('express')
const router = express.Router()

const postController = require('../controllers/posts')
const authCheck = require('../config/middleware/authCheck')

// Client side blog posts
router.get('/blogPosts', postController.findPost)


// Manager side blog posts
router.get('/blogposts', authCheck, postController.findPost)

router.post('/newpost', authCheck, postController.createPost)

router.delete('/deletepost', authCheck, postController.deletePost)

module.exports = router;