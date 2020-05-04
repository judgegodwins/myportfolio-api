module.exports = function(app, Model) {
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    })
    
    app.post('/new_message', (req, res) => {
        var message = new Model({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });

        message.save((err, data) => {
            if(err) {
                res.send("Couldn't send your message");
            } else {
                res.send("success")
            }
        })
    });

    app.get('/all', (req, res) => {
        Model.find({}, (err, data) => {
            res.send(data);
        })
    })
}
