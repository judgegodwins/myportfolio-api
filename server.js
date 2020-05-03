const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post('/new_message', (req, res) => {
    console.log(req.body);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))