var express = require('express');
var text = fs.readFileSync('index.html');
var temp = text.toString('utf-8');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Ala');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
