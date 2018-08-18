const express = require('express');
  hbs = require('express-handlebars'),
  server = express();
// Middleware
server.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(require('./routes'));

module.exports = server