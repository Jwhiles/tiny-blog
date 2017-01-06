const Hapi = require('hapi');
const Inert = require('inert');
const Path = require('path');
const route = require('./routes.js');
const server = new Hapi.Server();

server.connection({
  port: process.env.PORT || 8000,
  host: process.env.IP || '0.0.0.0',
  routes: {
    files: {
      relativeTo: Path.join(__dirname, '../public')
    }
  }
});

server.register(Inert, (err) => {
  if (err) { throw err; }
  server.route(route);
});

module.exports = server;
