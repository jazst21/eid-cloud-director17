/**
 * Created by pugar on 1/31/17.
 */
var express = require('express');
var router = express.Router();
var idserver = 'f00eea9a9fcc4a5cb44047e940bb42e2';

var request = require('request');

var options = {
    host: 'http://8.43.86.2',
    path: '/v2/f00eea9a9fcc4a5cb44047e940bb42e2/servers',
    port: '8774',
    //This is the only line that is new. `headers` is an object with the headers to request
    headers: {'Content-Type': 'application/json','X-Auth-Token': 'c8172d4a6471423abab271aa9b37747c'},
    method: 'GET',
    uri: 'http://8.43.86.2:8774/v2/f00eea9a9fcc4a5cb44047e940bb42e2/servers'
};
var gettoken = {
    //This is the only line that is new. `headers` is an object with the headers to request
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    uri: 'http://8.43.86.2:5000/v2.0/tokens',
    json:{'auth':{'passwordCredentials': {'username': 'facebook10211367860369141', 'password': 'Jks1BcPRdP2P6M6e'},'tenantName': 'facebook10211367860369141'}}
};

function callback(error, response, body) {
//    if (!error || response.statusCode == 200) {
        if (!error ) {
//            var info = JSON.parse(body);
//            console.log(info.id + " _id_parsed_");
//            console.log(info.name + " _name_parsed_");
            console.log(request(gettoken));
            console.log(body);
//            console.log(info.id);
        }
        else {
            console.log(error);
        }
    };

//=====
/* GET home page. */
router.get('/', function(req, res, next){
    console.log('trying API to trystack...');
///    request(options, callback);
    request(gettoken,callback);
});

module.exports = router;
