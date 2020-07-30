const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const passport = require('./config/passport')
const session = require('express-session')
const config = require('./config/extra-config')
const creds = require('./config/mailerConfig')
const cors = require('cors')

// Express App Instantiation
const app = express();

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

// NODE MAILER SECTION
app.get('/', (req, res) => {
    res.send('Welcome to my api');
})

app.post('/send', (req, res) => {
    var data = req.body;
    console.log(data)

    // Create a .env file and make sure to add it to your .gitignore. 
    // If you want to test out the email and use gmail as the recipient service, you will need to     turn ON less secure apps on your google account https://myaccount.google.com/lesssecureapps

    var smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: creds.USER,
            pass: creds.PASS
        }
    });

    // Must write in a recipient email. Using environment variable will not work
    var mailOptions = {
        from: data.email,
        to: "your email here",
        subject: data.subject,
        text: data.message
    };

    smtpTransport.sendMail(mailOptions,
        (err, res) => {
            if (err) {
                console.error('there was an error: ', err)
            } else {
                console.log('here is the res: ', res)
                // res.send('Success')
            }
            smtpTransport.close();
        });

})


// Export App
module.exports = app