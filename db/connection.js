var Sequelize = require('sequelize');
// Shouldn't need to do a require for mysql. Sequelize will handle that on its own.

// Create new database (Parameters are name, user, and password. We can sort out a config file later.)
var db = new Sequelize('photoviewer', 'root', 'thisIsSomeNextLevelStuff', {
  dialect: 'mysql',
  port: 3306
  // pool: {
  //   max: 5,
  //   min: 0,
  //   idle: 10000
  // }
});

// Create tables by defining their model

var User = db.define('user', {
  // Make sure unique index is being created properly
  // userId: Sequelize.UUID,
  user: Sequelize.STRING
});

var Photo = db.define('photo', {
  // Set up link to user's unique id
  // photoId: Sequelize.UUID,
  userID: Sequelize.INTEGER,
  photo: Sequelize.UUID,
  title: Sequelize.STRING,
  url: Sequelize.STRING
});

// Rating table will act similar to a join
var Rating = db.define('rating', {
  //TODO: Make user and photo ids linked to actual photos and users
  userId: Sequelize.INTEGER,
  photoId: Sequelize.INTEGER,
  rating: {
    type: Sequelize.INTEGER,
    validate: { min: 1, max: 5 }
  }
});

// Create joins with belongsTo and foreign keys

// Sync database to schema
db.sync({force: true})
  .then(function() {
    console.log('Database sync complete.');
  })
  .then(function() {
    return User.create({user: 'Jon Garrett'});
  })
  .then(function() {
    return User.findAll();
  })
  .then(function(users) {
    users.forEach(function(user) {
      console.log(user + ' exists!');
    });
  })
  .catch(function(err) {
    console.log('Error syncing database: ', err);
    db.close;
  });