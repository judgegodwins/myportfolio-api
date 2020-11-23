const { MAILGUN_API_KEY, EMAIL_DOMAIN } = process.env;

const mailgun = require('mailgun-js')({
  apiKey: MAILGUN_API_KEY,
  domain: EMAIL_DOMAIN
});

module.exports = data => {
  return mailgun.messages().send(data);
}
