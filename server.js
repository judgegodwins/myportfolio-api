const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/new_message', (req, res) => {
    console.log(req.body);
    console.log('posting...');
    res.send('done');
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))