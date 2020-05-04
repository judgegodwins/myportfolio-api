var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var messageSchema = new Schema({
    name: String,
    email: String,
    message: String
});

module.exports = mongoose.model('Message', messageSchema);