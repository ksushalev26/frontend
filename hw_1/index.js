

// var fs = require('fs');

// //READ DATA

// fs.readFile('data.txt', 'utf-8', function (err, data) {
//   console.log('ASync');
//   if (err) throw err;
//   console.log(data);
// });

// console.log('Sync');
// var fileContent = fs.readFileSync('data.txt', 'utf-8');

// console.log(fileContent);

// //WRITE DATA

// fs.writeFileSync("data.txt", "Hello me me me!");

// fs.writeFile("data.txt", "Hello me me me!", function(err) {
//   if (err) throw err;
//   var data = fs.readFileSync("data.txt", 'utf-8');
//   console.log(data);
// });

// //ADD DATA

// fs.appendFileSync('data.txt', 'Hello World!');

// fs.appendFile('data.txt', '\n' +'Hello World!', function (err) {
//   if (err) throw err;
//   var data = fs.readFileSync("data.txt", 'utf-8');
//   console.log(data);
// });


//SEND EMAIL

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sonyacat2607@gmail.com',
    pass: 'Christopher-04-2018'
  }
});

var mailOptions = {
  from: 'sonyacat2607@gmail.com',
  to: 'sonyacat2607@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Hello! That was easy to send you email!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

  
