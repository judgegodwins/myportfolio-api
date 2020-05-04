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
    router(app, MessageModel);
});

var whitelist = [
    'https://judgegodwins.github.io', 
    'https://judgeportfolio.herokuapp.com', 
    'http://127.0.0.1:5000'
];

var corsOptions = {
    
    origin: function (origin, callback) {
        if(!origin) return callback(null, true);
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            try {
                callback(new Error('Not allowed by CORS'));
            } catch(err) {
                console.log(err);
            }
        }
    }
}
app.use(cors(corsOptions));

app.use(function(req, res, next) {
    console.log(req.headers);
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.listen(PORT, () => console.log(`Listening on port ${PORT}`))