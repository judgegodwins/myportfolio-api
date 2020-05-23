var dns = require('dns');
var url = require('url');
var checkEmail = function(email) {
    let emailUrl, host;
    try {
        emailUrl = new URL(email);
        host = emailUrl.hostname;
    } catch(error) {
        return false;
    }

    dns.lookup(host, (err, address, family) => {
        
    })
}

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
                res.json({result: "failure"});
            } else {
                res.json({result: "success"})
            }
        })
    });

    app.get('/all', (req, res) => {
        Model.find({}, (err, data) => {
            res.send(data);
        })
    })
}
