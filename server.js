var express = require('express');
var app = express();

//Middleware
// parse incoming request bodies
var bodyParser = require('body-parser');

// Export app so files can import it as needed
module.exports.app = app;

app.listen(1337, function() {
  console.log('Photo viewer practice app listening on port 1337!');
});
// Tell express where root directory is to be served up
app.use(express.static('client'));
