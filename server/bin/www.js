#!/usr/bin/env node

// Express can launch a www executable to handle certain tasks.
// www goes in bin (sometimes .bin to keep it hidden)

// This way, we can set certain properties here
// rather than having them take up space in server.js.
const debug = require('debug')('express-example');

// we bring in the app we exported from server.js
const app = require('../server');

// we set the port of the app
app.set('port', process.env.PORT || 8080);
// app.set('port', process.env.PORT || 3000);

// set our app to listen to the port we set above
const server = app.listen(app.get('port'), function () {
  // then save a log of the listening to our debugger.
  debug('Express server listening on port: ' + server.address().port);
});
