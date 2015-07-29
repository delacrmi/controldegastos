'use strict'

module.exports = function(app) {
  var index = require('../controllers/index.controller');

  app.get('/',index.index);
  
  app.get('/contact',index.contact);
  
  app.route('/menu')
    .get(index.menu);
  
  app.route('/login')
  .get(index.login)
  .post(index.sing);

  app.route('/newUser')
    .get(index.newAccount)
    .post(index.createAccount);

}