'use strict';

var passport = require('passport'),
	url = require('url'),
	GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
	config = require('../config'),
	user = require('../../app/controllers/user/use');

module.exports = function() {
	passport.user(
		new GoogleStrategy({
				clientID : config.google.clientID,
				clientSecret: config.google.clientSecret,
				callbackURL: config.google.callbackURL,
				passReqToCallback: true
			},
			function(req, accessToken, refreshToken, profile, done) {
				var providerData = profile.__json;

				providerData.accessToken = accessToken;
				providerData.refreshToken = refreshToken;

				var providerUserProfile = {
					firstName: profile.name.givenName,
					lastName: profile.name.familyName,
					fullName: profile.displayName,
					email: profile.emails[0].value,
					provider: 'google',
					providerId: profile.id,
					providerData: providerData
				};

				user.saveOAuth(req,providerUserProfile, done);
			}
		)
	);
};