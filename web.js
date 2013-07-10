var express = require('express');
var text = fs.readFileSync('index.html');
var buffer = new Buffer(text, "utf8");
var temp = text.toString('utf8');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(temp);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
