"use strict";

var express = require("express"),
    app = express(),
    passport = require("passport"),
    LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    /*
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
    */
  }
));

var port = process.env.PORT || 8080;

app.use(express.static("client"));

app.get('/api', passport.authenticate('local', { successRedirect: '/',
                                                    failureRedirect: '/login.html' }));

app.listen(port, function () {
  console.log('App running on port # ' + port);
}); 
