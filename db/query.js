var db = require('./schema');
// Make sure to use include for loading associations (eager loading: http://docs.sequelizejs.com/en/v3/docs/models-usage/)
// Create an object with keys for each model and build queries on each key
// Now we can load this object in to other files for easy querying in the app!
module.exports = {
  test: {
    object: 'this is a test string',
    functionTest: function() {
      return 'this is a function test returning a string';
    }
  },
  users: {
    get: function(req, res) {
      db.User.findAll({include: [db.Photo]})
        .then(function(users) {
          console.log('Retrieve all the users with query.js: ', users);
          res.json(users);
        });
    }
  },
  photos: {
    getPhotos: function(req, res) {
      // Don't have a proper res object...
      db.Photo.findAll({include: [db.User]})
        .then(function(photos) {
          res.send(photos);
        });
    },
    post: function(req, res) {}
  },
  ratings: {
    get: function(req, res) {},
    post: function(req, res) {}
  }
};

// Get userId query
var getUser = function(username) {
  return User.findAll({
    where: {
      user: username
    }
  });
};

var getUserId = function(username) {
  return getUser(username)
  .then(function(user) {
    return user.id;
  });
};


// Get all photos query
// var getPhotos = function() {
//   return db.Photos.findAll();
// };

// // Export queries for use by other parts of the app
// exports.getPhotos = getPhotos;