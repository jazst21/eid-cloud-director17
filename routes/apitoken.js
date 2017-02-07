/**
 * Created by pugar on 1/31/17.
 */
var express = require('express');
var router = express.Router();
var token = '8553ce41c6d445229d58e97f2e6bf520';
var options = {
    root: './',
    dotfiles: 'deny',
    headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '8553ce41c6d445229d58e97f2e6bf520'
    }
};

/* GET home page. */
router.get('/', function(req, res, next) {
    http.get();

});

module.exports = router;
module.exports = token;