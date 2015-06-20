'use strict';

var config = require('../../config/configENVFile');

function root (req,res) {
  res.render('index',{proxy: config.proxy});
}

function contact (req,res) {
  res.render('contact',{proxy: config.proxy});
}

function menu (req, res) {
  res.render('menu',{proxy: config.proxy});
}


module.exports = {
  index: root,
  contact: contact,
  menu: menu
}