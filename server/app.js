var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var calculator = require('./routes/calculator');
var port = 5000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use('/calculator', calculator);

app.listen(port);
console.log('listening on port:', port);
