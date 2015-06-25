module.exports = {
	sessionSecret: 'controldegastosSessionSecret',
	proxy: '/',
	mongoose: {
		database: 'mongodb://localhost/controldegastos'
	},
	mysql: {
		host: '',
		user: '',
		password: '',
		database: ''
	},
	oracle:{
		user: '******',
		password: '****',
		connectString: 'host/database'
	},
	googleStrategy: {
		clientID: '',
		clientSecret: '',
		callbackURL: ''
	}
};