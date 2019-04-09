const accountSid = 'ACf89878040ae494f36b57c383e13db1c0';
const authToken = '8da677e1e2ffe35825d8fcb771fde132';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'You have been invited to join a Game of Thrones fantasy league! To complete fill out your ballot here: http://localhost:8080/#/ballot',
     from: '+14159156960',
     to: '+14153350901'
   })
  .then(message => console.log(message.sid));