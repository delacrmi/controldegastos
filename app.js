'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var db = require('./config/dbConnect').mongoose,
	app = require('./config/server')(3000);
	//passport = require('./config/passport')();
//var db =  mongoose();
db();
app.listen(app.get('port'));
module.exports = app;

console.log('server running in http://localhost:'+app.get('port')+'/');