module.exports = app => {

    const users = require('./routes/users')
    const posts = require('./routes/posts')

    // User Routes
    app.use('/user', users)

    // Blog Post Routes
    app.use('/blog', posts)

}