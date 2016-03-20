const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");
const path = require('path');
const routes = require('./routes/index');
const fruites = require('./routes/fruites');
const comments = require('./routes/comments');
const calc = require('./routes/calc');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","Access-Control-Allow-Methods,  DELETE, PUT");
    next();
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.use('/', routes);
app.use('/fruites', fruites);
app.use('/comment', comments);
app.use('/calc', calc);

app.get('/users', function (req, res) {
    console.log('Reuest recived!!!');
    res.sendFile('users.json', {root: __dirname});
});


var server = app.listen(4001, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://localhost:4001');
});
