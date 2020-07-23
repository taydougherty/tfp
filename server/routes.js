module.exports = app => {

    const users = require('./routes/users')
    const posts = require('./routes/users')


    // let middleware = 'TBD'
    // User Routes
    app.use('/tbd', users)

    // Blog Post Routes
    app.use('/TBD', posts)

}