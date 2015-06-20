'use strict';

var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	User = require('../../app/controllers/user/user').getUser();

module.exports = function() {
	passport.use(new LocalStrategy(User(username, password, done)));
};