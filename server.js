require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');

const PORT = process.env.PORT || 5000;

const whiteList = ['https://judgegodwins.github.io', 'https://judgeportfolio.herokuapp.com'];

if(process.env.NODE_ENV == 'development') {
    whiteList.push('localhost:5000');
}

console.log(process.env.NODE_ENV)

var corsOptions = {
    origin: function(origin, callback) {
        if(whiteList.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/new_message', (req, res) => {
    console.log(req.header, ' ', req.headers['access-control-allow-origin']);
    console.log(req.body);
    console.log('posting...');
    res.send('done');
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))