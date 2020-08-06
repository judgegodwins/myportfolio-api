require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

const PORT = process.env.PORT || 5000;
var MessageModel = require('./Message');
var router = require('./router');


mongoose.connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true}, (err, db) => {
    if(!err) console.log('connected');
    console.log(err)
    router(app, MessageModel);
});


app.use(cors());

// app.use(function(req, res, next) {
//     console.log(req.headers);
//     next();
// })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.listen(PORT, () => console.log(`Listening on port ${PORT}`))