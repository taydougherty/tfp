module.exports = app => {

    const users = require('./routes/users')
    const posts = require('./routes/posts')


    // let authCheck = require('./config/middleware/authCheck')
    // User Routes
    app.use('/user', users)

    // Blog Post Routes
    app.use('/blog', posts)

}