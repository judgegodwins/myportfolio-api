const Mailgun = require("mailgun.js");
const formData = require('form-data');

const mailgun = new Mailgun(formData);

const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY || '' });

export default (data) => {
  if (!process.env.MAILGUN_DOMAIN) {
    return Promise.reject(new Error('Mailgun domain not set'))
  }

  return mg.messages.create(process.env.MAILGUN_DOMAIN, data)
}