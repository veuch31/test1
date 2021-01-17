var express = require('express');

var app = express()

//Home page
app.get('/', function (req, res) {
    res.send('Bonjour')
});

app.listen(8067);

