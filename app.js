var express = require('express');
var app = express();


// app.get('/', function(req, res) {
//   res.send('index.html');
// });

app.listen(1337, function() {
  console.log('Photo viewer practice app listening on port 1337!');
});


app.use(express.static('client'));
