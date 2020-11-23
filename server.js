require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

const PORT = process.env.PORT || 8080;

const messageRouter = require('./routes/message.router');
const indexRouter = require('./routes/index.router');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', indexRouter);
app.use('/message', messageRouter);



mongoose.connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true}, (err, db) => {
  if(!err) console.log('connected');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))