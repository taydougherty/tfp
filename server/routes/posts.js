const express = require('express')
const router = express.Router()

const postController = require('../controllers/posts')
const authCheck = require('../config/middleware/authCheck')

// CLIENT side blog posts
router.get('/posts', postController.findPost)


// MANAGER side blog posts
router.get('/allposts', authCheck, postController.findPost)

router.post('/newpost', postController.createPost)

router.delete('/deletepost', authCheck, postController.deletePost)

module.exports = router;