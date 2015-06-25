module.exports = {
	sessionSecret: 'developmentSessionSecret',
	proxy: '/',
	mongoose: {
		database: 'mongodb://localhost/controldegastosdev'
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