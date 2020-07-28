const express = require('express')
const router = express.Router()

const postController = require('../controllers/posts')
// const authCheck = require('../config/middleware/authCheck')

// CLIENT/MANAGER side blog posts
router.get('/posts', postController.findPost)


// MANAGER side blog posts
// add authCheck middleware
router.post('/newpost', postController.createPost)

router.delete('/deletepost', postController.deletePost)

module.exports = router;