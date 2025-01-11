// a simple backend for handling sms using twillo api
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.json());

const accountSid = 'AC64fdb4a60407ee258d88f5d446f0c1f0';
const authToken = '3579a67fb35a9939bef8b9e754087a15';
const client = new twilio(accountSid, authToken);

app.post('/send-sms', (req, res) => {
  const { message, to } = req.body;

  client.messages.create({
    body: message,
    to: to,
    from: 'your_twilio_phone_number'
  })
  .then((message) => res.status(200).send(message.sid))
  .catch((error) => res.status(500).send(error));

});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
