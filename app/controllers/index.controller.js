'use strict';

var config = require('../../config/configENVFile'),
  Users = require('../models/users');
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

function createAccount (req, res) {
  console.log(JSON.stringfy(req.user));
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
  newAccount: newAccount
}