var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var users = [];

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: false}));
const urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.get('/', function(req, res) {
    res.render('index', { title: 'Home'});
  });

app.get('/about', function(req, res) {
  res.render('about', {title: 'About'});
});

app.get('/contact', urlencodedParser, function(req, res) {
  res.render('contact', {title: 'Contact'});
  res.sendFile(__dirname + '/views/contact.pug')
});

app.post('/contact', urlencodedParser, function(req, res) {
  if (!req.body) return res.sendStatus(400);
  //console.log(req.body);

  var user = {
    id: users.length + 1,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.pwd
  }
  users.push(user); 
  mailOptions.to = req.body.email;  
  sendEmail();
  console.log(users);
  res.redirect('/');
});  

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sonyacat2607@gmail.com',
    pass: 'Christopher-04-2018'
  }
});

var mailOptions = {
  from: 'sonyacat2607@gmail.com',
  to: "",
  subject: 'Sending Email using Node.js',
  text: 'Hello! That was easy to send you email!'
};

const sendEmail = function () {
  transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
  });
}

app.listen(3000, function() {
  console.log('app listening at http://localhost:3000');
});

