'use strict';

var config = require('./configENVFile'),
	mongoose = require('mongoose');
	//mysql = require('mysql-warp');

module.exports = {
	mongoose: function(models) {
		var db = mongoose.connect(config.mongoose.database,function(err,res) {
			if (err){
				console.error(err);
				return null;
			}

			console.info('Conneted Database to %s',config.mongoose.database);
			require('../app/models/users');

			return db;
		});
	}/*,
	mysql: function() {
		var db = mysql.create({
			host: config.host,
			user: config.user,
			password: config.password,
			database: config.database
		});

		return db;
	}*/
};

function addRequire(models){
	if(Array.isArray(models))
		for(var a = 0; i < models.length; i++){
			addModel(model);
		}
	else
		addModel(model);
};

function addModel(model) {
	if(typeof model === 'string'){
		require(model);
		console.info("Added model %s",model);
	}else
		throw new Error("The path model isn't a string "+model);
};