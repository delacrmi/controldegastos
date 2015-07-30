'use strict';

var config = require('../../config/configENVFile'),Users = require('../models/users');

function createUser (req,res,next) {
  var user = new Users(req.body.user);
  user.emails = [req.body.user.email];
  user.provider = 'local';
  user.save(function(err) {
    if(err){
      if(next)
        next(err);
      else
        console.log(err);
    }else{
      req.user = user;
      if(next)
        next();
    }
  });
}

module.exports = {
  create: createUser,
  /*update: updateUser,
  delete: deleteUser,
  select: {
    one: fineOne,
    all: fineAll,
    by: fineBy
  }*/
}