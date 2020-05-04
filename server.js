require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');

const PORT = process.env.PORT || 5000;

var whitelist = ['https://judgegodwins.github.io', 'https://judgeportfolio.herokuapp.com', 'http://localhost:5000'];

if(process.env.NODE_ENV === 'development') {
    whitelist.push('localhost');
}

console.log(process.env.NODE_ENV)
console.log(whitelist)

var corsOptions = {
    
    origin: function (origin, callback) {
        if(!origin) {
            console.log('* no origin')
            return callback(null, true);
        }
        console.log('origin: ', origin);
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'));
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

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/new_message', (req, res) => {
    console.log(req.headers['Access-Control-Allow-Origin']);
    console.log(req.body);
    console.log('posting...');
    res.send('done');
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))