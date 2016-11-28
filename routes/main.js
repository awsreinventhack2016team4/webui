var logger = require('./logger');
var rest = require('restler');
var nconf = require('nconf');
var util = require("util");

exports.home = function(req, res) {

  res.header('Cache-Control', 'public, max-age=7200');
  var uuid = require('node-uuid');
  res.header('X-Transaction-ID', uuid.v4());

  var os = require("os");
  var hostname = os.hostname();
  res.header('Server', hostname);

  res.render('index', { title: 'Hackathon'});

}
