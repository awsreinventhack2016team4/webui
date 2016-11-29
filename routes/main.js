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

  rest.get('https://s3-us-west-2.amazonaws.com/wcs-giraffe/data/sample-api-data/Weapons+and+Gear+Seized.json',
  {data: 'Content-Type: application/json'}).once('complete', function(data1, response) {

    rest.get('https://s3-us-west-2.amazonaws.com/wcs-giraffe/data/sample-api-data/Wildlife.json',
    {data: 'Content-Type: application/json'}).once('complete', function(data2, response) {

      rest.get('https://s3-us-west-2.amazonaws.com/wcs-giraffe/data/sample-api-data/People+Direct+Observation.json',
      {data: 'Content-Type: application/json'}).once('complete', function(data3, response) {

        //logger.info(util.inspect(patrolData));
        res.render('index', { title: 'Hackathon',
         weapons: data1,
         wildlife: data2,
         people: data3
        });

      });


    });

  });

}
