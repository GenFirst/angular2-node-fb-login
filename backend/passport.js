'use strict';

var passport = require('passport'),
  FacebookTokenStrategy = require('passport-facebook-token'),
  User = require('mongoose').model('User');

module.exports = function () {

  passport.use(new FacebookTokenStrategy({
      clientID: 'YOUR-FACEBOOK-CLIENT-ID',
      clientSecret: 'YOUR-FACEBOOK-CLIENT-SECRET'
    },
    function (accessToken, refreshToken, profile, done) {
      User.upsertFbUser(accessToken, refreshToken, profile, function(err, user) {
        return done(err, user);
      });
    }));

};