'use strict';

var //config = require('./configENVFile'),
	express = require('express'),
	session = require('express-session'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	path = require('path'),
	favicon = require('serve-favicon'),
	compress = require('compression'),
	flash = require('connect-flash'),
	RedisStore = require('connect-redis-sessions'),
	passport = require('passport');

module.exports = function (port) {
	var app = express(),
			_timeSecDay = 60 * 60 * 24,
			fnCRS = RedisStore(
				{ app: 'app', //_getAppName,
					ttl: _timeSecDay,
					cookie: {
						maxAge: _timeSecDay*1000
					}
				}
			);

	app.use(compress());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(cookieParser());
	app.use(methodOverride());
	app.use(fnCRS);
	app.use(require('stylus').middleware(path.join(__dirname, '../public')));
	app.use(flash());
	app.use(passport.initialize());
	app.use(passport.session());
	
	app.set('views', path.join(__dirname, '../app/views'));
	app.set('view engine', 'jade');
	app.set('port',process.env.PORT || port)

	//adding the rauter module require
	require('../app/routes/index.route.js')(app);

	// an example how to get the internal redis-sessions instance out of the connect-redis-sessions module 
	//redisSessionsInstance = fnCRS.handler.rds;

	// development error handler
	// will print stacktrace
	/*if (app.get('env') === 'development') {
	    app.use(function(err, req, res, next) {
	        res.status(err.status || 500);
	        res.render('error', {
	            message: err.message,
	            error: err
	        });
	    });
	}*/
	app.use(express.static(path.join(__dirname,'../public')));

	return app;
};