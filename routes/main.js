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

  rest.get('https://s3-us-west-2.amazonaws.com/wcs-giraffe/data/sample-api-data/observations/Weapons+and+Gear+Seized.json',
  {data: 'Content-Type: application/json'}).once('complete', function(data1, response) {

    rest.get('https://s3-us-west-2.amazonaws.com/wcs-giraffe/data/sample-api-data/observations/Wildlife.json',
    {data: 'Content-Type: application/json'}).once('complete', function(data2, response) {

      rest.get('https://s3-us-west-2.amazonaws.com/wcs-giraffe/data/sample-api-data/observations/People+Direct+Observation.json',
      {data: 'Content-Type: application/json'}).once('complete', function(data3, response) {

        rest.get('https://s3-us-west-2.amazonaws.com/wcs-giraffe/data/sample-api-data/patrols/Illegal+logging+observations.json',
        {data: 'Content-Type: application/json'}).once('complete', function(data4, response) {

          rest.get('https://s3-us-west-2.amazonaws.com/wcs-giraffe/data/sample-api-data/patrols/Elephant+carcasses+-+observations.json',
          {data: 'Content-Type: application/json'}).once('complete', function(data5, response) {

            rest.get('https://s3-us-west-2.amazonaws.com/wcs-giraffe/data/sample-api-data/patrols/Snare+observations.json',
            {data: 'Content-Type: application/json'}).once('complete', function(data6, response) {

              rest.get('https://s3-us-west-2.amazonaws.com/wcs-giraffe/data/sample-api-data/patrols/Observations+of+hunting+camps.json',
              {data: 'Content-Type: application/json'}).once('complete', function(data7, response) {

        //logger.info(util.inspect(data1));

                  res.render('index', { title: 'Hackathon',
                   weapons: JSON.stringify(data1),
                   wildlife: JSON.stringify(data2),
                   people: JSON.stringify(data3),
                   logging: JSON.stringify(data4),
                   elephant: JSON.stringify(data5),
                   snares: JSON.stringify(data6),
                   huntingCamps: JSON.stringify(data7)
                  });

              });
            });
          });
        });
      });


    });

  });

}
