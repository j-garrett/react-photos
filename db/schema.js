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
  userId: Sequelize.INTEGER,
  url: Sequelize.STRING,
  title: Sequelize.STRING,
  rating: Sequelize.INTEGER
  // Create a method that averages all ratings in rating table
  // rating: find rating in Rating where photoId = this.id
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
Photo.belongsTo(User);
Photo.hasMany(Rating);
User.hasMany(Rating);

exports.User = User;
exports.Photo = Photo;
exports.Rating = Rating;
// Create joins with belongsTo and foreign keys

// Sync database to schema
// db.sync({force: true})
//   .then(function() {
//     console.log('Database sync complete.');
//   })
//   .then(function() {
//     Photo.create({userId: 1, url: './images/mockups/MockUp0.png', title: 'Mock Up 0 index', rating: '3 stars'});
//     Photo.create({userId: 1, url: './images/mockups/MockUp1.png', title: 'Mock Up 1', rating: '4 stars'});
//     Photo.create({userId: 1, url: './images/mockups/MockUp2.png', title: 'Another Mock Up', rating: '2 stars'});
//     Photo.create({userId: 1, url: './images/mockups/MockUp3.png', title: 'Still More Mock Ups!', rating: '5 stars'});
//     Photo.create({userId: 1, url: './images/mockups/MockUp4.png', title: 'They keep getting better!', rating: '1 stars'});
//   })
//   .then(function() {
//     User.create({user: 'Jon Garrett'});
//     User.create({user: 'Dan the Man'});
//     User.create({user: 'Vince the Prince'});
//     User.create({user: 'Drew the Dew'});
//     return User.findAll();
//   })
//   .then(function(users) {
//     users.forEach(function(user) {
//       console.log(JSON.stringify(user) + ' exists!');
//     });
//   })
//   .catch(function(err) {
//     console.log('Error syncing database: ', err);
//     db.close;
//   });