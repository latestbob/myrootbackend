const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');

app.use(express.json());
app.use(cors())

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' },
  ];
  
  // GET endpoint to return users
  app.get('/api/users', (req, res) => {
    res.json(users);
  });

//   POST Request send mail

app.post('/api/send', async (req, res) => {

    const { name, email, subject, message } = req.body;

    let recipientEmail = 'edidiongbobson@gmail.com';

  


 var transport = nodemailer.createTransport({
      host: 'mail.opdrive.com.ng',
      port: 465,
      auth: {
        user: 'hello@opdrive.com.ng',
        pass: 'BOBson246**'
      }
    });

  let mailOptions = {
    from: 'hello@opdrive.com.ng',
    to: recipientEmail,
    subject: 'New Contact Form Submitted',
    text: 'Name: ' + name + ' , Email: ' + email + ' , Subject: ' + subject + ' , Message : ' + message,
  };


  try {
    let info = await transport.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }



res.status(200).json({ message: 'Working' });




});



  // Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });