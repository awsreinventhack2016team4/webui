/**
 * Module dependencies.
 */

var express = require('express')
  , main = require('./routes/main')
  , logger = require('./logger')
  , http = require('http')
  , https = require('https')
  , fs = require('fs')
  , path = require('path')
  , session = require('express-session');

var app = express();

var flash = require('connect-flash')
, express = require('express')
, util = require('util');

var logger = require('./logger');

var util = require("util");
var rest = require('restler');
var nconf = require('nconf');
var uuid = require('node-uuid');

app.set('port', process.env.PORT || 3110);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.logger('development'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());

app.set('trust proxy', 1);

app.use(express.session({
  proxy: true,
  resave: false,
  saveUninitialized: false,
  secret: 'keyboard cat'
}));

if (app.get('env') === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  session.cookie = {secure: true, httpOnly: false};
}

app.use(flash());
app.use(app.router);

app.use('/docs', express.static(path.join(__dirname, 'node_modules/bootstrap/docs')));

app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

// First consider commandline arguments and environment variables, respectively.
nconf.argv().env();

// Then load configuration from a designated file.
nconf.file({ file: 'config.json' });

nconf.defaults({
    'ui': {
        'listenport': '80'
    }
});

app.set('listenport', nconf.get('ui:listenport'));

app.get('/', main.home);

function ensureAuthentication (req, res, next) {
  if (req.session.authenticated == true) {
    return next();
  }
  else {
    res.redirect('/login');
  }
}

process.on('uncaughtException', function (err) {
    console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
    console.error(err.stack);
    process.exit(8);
});

function getUserHome() {
  return process.env.HOME || process.env.USERPROFILE;
}

http.createServer(app).listen(app.get('listenport'), function(){
  console.log('Express server listening on port ' + app.get('listenport'));
});
