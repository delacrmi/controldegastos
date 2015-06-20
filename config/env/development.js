module.exports = {
	sessionSecret: 'developmentSessionSecret',
	proxy: '/',
	mongoose: {
		database: 'mongodb://localhost/controldedastosdev'
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