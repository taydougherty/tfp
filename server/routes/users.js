const express = require('express')
const router = express.Router()

const userController = require('../controllers/users')

router.post('/login', userController.loginUser)

router.get('/logout', userController.signOutUser)

router.post('/register', userController.Register)

module.exports = router;