var Sequelize = require('sequelize');
var db = require('./schema');


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
var getPhotos = function() {
  return db.Photos.findAll();
};

// Export queries for use by other parts of the app
exports.getPhotos = getPhotos;