/**
 * Created by pugar on 1/31/17.
 */
var express = require('express');
var router = express.Router();
var options = {
//    root: __dirname + '/public/',
    root: './public/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
};

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('angularexp.html',options,function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
        else {
            console.log('Sent:', options);
        }
    });
});

module.exports = router;
