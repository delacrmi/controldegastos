'use strict';

var config = require('../../config/configENVFile'),
  user = require('./users.controller'),
  circularCache = [];

function root (req,res) {
  res.render('index',{proxy: config.proxy});
}

function contact (req,res) {
  res.render('contact',{proxy: config.proxy});
}

function menu (req, res) {
  res.render('menu',{proxy: config.proxy});
}

function login (req, res) {
  res.render('login',{proxy: config.proxy});
}

function newAccount(req, res) {
  res.render('users/new',{proxy: config.proxy});
};

function createAccount (req, res, next) {
  console.log(JSON.stringify(req.body.user));
  user.create(req,res,function() {
    res.send(req.user);
  });
}

function sing (req, res) {
  // body...
}

module.exports = {
  index: root,
  contact: contact,
  menu: menu,
  login: login,
  sing: sing,
  newAccount: newAccount,
  createAccount: createAccount
}

//circular Structure
  function circularStructure(key, value) {
    if (typeof value === 'object' && value !== null) {
        if (circularCache.indexOf(value) !== -1) {
            // Circular reference found, discard key
            return;
        }
        // Store value in our collection
        circularCache.push(value);
    }
    return value;
  }
//