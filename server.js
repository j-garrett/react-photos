var express = require('express');
var app = express();

// Middleware
// parse incoming request bodies
var bodyParser = require('body-parser');

// App level code
var queries = require('./db/query');

// Tell express where root directory is to be served up
app.use(express.static('client'));
// Export app so files can import it as needed
module.exports.app = app;

app.listen(1337, function() {
  console.log('Photo viewer practice app listening on port 1337!');
});

app.get('/photos', function(req, res) {
  console.log('Received get request for /photos in server.js');
  console.log(JSON.stringify(queries.getPhotos()));
  res.send(queries.getPhotos);
});



