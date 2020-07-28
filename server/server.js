const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const passport = require('./config/passport')
const session = require('express-session')
const config = require('./config/extra-config')
const cors = require('cors')

// Express App Instantiation
const app = express();

// const PORT = process.env.PORT || 8080

// Authentication/CORS

app.use(cors())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

// Authentication Check Middleware
const authCheck = require('./config/middleware/attachAuthenticationStatus')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(session({ secret: config.sessionKey, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(authCheck);

// Routes
require('./config/dbImplementation')

require('./routes')(app)

app.get('*', (req, res) => {
    const rootHtmlPath = path.resolve(__dirname, '..', 'public', 'index.html');
    res.sendFile(rootHtmlPath);
})

// Export App
module.exports = app