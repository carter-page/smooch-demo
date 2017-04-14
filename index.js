var express = require('express')
var app = express();

var Smooch = require('smooch');

Smooch.init({ appToken: process.env.APP_TOKEN });


app.get('/', function (req, res) {
  res.sendFile('index.html',  {"root": __dirname});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
