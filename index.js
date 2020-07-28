const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const creds = require('./src/config/config')

// node . to run server
const app = express();

const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => {
  console.log('We are live on port 8080');
});


app.get('/', (req, res) => {
  res.send('Welcome to my api');
})

app.post('/send', (req,res) => {
  var data = req.body;
console.log(data)
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
  if(err) {
    console.error('there was an error: ', err)
  }else {
    console.log('here is the res: ', res)
    // res.send('Success')
  }
  smtpTransport.close();
});

})