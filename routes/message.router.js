const router = require('express').Router();
const Message = require('../models/Message')
const sendMail = require('../utils/sendmail');

router.post('/new', (req, res) => {

  try {
    const { email, name, message, phone_number } = req.body;

    var messageObject = new Message({ name, email, message, phone_number });

    messageObject.save()
      .then(data => {

        sendMail({
          from: 'Judge Godwins <judgegodwins@gmail.com>',
          to: email,
          subject: 'Thanks for reaching out',
          text: `Hello ${name}, thanks for reaching out to me. I'll get back to you shortly.`
        })
        .then(response => {
          res.json({success: true})
        })
        .catch(response => res.json({ success: true }))
        
      })
      .catch(error => res.json({success: false, cause: 'Server Error'}))

  } catch(error) {
    res.json({ success: false, cause: 'Server Error' })
  }
  
});

router.get('/all', (req, res) => {
  try {
    Message.find({}, (err, data) => {
      res.send(data);
    })
  } catch(error) {
    res.json({ success: false, cause: 'Server Error' })
  }
})

module.exports = router;